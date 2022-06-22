[CSS directives]: /features/directives
[classes utilities]: /utilities/

<Logo name="vue" class="logo-float-xl"/>

# [Vue CLI](https://cli.vuejs.org) 集成 {#integration-for-vue-cli}

<PackageInfo name="vue-cli-plugin-windicss" author="harlan-zw" />

## 特性 {#features}

- ⚡️ **极速** —— 比 [vue-cli-plugin-tailwind](https://github.com/forsartis/vue-cli-plugin-tailwind) 快 20~100 倍
- 🧩 按需使用的 CSS 工具 (与 Tailwind CSS v2 兼容)，原生元素样式重置
- 🍃 从 `tailwind.config.js` 加载配置
- 📄 CSS `@apply` / `@screen` 指令转换
- 🎳 支持公共组 - 例如： `bg-gray-200 hover:(bg-gray-100 text-red-300)`

<<<<<<< HEAD
## 安装 {#install}
=======
## Install
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6

使用 Vue CLI 进行安装。(建议使用 Vue CLI 4+)

```
vue add windicss
```

:warning: 本模块为预发布版本，请报告你发现的任何 [问题](https://github.com/windicss/vue-cli-plugin-windicss/issues)。

<<<<<<< HEAD
然后，进行配置
=======
Then, add the configuartion
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6

```js vue.config.js
module.exports = {
  pluginOptions: {
    windicss: {
      // 具体配置请查看 https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
    },
  },
}
```

<<<<<<< HEAD
最后，在你的入口文件中引入 `windi.css`
=======
And finally, import `windi.css` in your entry
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6

```js main.js
import 'windi.css'
```

<<<<<<< HEAD
现在，开始在你的项目中使用 [类实用程序] 或 [CSS 指令]，并享受它们的便利！⚡️
=======
That's it! Starting using [classes utilities] or [CSS directives] in your app, and enjoy the speed! ⚡️
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6

## 迁移 {#migrating}

如果你以前使用的是 `vue-cli-plugin-tailwind`，请查阅 [文档](https://windicss.netlify.app/guide/migration.html)。

```bash
yarn remove vue-cli-plugin-tailwind
```

## 选项 {#options}

- 默认:

```js
export default {
  scan: {
    dirs: ['src'],
    exclude: [
      'node_modules',
      '.git',
      'public/**/*',
      '*.template.html',
      'index.html',
    ],
    include: [],
  },
  transformCSS: 'pre',
}
```

- 配置参考见 [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts)。

### 示例 {#examples}

#### 禁用预检样式 {#disable-preflight}

_ngridsome.config.js_

```js
module.exports = {
  // ...
  pluginOptions: {
    windicss: {
      preflight: false,
    },
  },
}
```

## 注意事项 {#caveats}

### Scoped Style

带有 scoped style 的 `@media` 指令 **只在** `css` `postcss` `scss` 中有效 ，而在 `sass` `less` `stylus` 中无效。
