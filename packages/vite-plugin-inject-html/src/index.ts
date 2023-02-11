import { generateScriptTagDescriptor, generateNoscriptTagDescriptor } from './utils'
import type { InjectHTMLPluginOptions as PluginOptions } from './types'
import type { Plugin } from 'vite'


/**
 * Plugin
 */
const injectHTMLPlugin = (options: PluginOptions): Plugin => {
  const {
    favicon,
    title,
    metas = [],
    links = [],
    externalStyleSheets = [],
    scripts = [],
    noscripts = [],
    otherTags = []
  } = options


  return {
    name: 'vite:plugin-inject-html',
    enforce: 'pre',
    transformIndexHtml: (html) => {
      let resultHtml = html
      const resultTags = [...otherTags]


      // favicon
      favicon && resultTags.push({
        tag: 'link',
        attrs: {
          rel: 'icon',
          href: favicon
        },
        injectTo: 'head'
      })

      // title
      if (title) {
        const titleTagRegexp = /<title>.*?<\/title>/

        if (titleTagRegexp.test(resultHtml)) {
          // `<title>` tag exists
          resultHtml = resultHtml.replace(titleTagRegexp, `<title>${title}</title>`)
        } else {
          // `<title>` tag does NOT exist
          resultTags.push({
            tag: 'title',
            children: title,
            injectTo: 'head'
          })
        }
      }

      // metas
      metas.length && metas.forEach((meta) => {
        resultTags.push({
          tag: 'meta',
          attrs: meta,
          injectTo: 'head'
        })
      })

      // links
      links.length && links.forEach((link) => {
        resultTags.push({
          tag: 'link',
          attrs: link,
          injectTo: 'head'
        })
      })

      // external style sheets
      externalStyleSheets.length && externalStyleSheets.forEach((externalStyleSheet) => {
        resultTags.push({
          tag: 'link',
          attrs: {
            rel: 'stylesheet',
            type: 'text/css',
            href: externalStyleSheet
          },
          injectTo: 'head'
        })
      })

      // scripts
      scripts.length && scripts.forEach((script) => {
        const scriptTagDescriptor = generateScriptTagDescriptor(script)
        scriptTagDescriptor && resultTags.push(scriptTagDescriptor)
      })

      // noscripts
      noscripts.length && noscripts.forEach((noscript) => {
        const noscriptTagDescriptor = generateNoscriptTagDescriptor(noscript)
        noscriptTagDescriptor && resultTags.push(noscriptTagDescriptor)
      })


      return {
        html: resultHtml,
        tags: resultTags
      }
    }
  }
}


export default injectHTMLPlugin


export * from './types'
