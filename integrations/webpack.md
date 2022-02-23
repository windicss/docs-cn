<Logo name="webpack" class="logo-float-xl"/>

# [Webpack](https://webpack.js.org/) 集成 {#integration-for-webpack}

<PackageInfo name="windicss-webpack-plugin" author="harlan-zw" />

## 选择合适的插件 {#choosing-the-right-plugin}

Windi CSS 的 webpack 插件通过与语言和框架无关的方式来实现 Windi CSS。

### 支持的第一类框架 {#first-class-framework-support}

如果你的框架包含在如下列表中，请使用专门为你的框架建立的插件。

| 框架 |   |
| :-------- | :----- |
| <Logo name="nuxt" class="inline"/> Nuxt.js | [nuxt-windicss](/integrations/nuxt.html) |
| <Logo name="svelte" class="inline"/> Svelte | [svelte-windicss-preprocess](/integrations/svelte.html) |
| <Logo name="vue" class="inline"/> Vue CLI | [vue-cli-plugin-windicss](/integrations/vue-cli.html) |
| <Logo name="gridsome" class="inline"/> Gridsome | [gridsome-plugin-windicss](/integrations/gridsome.html) |

<<<<<<< HEAD

### 支持的第二类框架{#second-class-framework-support}
=======
### Second Class Framework Support
>>>>>>> 3967dfbeff35ba1d6b556e37ba926bef55685b1c

这些框架已经可以成功设置并有文档记录，完全适配 Windi。

