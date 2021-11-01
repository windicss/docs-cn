[utility groups]: /features/
[svelte-windicss-preprocess]: https://github.com/windicss/svelte-windicss-preprocess
[vite-plugin-windicss]: https://github.com/windicss/vite-plugin-windicss
[vite]: /integrations/vite
[Vite SvelteKit guide]: /integrations/vite#sveltekit-as-of-1-0-0-next-102
[migration]: /guide/migration

<Logo name="svelte" class="logo-float-xl"/>

# [Svelte](https://svelte.dev/) 集成 {#integration-for-svelte}

<PackageInfo name="svelte-windicss-preprocess" author="alexanderniebuhr" />

我们的 Svelte 集成使用了 Svelte 预处理器的 API，因此在编译之前运行。这对动态可变的 classes 带来了一些限制。

<<<<<<< HEAD
## 文档 {#documentation}

### 配置选项 {#options}

```ts
interface Options {
  silent?: boolean
  mode?: 'development' | 'production'
  configPath?: string
  disableFormat?: boolean
  devTools?: {
    enabled: boolean
    completions?: boolean
  }
  safeList?: string
  preflights?: boolean
}
```

### 自定义预处理信息 {#custom-pre-processing-information}

在 v4 我们介绍了一个为 svelte 样式标签设置自定义属性的新特性，无需设置即可轻松进行集成。非作用域限制的样式在 svelte 中处理， 根据 svelte 的文档 `:globals()` 标记 classes，`-global-` 标记 keyframes。

### 预检样式（Preflights） {#preflights}

Svelte 本身就会去限制 CSS 样式的作用域，并移除没有使用的样式。如果你把预检样式添加到布局包装器，并且想让那些样式也作用在其他的 `.svelte` 文件中，这会导致一些问题。另一方面，如果编译为自定义元素，则不能使用 `:global()` 样式。

为了能允许用户自己去决定放置预检样式的位置，以及决定样式是全局的还是作用域内的，我们需要遵循下面的语法：

```html
<!-- Layout.svelte -->
<script>
</script>

<slot />

<!-- 作用域受限样式使用预检样式（preflights） -->
<style windi:preflights>
</style>

<!-- 全局预检样式（preflights）使用 -->
<style windi:preflights:global>
</style>
```

### 白名单 {#safe-list}

有时候你可能想基于 script 标签中的一些逻辑去用动态的 classes。从 [svelte-windicss-preprocess] 在 svelte 编译这一步之前启动开始，它就无法可以理解这个动态值了。这里有些办法解决这个情况：要不就在运行时使用 windi，要不使用一个打包器设置取代这个预处理器。或者，如果你一开始就知道所有可能的 classes，把它们加到白名单里面去。

跟预检样式很像，白名单也是在你想用的地方生效，也分受作用域限制的和全局的。

```html
<!-- Layout.svelte -->
<script>
  let shade = 100;
</script>

<div class="bg-red-{shade}">
  我是动态的！
</div>

<!-- 为受作用域限制的白名单 classes 使用这个 -->
<style windi:safelist>
</style>

<!-- 为全局白名单 classes 使用这个 -->
<style windi:safelist:global>
</style>
```

### Windi CSS classes {#windi-css-classes}

默认情况下，所有行内使用的 Windi CSS 的 classes 在原生 svelte 逻辑里面都是受作用域限制的。这有它本身的优势（你可以找到一些在线的讨论）。然而，使用基于 CSS 框架的工具类并不需要确定是不是被覆盖了。举个例子，`bg-gray-600` 之后总会有一些相同的 CSS 代码，并不需要关心哪一个 `.svelte` 文件用到了。

你可能想让文件的大小更安全，以及使用 Windi CSS classes 是不受作用域限制的，但也可能想逐个文件进行选择。

为了使所有的 Windi CSS classes 在一个 `.svelte` 文件的全局样式中，你可以借助 `:global()` 修改或者添加下面的样式标签来实现。

```html
<style windi:global>
</style>
```

### 自定义样式 {#custom-styles}

你可能需要在项目里定义自定义的 CSS classes，并且决定它们是受作用域限制的还是全局的，与 Windi CSS 分开。你可以通过下面的语法来实现：

```html
  <!-- 所有的样式带有 :global() -->
  <style global>
    .btn {
      background: green;
    }
  </style>

  <!-- 可选或者全部受作用域限制 -->
  <style>
    :global(.btn) {
      background: green;
    }
    .btnTwo {
      background: red;
    }
  </style>
```

