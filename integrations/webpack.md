<Logo name="webpack" class="logo-float-xl"/>

# [Webpack](https://webpack.js.org/) 集成 {##integration-for-webpack}

<PackageInfo name="windicss-webpack-plugin" author="harlan-zw" />

## 我应该使用吗? {#should-i-use-this}

Windi CSS 的 webpack 插件通过与语言和框架无关的方式来实现 Windi CSS。

如果你使用 webpack，且**未使用**下面的框架，则可以使用此插件：

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

## 安装 {#install}

```bash
yarn add windicss-webpack-plugin -D
# npm i windicss-webpack-plugin -D
```

如果你之前使用的是 Tailwind，请阅读 [迁移指南](/guide/migration.html)。

### 添加插件 {#add-the-plugin}

你需要把插件添加到你的 webpack 配置文件。如果你有直接修改 `webpack.config.js` 的权限，可以如下面这样做：

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

:warn: 为了实现此效果，你需要使用 [style-loader](https://webpack.js.org/loaders/style-loader/#modules) 并关闭 `modules` 设置选项。

```ts
// main.js
import 'windi.css'
```

## 支持 {#supports}

### TypeScript {#typescript}

为你的 `windi.config.js` 启用 TypeScript

修改文件名为 `windi.config.ts`

```ts
// windi.config.ts
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

## 配置文件 {#configuration}

### 预检样式 (样式重置) {#preflight-style-resetting}

预检样式 (Preflight) 随需启用，如果你想完全关掉它，可按照下面进行配置

```ts
// windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
})
```

### 安全清单 {#safelist}

默认情况下，我们会静态扫描你的源代码，并找出所有用到的工具类 (utilities)，然后随需生成响应的 CSS。然而，这存在一定限制，运行时生成的工具类并不能被高效地匹配。举个例子：

```html
<!-- 不会被侦测到 -->
<div className={`p-${size}`}>
```

为了实现这个，你需要在 `webpack.config.js` 中的 `safelist` 选项中指定可能的组合。

```ts
// windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  safelist: 'p-1 p-2 p-3 p-4',
})
```

或者你可以这样做

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

### 扫描 {#scanning}

当服务启动后，`vite-plugin-windicss` 将扫描你的源代码，并把使用到的工具类提取出来。默认情况下，只有 `src/` 且后缀为 `vue, html, mdx, pug, jsx, tsx` 的文件才会被扫描。如果你想扫描本地的其他文件，你可以进行配置如下：

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

或者在插件的配置选项：

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

<<<<<<< HEAD
## 配置文件 {#configuration-2}
=======
### Layers Ordering

> Supported from v1.1.x

By default, importing `windi.css` or `virtual:windi.css` will import all the three layers with the order `base - components - utilities`. If you want to have better controls over the orders, you can separate them by:

```diff
- import 'virtual:windi.css'
+ import 'virtual:windi-base.css'
+ import 'virtual:windi-components.css'
+ import 'virtual:windi-utilities.css'
```

You can also make your custom css be able to be overridden by certain layers:

```diff
  import 'virtual:windi-base.css'
  import 'virtual:windi-components.css'
+ import './my-style.css'
  import 'virtual:windi-utilities.css'
```

## Configuration
>>>>>>> 1e2a48d413db9800e7170f0bc13a53997db16d43

欲了解更多，请参考 [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts)。

## 示例 {#examples}

参考 [示例](https://github.com/windicss/windicss-webpack-plugin/tree/master/example) 的样例工程。
