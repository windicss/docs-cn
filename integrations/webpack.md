<Logo name="webpack" class="logo-float-xl"/>

# [Webpack](https://webpack.js.org/) 集成 {##integration-for-webpack}

<PackageInfo name="windicss-webpack-plugin" author="harlan-zw" />

## 我应该使用吗? {#should-i-use-this}

Windi CSS Webpack 插件是一个语言和框架无关的 Windi CSS 实现

如果你的使用这这个插件, 你的框架**不应该**是下面这些

| 语言 / 框架 |   示例 |
| :-------- | :----- |
| <Logo name="vue" class="inline"/> Vue CLI | [✅ 插件](/integrations/vue-cli.html) |
| <Logo name="nuxt" class="inline"/> Nuxt.js | [✅ 插件](/integrations/nuxt.html) |
| <Logo name="gridsome" class="inline"/> Gridsome | [✅ 插件](/integrations/gridsome.html) |
| <Logo name="svelte" class="inline"/> Svelte | [✅ 插件](/integrations/svelte.html) |
| Umi.js | [✅ 配置示例](https://github.com/windicss/windicss-webpack-plugin/tree/master/example/umijs) |
| Next.js - webpack 4 | ✅ [配置示例](https://github.com/windicss/windicss-webpack-plugin/blob/master/example/next/next.config.js) |
| Next.js - webpack 5 | ❌ 不支持 HMR (需要帮助) |
| Angular | ❌ 不支持 (需要帮助) |

## 安装

```bash
yarn add windicss-webpack-plugin -D
# npm i windicss-webpack-plugin -D
```

如果你之前使用的是 Tailwind，请看 [迁移指南](/guide/migration.html)。

### 添加插件

你需要把插件添加到你的 webpack 配置文件。如果你有直接修改 `webpack.config.js` 的权限，你可以如下面这样做。

```js
// webpack.config.js
import WindiCSS from 'windicss-webpack-plugin'

export default {
  // ...
  plugins: [
    new WindiCSS(),
  ],
}
```

带有一个入口文件或者一些只加载一次的东西，添加 `windi.css` 的导入。

:warn: 为了实现这个，你需要使用 [style-loader](https://webpack.js.org/loaders/style-loader/#modules) 并关掉模块。

```ts
// main.js
import 'windi.css'
```

## 支持

### TypeScript

在你的 `tailwind.config.js` 中使用 TypeScript？当然啦，为啥不呢？

改名儿为 `tailwind.config.ts`，完事儿~

```ts
// tailwind.config.ts
import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-3 p-4 p-5',
  theme: {
    extend: {
      colors: {
        teal: {
          100: '#096',
        },
      },
    },
  },
  plugins: [formsPlugin],
})
```

## 配置文件

### 预检查 (样式重置)

Preflight is enabled on-demanded. If you'd like to completely disable it, you can configure it as below

```ts
// windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
})
```

### Safelist

By default, we scan your source code statically and find all the usages of the utilities then generated corresponding CSS on-demand. However, there is some limitation that utilities that decided in the runtime can not be matched efficiently, for example

```html
<!-- will not be detected -->
<div className={`p-${size}`}>
```

For that, you will need to specify the possible combinations in the `safelist` options of `webpack.config.js`.

```ts
// windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  safelist: 'p-1 p-2 p-3 p-4',
})
```

Or you can do it this way

```ts
// windi.config.ts
import { defineConfig } from 'windicss/helpers'

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
  safelist: [
    range(30).map(i => `p-${i}`), // p-1 to p-3
    range(10).map(i => `mt-${i}`), // mt-1 to mt-10
  ],
})
```

### Scanning

On server start, `windicss-webpack-plugin` will scan your source code and extract the utility usages. By default,
only files under `src/` with extensions `vue, html, mdx, pug, jsx, tsx` will be included. If you want to enable scanning for other file types of locations, you can configure it via:

```ts
// windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
})
```

Or in plugin options:

```ts
// webpack.config.js
import WindiCSS from 'windicss-webpack-plugin'

export default {
  // ...
  plugins: [
    new WindiCSS({
      scan: {
        dirs: ['.'], // all files in the cwd
        fileExtensions: ['vue', 'js', 'ts'], // also enabled scanning for js/ts
      },
    }),
  ],
}
```

## Configuration

See [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) for configuration reference.

## Examples

See [examples](https://github.com/windicss/windicss-webpack-plugin/tree/master/example) for sample projects.