你可以把这些属性任意组合，完整的样式标签是下面这样：

```html
  <style global windi:global windi:preflights:global windi:safelist:global>
    .custom{
      background: black;
    }
  </style>
```

### VS Code 扩展 {#vs-code-extension}

使用特殊的 CSS 标签语法以及上面的属性，会破坏 VS Code 的 CSS 推断。请确保禁用它们。如果你是使用 [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)，把下面的设置加到你的 VS Code 配置文件中。

```json
{
  "svelte.plugin.css.diagnostics.enable": false
}
```
=======
> If you are using SvelteKit, you can also check out the [Vite SvelteKit guide].
>>>>>>> 09efa4a0e26e8dca78e422b2b3282043c012d10c

## 设置指南 {#setup-guides}

这里分别为 Svelte 和 SvelteKit 提供了两种指南和起步模板。

### Svelte {#svelte}

<<<<<<< HEAD
获取起步模板，从 NPM 安装包
=======
Install the Svelte WindiCSS Preprocessor plugin from NPM
>>>>>>> 09efa4a0e26e8dca78e422b2b3282043c012d10c

```bash
npm i -D svelte-windicss-preprocess
```

移除不需要的全局 CSS 文件，以防止样式中断

```diff
- ./public/global.css
```

移除 `index.html` 中样式表链接

```diff
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width,initial-scale=1'>

    <title>Svelte app</title>

    <link rel='icon' type='image/png' href='/favicon.png'>
-   <link rel='stylesheet' href='/global.css'>
    <link rel='stylesheet' href='/build/bundle.css'>

    <script defer src='/build/bundle.js'></script>
  </head>

  <body>
  </body>

  </html>
```

添加 [svelte-windicss-preprocess] 配置到 `rollup.config.js`

```diff
  import svelte from 'rollup-plugin-svelte';
  import commonjs from '@rollup/plugin-commonjs';
  import resolve from '@rollup/plugin-node-resolve';
  import livereload from 'rollup-plugin-livereload';
  import { terser } from 'rollup-plugin-terser';
  import css from 'rollup-plugin-css-only';
+ import { windi } from 'svelte-windicss-preprocess';

  const production = !process.env.ROLLUP_WATCH;

  function serve() {
    let server;

    function toExit() {
      if (server) server.kill(0);
    }

    return {
      writeBundle() {
        if (server) return;
        server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
          stdio: ['ignore', 'inherit', 'inherit'],
          shell: true
        });

        process.on('SIGTERM', toExit);
        process.on('exit', toExit);
      }
    };
  }

  export default {
    input: 'src/main.js',
    output: {
      sourcemap: true,
      format: 'iife',
      name: 'app',
      file: 'public/build/bundle.js'
    },
    plugins: [
      svelte({
+       preprocess: [
+         windi({}),
+       ],
        compilerOptions: {
          // 在不是生产环境下，启用运行时检查
          dev: !production
        }
      }),
      // 我们将提取组件的 CSS 到一个单独的文件 - 为了更好的性能
      css({ output: 'bundle.css' }),

      // 如果你有从 npm 下载的外部依赖，
      // 你大概率需要这些插件。在某些情况下，你需要额外的配置 -
      // 具体查阅下面的文档
      // https://github.com/rollup/plugins/tree/master/packages/commonjs
      resolve({
        browser: true,
        dedupe: ['svelte']
      }),
      commonjs(),

      // 在开发模式下，调用 `npm run start` 一次
      // bundle 将会被生成
      !production && serve(),

      // 当不在生产环境下
      // 监控 `public` 文件夹，更改刷新浏览器
      !production && livereload('public'),

      // 如果是为生产环境构建（npm run build 取代 npm run dev），压缩代码
      production && terser()
    ],
    watch: {
      clearScreen: false
    }
  };
```

更新 `App.svelte`

```diff
  <script>
    export let name;
  </script>

  <main>
    <h1>Hello {name}!</h1>
    <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
  </main>

+ <style windi:preflights:global windi:safelist:global>
+ </style>
- <style>
-   main {
-     text-align: center;
-     padding: 1em;
-     max-width: 240px;
-     margin: 0 auto;
-   }
-
-   h1 {
-     color: #ff3e00;
-     text-transform: uppercase;
-     font-size: 4em;
-     font-weight: 100;
-   }
-
-   @media (min-width: 640px) {
-    main {
-       max-width: none;
-     }
-   }
- </style>
```

