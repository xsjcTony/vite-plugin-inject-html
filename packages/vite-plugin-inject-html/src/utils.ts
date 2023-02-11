import type { TagWithoutTagName, TagWithoutTagNameAndAttributes } from '.'
import type { HtmlTagDescriptor } from 'vite'


const generateScriptTagDescriptor = (
  scriptTag: TagWithoutTagName
): HtmlTagDescriptor | undefined => {
  const scriptTagDescriptor: HtmlTagDescriptor = { tag: 'script' }

  if (typeof scriptTag === 'string') {
    return {
      ...scriptTagDescriptor,
      children: scriptTag,
      injectTo: 'body'
    }
  }

  if ('content' in scriptTag) {
    const { content, attributes, injectTo = 'body' } = scriptTag

    return {
      ...scriptTagDescriptor,
      children: content,
      attrs: attributes,
      injectTo
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

  return
}


const generateNoscriptTagDescriptor = (
  noscriptTag: TagWithoutTagNameAndAttributes
): HtmlTagDescriptor | undefined => {
  const noscriptTagDescriptor: HtmlTagDescriptor = { tag: 'noscript' }

  if (typeof noscriptTag === 'string') {
    return {
      ...noscriptTagDescriptor,
      children: noscriptTag,
      injectTo: 'body'
    }
  }

  if ('content' in noscriptTag) {
    const { content, injectTo = 'body' } = noscriptTag

    return {
      ...noscriptTagDescriptor,
      children: content,
      injectTo
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
