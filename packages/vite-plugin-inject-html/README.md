# vite-plugin-inject-html <a href="https://npmjs.com/package/vite-plugin-inject-html" target="_blank" rel="noreferrer">![npm package](https://img.shields.io/npm/v/vite-plugin-inject-html.svg)</a>

## Options

- [`favicon`](#favicon) - favicon url
- [`title`](#title) - title
- [`metas`](#metas) - `<meta>` tags
- [`links`](#links) - `<link>` tags
- [`externalStyleSheets`](#externalStyleSheets) - external style sheet urls
- [`scripts`](#scripts) - `<script>` tags
- [`noscripts`](#noscripts) - `<noscript>` tags
- [`otherTags`](#otherTags) - other tags

### favicon

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import injectHTMLPlugin from 'vite-plugin-inject-html'

export default defineConfig({
  plugins: [
    injectHTMLPlugin({
      favicon: 'https://example.com/favicon.ico'
    })
  ]
})
```

```html
<!-- index.html -->
<head>
  <link rel="icon" href="https://example.com/favicon.ico" />
</head>
```

### title

- It will replace the existing `<title>` tag 

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import injectHTMLPlugin from 'vite-plugin-inject-html'

export default defineConfig({
  plugins: [
    injectHTMLPlugin({
      title: 'My App'
    })
  ]
})
```

```html
<!-- index.html -->
<head>
  <title>My App</title>
</head>
```

### metas

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import injectHTMLPlugin from 'vite-plugin-inject-html'

export default defineConfig({
  plugins: [
    injectHTMLPlugin({
      metas: [
        {
          name: 'description',
          content: 'My App'
        }
      ]
    })
  ]
})
```

```html
<!-- index.html -->
<head>
  <meta name="description" content="My App" />
</head>
```

### links

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import injectHTMLPlugin from 'vite-plugin-inject-html'

export default defineConfig({
  plugins: [
    injectHTMLPlugin({
      links: [
        {
          rel: 'stylesheet',
          href: 'https://example.com/style.css'
        }
      ]
    })
  ]
})
```

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" href="https://example.com/style.css" />
</head
```

### externalStyleSheets

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import injectHTMLPlugin from 'vite-plugin-inject-html'

export default defineConfig({
  plugins: [
    injectHTMLPlugin({
      externalStyleSheets: [
        'https://example.com/style.css',
        'https://example.com/style2.css'
      ]
    })
  ]
})
```

```html
<!-- index.html -->
<head>
  <link rel="stylesheet" type="text/css" href="https://example.com/style.css" />
  <link rel="stylesheet" type="text/css" href="https://example.com/style2.css" />
</head
```

### scripts

- `injectTo` can be `head-prepend`, `head`, `body-prepend` or `body`, default to `body`

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import injectHTMLPlugin from 'vite-plugin-inject-html'

export default defineConfig({
  plugins: [
    injectHTMLPlugin({
      scripts: [
        `console.log('String Content 1')`,
        {
          children: `console.log('String Content 2')`,
          injectTo: 'head-prepend'
        },
        {
          src: 'https://example.com/script.js',
          attributes: { async: true },
          injectTo: 'body-prepend'
        }
      ]
    })
  ]
})
```

```html
<!-- index.html -->
<head>
  <script>
    console.log('String Content 2')
  </script>
</head>
<body>
  <script src="https://example.com/script.js"></script>
  <script>
    console.log('String Content 1')
  </script>
</body>
```

### noscripts

- `injectTo` can be `head-prepend`, `head`, `body-prepend` or `body`, default to `body`

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import injectHTMLPlugin from 'vite-plugin-inject-html'

export default defineConfig({
  plugins: [
    injectHTMLPlugin({
      noscripts: [
        `console.log('String Content 1')`,
        {
          children: `console.log('String Content 2')`,
          injectTo: 'body-prepend'
        }
      ]
    })
  ]
})
```

```html
<!-- index.html -->
<body>
  <noscript>
    console.log('String Content 2')
  </noscript>
  <noscript>
    console.log('String Content 1')
  </noscript>
</body>
```

### otherTags

- `injectTo` can be `head-prepend`, `head`, `body-prepend` or `body`, default to `head-prepend`

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import injectHTMLPlugin from 'vite-plugin-inject-html'

export default defineConfig({
  plugins: [
    injectHTMLPlugin({
      otherTags: [
        {
          tagName: 'h1',
          attrs: { id: 'title' },
          children: 'Hello World',
          injectTo: 'body'
        }
      ]
    })
  ]
})
```

```html
<!-- index.html -->
<body>
  <h1 id="title">Hello World</h1>
</body>
```
