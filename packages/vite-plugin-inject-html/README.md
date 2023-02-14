# vite-plugin-inject-html

[![npm package](https://img.shields.io/npm/v/vite-plugin-inject-html.svg)](https://npmjs.com/package/vite-plugin-inject-html) [![node compatibility](https://img.shields.io/node/v/vite-plugin-inject-html.svg)](https://nodejs.org/en/about/releases)

## Detailed Documentation

For fully typed and detailed documentation, [please visit here](https://docs.aelita.me/docs/vite-plugin-inject-html.html).


## Install

Required version:

- `Node.js` >= 14.18.0
- `Vite` >= 2.0.0

```bash
pnpm add -D vite-plugin-inject-html
```



## Basic usage

```ts {7-9}
// vite.config.ts
import { defineConfig } from 'vite'
import injectHTMLPlugin from 'vite-plugin-inject-html'

export default defineConfig({
  plugins: [
    injectHTMLPlugin({
      // ...options
    }),
    // ...otherPlugins
  ]
})
```




## Supported Options

- `favicon` - favicon url
- `title` - title
- `metas` - `<meta>` tags
- `links` - `<link>` tags
- `externalStyleSheets` - external style sheet urls
- `scripts` - `<script>` tags
- `noscripts` - `<noscript>` tags
- `otherTags` - other tags or customizing `injectTo`
