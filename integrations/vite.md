[速度对比]: https://twitter.com/antfu7/status/1361398324587163648
[CSS指令]: /features/directives
[classes工具类]: /utilities/
[migration]: /guide/migration

<Logo name="vite" class="logo-float-xl"/>

# [Vite](https://vitejs.dev) 集成

<PackageInfo name="vite-plugin-windicss" author="antfu" />

## 功能

- ⚡️ **极速** - 比 Tailwind 快20~100倍
- 🧩 按需使用CSS工具类（与 Tailwind CSS v2 完全兼容）
- 📦 按需使用原生元素样式重置（预检）
- 🔥 模块热替换 (HMR)
- 🍃 从 `tailwind.config.js` 加载配置
- 🤝 与框架无关 - Vue, React, Svelte and vanilla!
- 📄 CSS `@apply` / `@screen` 指令转换（也适用于 Vue SFC 的 `<style>` ）
- 🎳 支持变量组 - 如 `bg-gray-200 hover:(bg-gray-100 text-red-300)`
- 😎 ["Design in Devtools"](#design-in-devtools) - 支持传统的 Tailwind 运行方式

> 查看 Windi CSS 与 Tailwind CSS 在 Vite 中的[速度对比]。

## 安装

安装包：

```bash
npm i -D vite-plugin-windicss windicss
```

然后，在你的 Vite 配置中安装插件：

```ts
// vite.config.js
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],
}
```

最后，在你的 Vite 入口文件中导入 `virtual:windi.css`：

```js
// main.js
import 'virtual:windi.css'
```

现在可以在你的应用中开始使用 [classes工具类] 或者 [CSS指令] ，感受一下速度吧！⚡️

> 如果你是从 Tailwind CSS 迁移过来，也可以查看 [_迁移_ 部分][migration]

## 支持

### TypeScript

需要为你的 `tailwind.config.js` 启用TypeScript？当然可以。

将它重命名为 `tailwind.config.ts` 即可。

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

### Pug Support

当在工作区中找到依赖项 `pug` 时，它将自动启用对 `.pug` 和 Vue SFC 的 Pug 支持。

### "Design in DevTools"

It might be a common practice when you use the purge-based Tailwind where you have all the classes in your browser and you can try how things work by directly changing the classes in DevTools. While you might think this is some kind of limitation of "on-demand" where the DevTools don't know those you haven't used in your source code yet.

但遗憾的是 **我们在这里打破了限制** 😎 查看 [视频示例](https://twitter.com/antfu7/status/1372244287975387145).

只需要在你的主入口文件中添加下面这行代码

```js
import 'virtual:windi-devtools'
```

它将自动帮你启用。

不用担心最后的打包，在生产版本中 `virtual：windi-devtools` 将是一个空模块，你无需为此额外的事情:)

> ⚠️ 在使用 [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) 来检测类的更改时请谨慎使用。这意味着你的手动更改和脚本所做的更改都将被检测到并包含在样式表中。**使用动态构造classes**（不一定）时，这可能会导致开发和生产版本之间产生一些不一致。我们建议你将动态部分添加到 `safelist` 中，或在可能的情况下为您的生产版本设置UI回归测试。

## 配置

### 预检 (样式重置)

在按需使用下预检是启用的。如果需要禁用，可以按以下方式配置

```ts
// windi.config.ts
import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  preflight: false,
})
```

### Safelist

默认情况下，我们会静态扫描你的源码，并查找所有使用的工具类，然后按需生成相应的CSS。但存在一些局限性：在runtime时工具类无法有效匹配，例如

```html
<!-- 不会被检测到 -->
<div className={`p-${size}`}>
```

因此，你需要在 `vite.config.js` 的 `safelist` 选项中指定可能的组合

```ts
// windi.config.ts
import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  safelist: 'p-1 p-2 p-3 p-4',
})
```

或者，也可以这样做

```ts
// windi.config.ts
import { defineConfig } from 'vite-plugin-windicss'

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

在服务启动时，`vite-plugin-windicss` 将扫描你的源码并提取使用的工具类。默认情况下，只有 `src/` 下带有 `vue，html，mdx，pug，jsx，tsx` 扩展名的文件被包含。如果你想启用扫描其他位置的文件类型，则可以通过以下方式进行配置：

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

或者在插件选项中：

```ts
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    WindiCSS({
      scan: {
        dirs: ['.'], // 当前目录下所有文件
        fileExtensions: ['vue', 'js', 'ts'], // 同时启用扫描vue/js/ts
      },
    }),
  ],
})
```


### [属性模式](https://windicss.org/posts/v30.html#attributify-mode)

通过以下配置启用

```ts
// windi.config.ts
export default {
  attributify: true,
}
```

然后这样使用：

```html
<button 
  bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200"
>
  Button
</button>
```

#### Prefix

如果担心命名冲突，可以通过以下方式给属性模式添加自定义前缀：

```ts
// windi.config.ts
export default {
  attributify: {
    prefix: 'w:',
  },
}
```

```html
<button 
  w:bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  w:text="sm white"
  w:font="mono light"
  w:p="y-2 x-4"
  w:border="2 rounded blue-200"
>
  Button
</button>
```

### [别名配置](https://windicss.org/posts/v30.html#alias-config)

```ts
// windi.config.ts
export default {
  alias: {
    'hstack': 'flex items-center',
    'vstack': 'flex flex-col',
    'icon': 'w-6 h-6 fill-current',
    'app': 'text-red',
    'app-border': 'border-gray-200 dark:border-dark-300',
  },
}
```

### 模块顺序

> 从v0.14.x开始支持

默认情况下，导入 `virtual:windi.css` 将会按顺序导入全部三个模块 `base - components - utilities` 。如果你想更好地控制顺序，可以通过以下方法将它们分开：

```diff
- import 'virtual:windi.css'
+ import 'virtual:windi-base.css'
+ import 'virtual:windi-components.css'
+ import 'virtual:windi-utilities.css'
```

你还可以使自定义的css能够被某些模块覆盖：

```diff
  import 'virtual:windi-base.css'
  import 'virtual:windi-components.css'
+ import './my-style.css'
  import 'virtual:windi-utilities.css'
```

### 更多

有关更多配置参考，请参阅 [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) 。

## 注意事项

### Scoped Style

需要 **设置 `transformCSS：'pre'` 才能使 Scoped Style 工作**。

带有 scoped style 的 `@media` 指令 **只在** `css` `postcss` `scss` 中有效 ，而在 `sass` `less` `stylus` 中无效。

## 示例

请参阅 [示例](https://github.com/windicss/vite-plugin-windicss/blob/main/examples) 中的 *react* 、*vue* 和 *vue with pug* 示例项目，或 [`Vitesse`](https://github.com/antfu/vitesse)

---

## SvelteKit (从 1.0.0-next.100 开始)

通过 `npm i -D vite-plugin-windicss` 安装插件并修改 svelte 配置：

```js
// svelte.config.js
import preprocess from 'svelte-preprocess'
import WindiCSS from 'vite-plugin-windicss'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    target: '#svelte',
    vite: () => ({
      plugins: [
        WindiCSS.default(),
      ],
    }),
  },
}
export default config
```

在 $layout.svelte 文件的顶部添加 `import "virtual:windi.css"` ：

```html
<!-- $layout.svelte -->
<script>
  import "virtual:windi.css"

  // 如果你需要启用 windi devtools
  import { browser } from "$app/env";
  if (browser) import("virtual:windi-devtools")
  // ...
</script>
<!-- ...其他的 $layout.svelte 代码 -->
```