| 框架 |    |
| :-------- | :----- |
| Next.js | [安装](#next-js) - [示例](https://github.com/windicss/windicss-webpack-plugin/blob/master/example/next/) |
| CRACO | [安装](#create-react-app-craco) - [示例](https://github.com/windicss/windicss-webpack-plugin/blob/master/example/craco/)|
| Storybook | [安装](#storybook) - [示例](https://github.com/windicss/windicss-webpack-plugin/tree/master/example/vue3-storybook) |
| Umi.js | [示例](https://github.com/windicss/windicss-webpack-plugin/tree/master/example/umijs) |

### 不支持的框架 {#non-supported-frameworks}

这些框架已经用此包测试过，但无法正常工作。

- ❌ Angular

## 安装 {#install}

如果你正在使用自定义的 webpack 设置进行构建，那么请反馈你发现的任何问题。

```bash
yarn add windicss-webpack-plugin -D
# npm i windicss-webpack-plugin -D
```

如果你之前使用的是 Tailwind，请阅读[迁移指南](/guide/migration.html)。

### 配置 {#configure-webpack}

你需要把插件添加到你的 webpack 配置文件。如果你有直接修改 `webpack.config.js` 的权限，可以如下面这样做：

```js webpack.config.js
import WindiCSSWebpackPlugin from 'windicss-webpack-plugin'

export default {
  // ...
  plugins: [
    new WindiCSSWebpackPlugin(),
  ],
}
```

<<<<<<< HEAD

#### 非 ES 模块安装 {#non-es-modules-install}
=======
#### Non ES Modules Install
>>>>>>> 3967dfbeff35ba1d6b556e37ba926bef55685b1c

对于不支持 es 模块导入语法的 webpack 配置，你可以尝试以下方法。

```js webpack.config.js
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

export default {
  // ...
  plugins: [
    new WindiCSSWebpackPlugin(),
  ],
}
```

### 引入虚拟模块 {#include-the-virtual-module}

在一个入口文件或只加载一次的文件中，添加 `windi.css` 的导入。

ESM

```ts main.js
import 'windi.css'
```

CJS

```ts main.js
require('windi.css')
```

<<<<<<< HEAD
### Windi 配置 {#windi-config}

如果你还没有配置文件的话，在你的项目根目录下添加一个名为 `windi.config.ts` 的文件。
=======
### Windi Config
>>>>>>> 3967dfbeff35ba1d6b556e37ba926bef55685b1c

#### 扫描 {#scanning}

如果你在启动 Windi 时有问题，你的类没有被选中，你可能需要修改扫描。

在服务器启动时，Windi 将扫描你的代码，并提取工具类使用。默认情况下，只有 “src/” 下的扩展名为 `"html", "vue", "md", "mdx", "pug", "jsx", "tsx", "svelte", "ts", "js", "css", "postcss"` 的文件会被收录。

```ts windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    // A common use case is scanning files from the root directory
    include: ['**/*.{vue,html,jsx,tsx}'],
    // if you are excluding files, make sure you always include node_modules and .git
    exclude: ['node_modules', '.git', 'dist'],
  },
})
```

## 配置文件 {#configuration}

### 预检样式 (样式重置) {#preflight-style-resetting}

预检样式 (Preflight) 随需启用，如果你想完全关掉它，可按照下面进行配置

```ts windi.config.ts
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

为了实现这个，你需要在 `windi.config.ts` 中的 `safelist` 选项中指定可能的组合。

```ts windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  safelist: 'p-1 p-2 p-3 p-4',
})
```

或者你可以这样做

```ts windi.config.ts
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

<<<<<<< HEAD
### 层级排序 {#layers-ordering}

默认情况下，导入 `windi.css` 或 `virtual:windi.css` 将以 `base - components - utilities` 的顺序导入全部三个层。如果你想对这些顺序有更好的控制，你可以通过以下方式分开它们：
=======
### Layers Ordering

By default, importing `windi.css` or `virtual:windi.css` will import all the three layers with the order `base - components - utilities`. If you want to have better controls over the orders, you can separate them by:
>>>>>>> 3967dfbeff35ba1d6b556e37ba926bef55685b1c

```diff
- import 'virtual:windi.css'
+ import 'virtual:windi-base.css'
+ import 'virtual:windi-components.css'
+ import 'virtual:windi-utilities.css'
```

<<<<<<< HEAD
你可以自定义 css 来覆盖确定的层级样式：
=======
You can also make your custom CSS be able to be overridden by certain layers:
>>>>>>> 3967dfbeff35ba1d6b556e37ba926bef55685b1c

```diff
  import 'virtual:windi-base.css'
  import 'virtual:windi-components.css'
+ import './my-style.css'
  import 'virtual:windi-utilities.css'
```

### 完整配置 {#full-configuration}

完整的配置细节见 [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts)。

## 安装示例 {#install-examples}

### Next.js

```js next.config.js
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  // ...
  webpack(config) {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
}
```

```js pages/_app.js
import 'windi.css'
```

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
})
```

注意：JSX的使用处于实验阶段。请反馈你发现的任何问题。

<<<<<<< HEAD
### Create React App - CRACO {#create-react-app-craco}
=======
### Create React App - CRACO
>>>>>>> 3967dfbeff35ba1d6b556e37ba926bef55685b1c

```js craco.config.js
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  // ...
  webpack: {
    plugins: {
      add: [
        new WindiCSSWebpackPlugin({
          virtualModulePath: 'src',
        }),
      ],
    },
  },
}
```

```js src/index.js
import './windi.css'
```

```ts windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,js,css,html}'],
    exclude: ['node_modules', '.git', '.next'],
  },
})
```

注意：JSX的使用处于实验阶段。请反馈你发现的任何问题。

### 非 ES 模块 {#non-es-modules}

对于不支持 es 模块导入语法的webpack配置，你可以尝试以下方法。

```js webpack.config.js
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

export default {
  // ...
  plugins: [
    new WindiCSSWebpackPlugin(),
  ],
}
```

```ts
// main.js
require('windi.css')
```

### Storybook {#storybook}

```js .storybook/main.js
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  // ...
  webpackFinal: (config) => {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
}
```

```js .storybook/preview.js
import 'windi.css'
```

注意：CSS 预处理器（如 SCSS，LESS）不能与 `@apply` 一起使用，请使用通用的 CSS。

### 代码示例 {#code-examples}

参考 [示例](https://github.com/windicss/windicss-webpack-plugin/tree/master/example) 的样例工程。
