import type { HtmlTagDescriptor } from 'vite'


type TagAttributes = Record<string, boolean | string>

type TagWithoutTagName = string | {
  injectTo?: HtmlTagDescriptor['injectTo']
  content: string
  attributes?: TagAttributes
} | {
  injectTo?: HtmlTagDescriptor['injectTo']
  src: string
  attributes?: TagAttributes
}

type TagWithoutTagNameAndAttributes = string | {
  injectTo?: HtmlTagDescriptor['injectTo']
  children: HtmlTagDescriptor[] | string
} | {
  injectTo?: HtmlTagDescriptor['injectTo']
  content: string
}


interface PluginOptions {
  favicon?: string
  title?: string
  metas?: TagAttributes[]
  links?: TagAttributes[]
  externalStyleSheets?: string[]
  scripts?: TagWithoutTagName[]
  noscripts?: TagWithoutTagNameAndAttributes[]
  otherTags?: HtmlTagDescriptor[]
}


export type {
  TagAttributes,
  TagWithoutTagName,
  TagWithoutTagNameAndAttributes,
  PluginOptions as InjectHTMLPluginOptions
}
