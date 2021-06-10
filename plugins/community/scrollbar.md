# @windicss/plugin-scrollbar

为 Firefox 和基于 webkit 的浏览器添加滚动条的样式工具类。此插件是基于 [tailwind-scrollbar](https://github.com/adoxography/tailwind-scrollbar) 修改来适配 Windi CSS 的。

## 安装 {#installation}

```bash
npm install --save-dev @windicss/plugin-scrollbar
```

把它添加到配置文件的 plugins 数组中。

```js
// windi.config.js
export default {
  theme: {
    // ...
  },
  plugins: [
    require('@windicss/plugin-scrollbar'),
    // ...
  ],
}
```

## 用法 {#usage}

**特别注意：** 此插件只是给滚动条 **添加样式**；它并不保证滚动条会显示。你应该使用传统的 CSS 技巧来让内容溢出从而触发滚动条。

对于每个你想要添加样式的元素，添加 `.scrollbar` 或 `.scrollbar-thin` 类。如果需要，你也可以添加任何 `scrollbar-track-{color}`，`scrollbar-thumb-{color}` 或者 `hover:scrollbar-thumb-{color}` 类。（请注意 `hover:scrollbar-thumb-{color}` 类只会在基于 webkit 的浏览器上起作用。）

这里有个简单的例子（注意这里的类名 `h-32` 和 `h-64` 只是为了使滚动条出现）：

```html
<div class="h-32 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100">
    <div class="h-64"></div>
</div>
```

你可以在这里看到 [在线的演示版本](https://tailwind-scrollbar-example.adoxography.repl.co/)。

此插件也可用于添加圆角滚动条（会使用你 [border radius](https://tailwindcss.com/docs/border-radius#customizing) 中的配置）。然而，它们只被基于 webkit 的浏览器支持，所以不建议在跨浏览器应用中使用。把 `rounded` 添加到你配置文件 variants 的 scrollbar 一项中，可以使圆角滚动条工具类生效。这会引入 `scrollbar-thumb-rounded` 和 `scrollbar-thumb-rounded-md` 等工具类。