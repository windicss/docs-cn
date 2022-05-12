# 暗色模式 {#dark-mode}

Windi CSS 拥有开箱即用的暗色模式支持。

<<<<<<< HEAD
通过对工具类 (utilities) 添加可变修饰前缀 `dark:`，这些工具类将仅会在暗色模式启用的时候生效。在下面的例子中，`Preview` 文本在亮色模式下是红色的，在暗色模式下是绿色的。试看看：
=======
By prefixing the `dark:` variant to utilities, they will only apply when dark mode is enabled. With the following example, the `Preview` text will be red on the light mode, and green on the dark mode. Try to play with it:
>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f

<ToggleDark />

<InlinePlayground :input="'text-red-400 dark:text-green-400'" :showCSS="true" :showPreview="true"/>

我们提供了两种启用暗色模式的方式，[class 模式](#class-mode) 和 [媒体查询模式](#media-query-mode)。默认情况下，启用的是 `class` 模式。

## Class 模式 {#class-mode}

Class 模式为你提供了更好的支持，控制在哪应该使用暗色模式。

```js windi.config.js
export default {
  darkMode: 'class',
  // ...
}
```

它将会侦测父元素的 `class="dark"`，通常你可以将它放置在 `html` 元素上面，这样就可以全局生效了。

```html
<html>
<body>
  <!-- 暗色模式不生效 -->
</body>
</html>

<html class="dark">
<body>
  <!-- 暗色模式生效 -->
</body>
</html>
```

你可以使用下面的代码片段使 CSS 方案与用户系统表现相匹配，或者你可以自己写逻辑来进行管理。

```js
if (window.matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.add('dark')
else
  document.documentElement.classList.add('light')
```

<InlinePlayground
  :input="'text-white dark:text-white'"
  :config="{ darkMode: 'class' }"
  :showCSS="true"
  :showPreview="false"
  :showMode="false"
  :showTabs="false"
  :showConfig="true"
  :enableConfig="true"
/>

<<<<<<< HEAD
## 媒体查询模式 {#media-query-mode}

在媒体查询模式，它使用了浏览器内置的 `@media (prefers-color-scheme: dark)` 查询，总是会与用户的系统表现相匹配。
=======
## Media query mode

In media query mode, it uses the built-in `@media (prefers-color-scheme: dark)` query from the browser that always matches with the user's system preference.
>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f

```js windi.config.js
export default {
  darkMode: 'media',
  // ...
}
```

<InlinePlayground
  :input="'text-white dark:text-white'"
  :config="{ darkMode: 'media' }"
  :showCSS="true"
  :showPreview="false"
  :showMode="false"
  :showTabs="false"
  :showConfig="true"
  :enableConfig="true"
/>
