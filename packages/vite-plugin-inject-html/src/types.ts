import type { HtmlTagDescriptor } from 'vite'


type TagAttributes = Record<string, boolean | string>

interface WithSrcWithoutTagName extends Pick<HtmlTagDescriptor, 'injectTo'> {
  src: string
  attributes?: TagAttributes
}

interface WithStringChildrenWithoutTagName extends Pick<HtmlTagDescriptor, 'injectTo'> {
  children: string
  attributes?: TagAttributes
}

interface WithoutTagNameAndAttributes extends Pick<HtmlTagDescriptor, 'injectTo'> {
  children: HtmlTagDescriptor[] | string
}

type ScriptTagType = WithSrcWithoutTagName | WithStringChildrenWithoutTagName | string

type NoscriptTagType = WithoutTagNameAndAttributes | string


interface PluginOptions {
  favicon?: string
  title?: string
  metas?: TagAttributes[]
  links?: TagAttributes[]
  externalStyleSheets?: string[]
  scripts?: ScriptTagType[]
  noscripts?: NoscriptTagType[]
  otherTags?: HtmlTagDescriptor[]
}


export type {
  TagAttributes,
  ScriptTagType,
  NoscriptTagType,
  PluginOptions as InjectHTMLPluginOptions
}
