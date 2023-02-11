import type { ScriptTagType, NoscriptTagType } from '.'
import type { HtmlTagDescriptor } from 'vite'


const generateScriptTagDescriptor = (
  scriptTag: ScriptTagType
): HtmlTagDescriptor | undefined => {
  const scriptTagDescriptor: HtmlTagDescriptor = { tag: 'script' }

  if (typeof scriptTag === 'string') {
    return {
      ...scriptTagDescriptor,
      children: scriptTag,
      injectTo: 'body'
    }
  }

  if ('src' in scriptTag) {
    const { src, attributes, injectTo = 'body' } = scriptTag

    return {
      ...scriptTagDescriptor,
      attrs: {
        ...attributes,
        src
      },
      injectTo
    }
  }

  if ('children' in scriptTag) {
    const { children, attributes, injectTo = 'body' } = scriptTag

    return {
      ...scriptTagDescriptor,
      children,
      attrs: attributes,
      injectTo
    }
  }

  return
}


const generateNoscriptTagDescriptor = (
  noscriptTag: NoscriptTagType
): HtmlTagDescriptor | undefined => {
  const noscriptTagDescriptor: HtmlTagDescriptor = { tag: 'noscript' }

  if (typeof noscriptTag === 'string') {
    return {
      ...noscriptTagDescriptor,
      children: noscriptTag,
      injectTo: 'body'
    }
  }

  if ('children' in noscriptTag) {
    const { children, injectTo = 'body' } = noscriptTag

    return {
      ...noscriptTagDescriptor,
      children,
      injectTo
    }
  }

  return
}


export {
  generateScriptTagDescriptor,
  generateNoscriptTagDescriptor
}