### SvelteKit {#sveltekit}

<<<<<<< HEAD
> 如果你使用 [Vite] 作为打包工具，请阅读 [Vite SvelteKit guide]

获取起步模板，从 npm 中安装包
=======
Install the Svelte WindiCSS Preprocessor plugin from NPM
>>>>>>> 09efa4a0e26e8dca78e422b2b3282043c012d10c

```bash
npm i -D svelte-windicss-preprocess
```

添加 [svelte-windicss-preprocess] 配置到 `svelte.config.js`

```diff
+ import { windi } from "svelte-windicss-preprocess";
  /** @type {import('@sveltejs/kit').Config} */
  const config = {
+   preprocess: [
+     windi({})
+   ],
    kit: {
      // hydrate the <div id="svelte"> element in src/app.html
      target: '#svelte'
    }
  };

export default config;
```

添加布局文件

```diff
+ ./src/routes/__layout.svelte
```

```diff
+ <nav>
+   <a href=".">Home</a>
+   <a href="about">About</a>
+   <a href="settings">Settings</a>
+ </nav>

+ <slot></slot>
+ <style windi:preflights:global windi:safelist:global>
+ </style>
```

## Documentation

### Options

```ts
interface Options {
  silent?: boolean
  mode?: 'development' | 'production'
  configPath?: string
  disableFormat?: boolean
  devTools?: {
    enabled: boolean
    completions?: boolean
  }
  safeList?: string
  preflights?: boolean
}
```

### Custom pre-processing information

With v4 we introduced a new feature set of custom attributes for svelte style tags, to make integration regardless the setup easy and straight forward.
Non scoped styles will be handled in svelte according to their docs with `:global()` for classes and `-global-` for keyframes.

### Preflights

Svelte nature is to scope CSS style and remove unused styles, this can lead to issues if you add preflights into the layout wrapper and want that styles to be available on all other `.svelte` files as well. On the other hand, if you compile to custom-elements you cannot use `:global()` styles.
To allow the user to decide where to put the preflights as well deciding if they should be global or scoped, we have following syntax:

```html
<!-- Layout.svelte -->
<script>
</script>

<slot />

<!-- use this for scoped preflights -->
<style windi:preflights>
</style>

<!-- use this for global preflights -->
<style windi:preflights:global>
</style>
```

### Safe list

Sometimes you want to have dynamic classes based on some logic in script tags. Since [svelte-windicss-preprocess] runs before the svelte compile step, there is no way it could know this dynamic values. There are many approaches to this, either use windi at runtime or using a bundler setup instead this preprocessor one, or if you know all possible classes in the beginning add them to a safe list.

Similar to preflights, this safe list need to be available anywhere you want it, and also scoped and global.

```html
<!-- Layout.svelte -->
<script>
  let shade = 100;
</script>

<div class="bg-red-{shade}">
  I am dynamic!
</div>

<!-- use this for scoped safelist classes -->
<style windi:safelist>
</style>

<!-- use this for global safelist classes -->
<style windi:safelist:global>
</style>
```
### Windi CSS classes

By default, all inline used classes of Windi CSS will be scoped with native svelte logic. This has its advantages (you can find many discussions online).
However, using a utility based CSS framework there is not much need to make sure classes do not override, since e.g. `bg-gray-600` will always have the same CSS code behind it, regardless which `.svelte` file it is used.
You might want to safe more file size and using Windi CSS classes not scoped, but might want to choose this file by file.

To make all Windi CSS classes in one `.svelte` global, with help of `:global()` you can modify / add the following style tag.

```html
<style windi:global>
</style>
```

### Custom styles

You may have the need in your project to define custom CSS classes, and want to decide separate to Windi CSS if they are scoped or global. You can with the following syntax:

```html
  <!-- all styles with :global() -->
  <style global>
    .btn {
      background: green;
    }
  </style>

  <!-- selective or all scoped -->
  <style>
    :global(.btn) {
      background: green;
    }
    .btnTwo {
      background: red;
    }
  </style>
```

You can combine any of this attributes, so full style tag can look like:
```html
  <style global windi:global windi:preflights:global windi:safelist:global>
    .custom{
      background: black;
    }
  </style>
```

### VS Code Extension
Using special CSS tag syntax as well as the attributes above, will break the CSS diagnostics of VS Code. Please make sure to disable them.
If you are using [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode), add this setting to your VS Code configuration file.

```json
{
  "svelte.plugin.css.diagnostics.enable": false
}
```
