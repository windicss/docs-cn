[速度对比]: https://twitter.com/antfu7/status/1361398324587163648
[CSS 指令]: /features/directives
[classes 工具类]: /utilities/
[migration]: /guide/migration

<Logo name="vite" class="logo-float-xl"/>

# [Vite](https://vitejs.dev) 集成 {#integration-for-vite}

<PackageInfo name="vite-plugin-windicss" author="antfu" />

## 特性 {#features}

- ⚡️ **极速** - 在 Vite 中比 Tailwind 快20~100倍
- 🧩 按需使用 CSS 工具类（与 Tailwind CSS v2 完全兼容）
- 📦 按需使用原生元素样式重置（预检样式）
- 🔥 模块热替换 (HMR)
- 🍃 从 `tailwind.config.js` 加载配置
- 🤝 与框架无关 - Vue、 React、Svelte and vanilla！
- 📄 CSS `@apply` / `@screen` 指令转换（也适用于 Vue SFC 的 `<style>` ）
- 🎳 支持变量组 - 如 `bg-gray-200 hover:(bg-gray-100 text-red-300)`
- 😎 ["Devtools 设计"](#design-in-devtools) - 支持传统的 Tailwind 运行方式

> 查看 Windi CSS 与 Tailwind CSS 在 Vite 中的[速度对比]。

## 安装 {#install}

安装相关包：

```bash
npm i -D vite-plugin-windicss windicss
```

然后，在你的 Vite 配置中添加插件：

```ts vite.config.js
import WindiCSS from 'vite-plugin-windicss'

export default {
  plugins: [
    WindiCSS(),
  ],
}
```

最后，在你的 Vite 入口文件中导入 `virtual:windi.css`：

```js main.js
import 'virtual:windi.css'
```

现在可以在你的应用中开始使用 [classes 工具类] 或者 [CSS 指令] ，感受一下速度吧！⚡️

> 如果你是从 Tailwind CSS 迁移过来，也可以查看 [_迁移_ 章节][migration] 文档

## 支持 {#supports}

### TypeScript {#typeScript}

希望在你的 `tailwind.config.js` 启用 TypeScript？当然可以。

将它重命名为 `tailwind.config.ts` 即可。

```ts tailwind.config.ts
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

### Pug Support {#pug-support}

当在工作区中找到依赖项 `pug` 时，它将自动启用对 `.pug` 和 Vue SFC 的支持。

### "DevTools 设计" {#design-in-devtools}

当你使用基于 Purge 的 Tailwind 时，常见的情况是，你能在浏览器中查看所有的类，同时你可以通过直接改变 DevTools 中的类来了解其是如何生效的。但 DevTools 依旧不能探知那些你还没有在源码中使用的类，所以你可能认为这是“按需”的某种限制。

但幸运的是 **我们在这里打破了限制** 😎 查看 [视频示例](https://twitter.com/antfu7/status/1372244287975387145).

只需要在你的主入口文件中添加下面这行代码

```js
import 'virtual:windi-devtools'
```

它将自动帮你启用。

不用担心最后的打包，在生产版本中 `virtual:windi-devtools` 将是一个空模块，所以你无需专门处理它。

> ⚠️ 请谨慎使用它，因为我们在底层使用了 [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) 来检测类的改变。这意味着你的手动更改和脚本所做的更改都将被检测到并包含在样式表中。**使用动态构造类**（不一定）时，这可能会导致开发和生产版本之间产生一些不一致。我们建议你将动态部分添加到 `safelist` 中，或者如果可以的话，为你的生产环境设置 UI 回归测试。

## 配置 {#configuration}

### 预检样式 (样式重置) {#preflight}

在按需使用下预检是启用的。如果需要禁用，可以按以下方式配置

```ts windi.config.ts
import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  preflight: false,
})
```

### 白名单 {#safelist}

默认情况下，我们会静态扫描你的源码，并查找所有使用的工具类，然后按需生成相应的 CSS。但存在一些局限性：在 runtime 时工具类无法有效匹配，例如

```html
<!-- 不会被检测到 -->
<div className={`p-${size}`}>
```

因此，你需要在 `windi.config.ts` 的 `safelist` 选项中指定可能的组合

```ts windi.config.ts
import { defineConfig } from 'vite-plugin-windicss'

