<Logo name="gridsome" class="logo-float-xl"/>

# [Gridsome](https://gridsome.org/) 集成 {#integration-for-gridsome}

<PackageInfo name="gridsome-plugin-windicss" author="harlan-zw" />

## 安装 {#install}

```bash
yarn add gridsome-plugin-windicss -D
# npm i gridsome-plugin-windicss -D
```

:warning: 该模块是预发行版本，请反馈你发现的任何[问题](https://github.com/windicss/gridsome-plugin-windicss/issues) 。

## 使用 {#usage}

在 `gridsome.config.js` 中添加以下内容。

```js gridsome.config.js
export default {
  // ...
  plugins: [
    {
      use: 'gridsome-plugin-windicss',
      options: {
        // 详见 https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      },
    },
  ],
}
```

此模块不适用于 `gridsome-plugin-tailwindcss`， 你需要将其删除。

```diff
 plugins: [
    {
-      use: 'gridsome-plugin-tailwindcss',
-      options: {
-        // ...
-      }
    },
  ],
```

如果你有 `tailwind.config.js` 文件，请将其重命名为`windi.config.js` 或 `windi.config.ts`。

有关配置详细信息，请在[此处](https://windicss.netlify.app/guide/configuration.html)查看。

<<<<<<< HEAD

## 迁移 {#migrating}
=======
## Migrating
>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f

如果你以前使用过 `gridsome-plugin-tailwindcss`，请参考有关迁移的[文档](https://windicss.netlify.app/guide/migration.html)。

## 配置 {#configuration}

<<<<<<< HEAD
- 默认:
=======
- Default:

>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f
```js
export default {
  scan: {
    dirs: ['./'],
    exclude: [
      'node_modules',
      '.git',
      'dist',
      '.cache',
      '*.template.html',
      'app.html',
    ],
    include: [],
  },
  transformCSS: 'pre',
  preflight: {
    alias: {
      // 添加 gridsome 别名
      'g-link': 'a',
      'g-image': 'img',
    },
  },
}
```

- 有关配置参考，请查看[options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts)。

### 示例 {#examples}

#### 禁用预检样式{#disable-preflight}

_gridsome.config.js_

```js
export default {
  // ...
  plugins: [
    {
      use: 'gridsome-plugin-windicss',
      options: {
        preflight: false,
      },
    },
  ],
}
```

## 注意事项 {#caveats}

### 样式作用域 {#scoped-style}

限定样式作用域的 `@media` 指令只能与 `css` `postcss` `scss` 一起使用，不能和 `sass`, `less`  `stylus` 一起使用。
