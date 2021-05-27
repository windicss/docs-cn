# 夜间模式 {#dark-mode}

Windi CSS 拥有开箱即用的夜间模式支持。

通过前缀 `dark:` 可变修饰工具类 (utilities)，这些工具类仅会在夜间模式启用的时候生效。在下面的例子中，`Preview` 文本在日间模式下是红色的，在夜间模式下是绿色的。试试：

<DarkModeSwitch />

<InlinePlayground :input="'text-red-400 dark:text-green-400'" :showCSS="true" :showPreview="true"/>

我们提供了两种启用夜间模式的方式，[class 模式](#class-mode) 和 [媒体查询模式](#media-query-mode)。默认情况下，启用的是 `class` 模式。

## Class 模式 {#class-mode}

Class 模式为你提供了更好的支持，控制在哪应该使用夜间模式。

```js
// windi.config.js
export default {
  darkMode: 'class',
  // ...
}
```

它将会侦测父元素的 `class="dark"`，通常你可以将它放置在 `html` 元素上面，这样就可以全局生效了。

```html
<html>
<body>
  <!-- 夜间模式不生效 -->
</body>
</html>

<html class="dark">
<body>
  <!-- 夜间模式生效 -->
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

## 媒体查询模式 {#media-query-mode}

在媒体查询模式，它使用了浏览器内置的 `@media (prefers-color-scheme: dark)` 查询，总是会与用户的系统表现相匹配。

```js
// windi.config.js
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