export default defineConfig({
  safelist: 'p-1 p-2 p-3 p-4',
})
```

或者，也可以这样做

```ts windi.config.ts
import { defineConfig } from 'vite-plugin-windicss'

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
  safelist: [
    range(3).map(i => `p-${i}`), // p-1 到 p-3
    range(10).map(i => `mt-${i}`), // mt-1 到 mt-10
  ],
})
```

### 扫描 {#scanning}

在服务启动时，`vite-plugin-windicss` 将扫描你的源码并提取使用的工具类。默认情况下，只有 `src/` 下带有 `vue、html、mdx、pug、jsx、tsx` 扩展名的文件被包含。如果你想扫描其他位置的文件类型，则可以通过以下方式进行配置：

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{vue,html,jsx,tsx}'],
    exclude: ['node_modules', '.git'],
  },
})
```

或者在插件选项中：

```ts vite.config.js
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


### [属性模式](https://windicss.org/posts/v30.html#attributify-mode) {#attributify-mode}

通过以下配置启用

```ts windi.config.ts
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

#### 前缀 {#prefix}

如果担心命名冲突，可以通过以下方式给属性模式添加自定义前缀：

```ts windi.config.ts
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

<<<<<<< HEAD
### [别名配置](https://windicss.org/posts/v30.html#alias-config) {#alias-config}
=======
### Alias Config

Be aware, alias entries need to be prefixed with * when used, eg:
```html
<div class="*hstack">
```
See [this release post](https://windicss.org/posts/v30.html#alias-config) for the difference between shortcuts and alias.
>>>>>>> b3d5a3d37f74122c370ff72419abe847674c9247

```ts windi.config.ts
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

### 层顺序 {#layers-ordering}

> 从 v0.14.x 开始支持

默认情况下，导入 `virtual:windi.css` 将会按顺序导入全部三个层 `base - components - utilities` 。如果你想更好地控制顺序，可以通过以下方法将它们分开：

```diff
- import 'virtual:windi.css'
+ import 'virtual:windi-base.css'
+ import 'virtual:windi-components.css'
+ import 'virtual:windi-utilities.css'
```

你还可以使自定义的 css 能够被某些层覆盖：

```diff
  import 'virtual:windi-base.css'
  import 'virtual:windi-components.css'
+ import './my-style.css'
  import 'virtual:windi-utilities.css'
```

### 更多 {#more}

有关更多配置参考，请参阅 [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts) 。

## 注意事项 {#caveats}

### Scoped Style {#scoped-style}

需要 **设置 `transformCSS:'pre'` 才能使 Scoped Style 工作**。

带有 scoped style 的 `@media` 指令 **只在** `css` `postcss` `scss` 中有效 ，而在 `sass` `less` `stylus` 中无效。

## 示例 {#example}

请参阅 [示例](https://github.com/windicss/vite-plugin-windicss/blob/main/examples) 中的 *react* 、*vue* 和 *vue with pug* 示例项目，或 [`Vitesse`](https://github.com/antfu/vitesse)

---

## SvelteKit (从 1.0.0-next.102 开始) {#sveltekit-as-of-1-0-0-next-102}

通过 `npm i -D vite-plugin-windicss` 安装插件并修改 svelte 配置：

```diff
import preprocess from 'svelte-preprocess'
+ import WindiCSS from 'vite-plugin-windicss'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
+   vite: {
+     plugins: [
+       WindiCSS(),
+     ],
+   },
  },
};

export default config
```

在 __layout.svelte 文件的顶部添加 `import "virtual:windi.css"` ：

```html __layout.svelte
<script>
  import "virtual:windi.css"

  // 如果你想要启用 windi devtools
  import { browser } from "$app/env";
  if (browser) import("virtual:windi-devtools")
  // ...
</script>
<!-- ...其他的 __layout.svelte 代码 -->
```
