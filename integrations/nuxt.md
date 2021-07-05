<Logo name="nuxt" class="logo-float-xl"/>

# [Nuxt.js](https://nuxtjs.org) 集成 {#integration-for-nuxt-js}

<PackageInfo name="nuxt-windicss-module" author="harlan-zw" />

## 安装 {#install}

```bash
yarn add nuxt-windicss -D
# npm i nuxt-windicss -D
```

## 用法 {#usage}

在你的 `nuxt.config.js` 中添加如下配置：

```js
// nuxt.config.js
export default {
  buildModules: [
    'nuxt-windicss',
  ],
}
```

## 从 tailwind 迁移 {#migrating-from-tailwind}

此模块不支持 `@nuxtjs/tailwindcss`，你需要移除它。

```diff
buildModules: [
-  '@nuxtjs/tailwindcss',
],
```

如果你有 `tailwind.config.js`，请将其重命名为 `windi.config.js` 或者 `windi.config.ts`。

更多信息，请查阅 [迁移指南](https://windicss.org/guide/migration.html)


## 配置 {#configuration}

### 预检样式(重置样式) {#preflight}

预检样式 (Preflight) 按需启用，如果你想完全禁用它，可按照下面进行配置

```ts
// windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  preflight: false,
})
```

### 白名单 {#safelist}

默认情况下，我们会静态扫描你的源码，并找出所有用到的工具类 (utilities)，然后按需生成响应的 CSS。然而，这存在一定限制，运行时生成的工具类并不能被高效地匹配。例如：

```vue
<!-- 不会被侦测到  -->
<div :class="{ ['p-'+size]: true}">
```

为了解决这个限制，你需要在 `vite.config.js` 中的 `safelist` 选项中指定可能的组合。

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

当服务启动后，`vite-plugin-windicss` 将扫描你的源代码，并把使用到的工具类提取出来。
默认情况下，只有处于项目根目录下且后缀为 `vue, html, md, mdx, pug, jsx, tsx` 的文件才会被扫描。如果你想扫描本地的其他文件，你可以进行配置如下：

```ts
// windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
})
```

或者直接在 nuxt 中配置：

```ts
// nuxt.config.js
export default {
  // ...
  windicss: {
    scan: {
      dirs: ['./'],
      exclude: [
        'node_modules',
        'dist',
      ],
    },
  },
}
```

### 其他选项 {#other-options}

这些是 nuxt 模块的默认选项。
```js
export default {
  // ...
  windicss: {
    scan: {
      dirs: ['./'],
      exclude: [
        'node_modules',
        'dist',
        '.git',
        '.github',
        '.nuxt',
        // 测试文件 & 文件夹
        'coverage',
        '**/__snapshots__',
        '*.test.js',
      ],
    },
    preflight: {
      alias: {
        // 添加 nuxt 别名
        'nuxt-link': 'a',
        // @nuxt/image 模块
        'nuxt-img': 'img',
      },
    },
  },
}
```  

- 配置参考见 [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts)。

nuxt 模块提供与 vite 插件相同的配置API。

### 示例 {#examples}

#### 从一个 node_modules 包中扫描类 {#scan-classes-from-a-node_modules-package}

开箱即用，此模块忽略了 node_modules 中的任何文件，
这是为了简化大部分用户的扫描。

要选择加入这种扫描，你需要自己设置扫描选项。

````js
// nuxt.config.js
export default {
  // ...
  hooks: {
    windicss: {
      options(options) {
        options.scanOptions.exclude = ['.git', '.github', '.nuxt/**/*']
        options.scanOptions.dirs = [
          './node_modules/vue-tailwind-color-picker/src',
          './components',
          './pages',
          './layouts',
        ]
        return options
      },
    },
  },
}
````

#### 从一个 node_modules 包中转换 @apply {#Transform-@apply's-from-a-node_modules-package}

如果你需要从某个 node_module 文件夹中加载一个 CSS 文件，并对 @apply 进行转换，
那么你需要使用 `extraTransformTargets` 选项。

```js
export default {
  // ...
  hooks: {
    windicss: {
      options(options) {
        const transformFiles = await fg(
          '**/*.{vue,css}',
          {
            cwd: join(options.rootDir, '/node_modules/some-vendor/dist'),
            onlyFiles: true,
            absolute: true,
          },
        )
        // 确保文件 @apply's 得到转化
        windiOptions.scanOptions.extraTransformTargets = {
          css: transformFiles.filter((f: string) => f.endsWith('.css')),
          detect: transformFiles.filter((f: string) => f.endsWith('.vue')),
        }

        return options
      },
    },
  },
}
```

## 钩子 {#hooks}

你可以使用以下 nuxt 钩子来修改代码的行为。

`windicss:config`
- 参数：FullConfig

在 Windi CSS 配置被传递给 webpack 插件之前，对其进行修改。

这对修改运行时的样式很有用。

`windicss:options`
- 参数：options

在传递给 webpack 插件之前，修改 Windi 的 CSS 选项。

<<<<<<< HEAD
对于在扫描路径中添加运行时目录很有用。
=======
Useful for adding runtime directories to the scan path.

`windicss:utils`
- Arguments: Windi CSS utils

Exposes the Windi CSS utils as an object. Use this to implement your own custom utilities without
creating duplicate util instances.
>>>>>>> 444037701af0709f1619fb44e5f80d396548765f
