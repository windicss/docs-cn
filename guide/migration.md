[auto]: /features/value-auto-infer
[design]: /posts/story

# 从 Tailwind CSS 迁移 {#migrate-from-tailwind-css}

### `package.json` {#package-json}

一些依赖不再是必须的。如果它们只是 Tailwind CSS 需要的，你可以移除它们了。

```diff
- "tailwindcss": "*",
- "postcss": "*",
- "autoprefixer": "*",
+ "windicss": "*"
```

### 基础样式 {#base-styles}

你现在可以从你的 css 入口中移除 Tailwind CSS 的引入。

```diff
- @import 'tailwindcss/base';
- @import 'tailwindcss/components';
- @import 'tailwindcss/utilities';
```

（可选的）基于你所使用的集成工具，你可能需要在入口明确地导入 `virtual:windi.css`。请检查工具的文档来获得更多的细节。

```js
// main.js
import 'virtual:windi.css'
```

### 配置文件 {#configurations}

所有的可变修饰 (variants) 是 [自动启用][auto] 的，`variant` 和 `purge` 配置不再需要。

`colors` 和 `plugins` 需要从 `windicss` 引入来替代。

我们同时兼容 `windi.config.js` 或 `tailwind.config.js`

```diff
-const colors = require('tailwindcss/colors')
+const colors = require('windicss/colors')
-const typography = require('@tailwindcss/typography')
+const typography = require('windicss/plugin/typography')

export default {
- purge: {
-   content: [
-     './**/*.html',
-   ],
-   options: {
-     safelist: ['prose', 'prose-sm', 'm-auto'],
-   },
- },
- variants: {
-   extend: {
-     cursor: ['disabled'],
-   }
- },
+ extract: {
+   include: ['./**/*.html'],
+ },
+ safelist: ['prose', 'prose-sm', 'm-auto'],
  darkMode: 'class',
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    }
  },
}
```

### 清理（可选的） {#cleanup-optional}

如果你不使用下面配置文件的其他特性，你可以删掉它。

```diff
- postcss.config.js
```
