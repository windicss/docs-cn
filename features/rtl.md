# 从右到左 {#rtl}

自 `v2.5.4` 起可用，Windi CSS 拥有开箱即用的从右到左（RTL）书写方式支持，且无需任何配置。

<<<<<<< HEAD
通过向工具类前方增加 `rtl:` 可变修饰即可，仅在 RTL 启用时生效。
=======
By prefixing the `rtl:` variant to utilities, they will only apply when RTL is enabled.
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

<!-- With the following example, the `Preview` text will be `text-right` and `text-red-400` on the RTL. Try play with it: -->

<!-- <InlinePlayground :input="'text-green-400 rtl:(text-right text-red-400)'" :showCSS="true" :showPreview="true" /> -->

<<<<<<< HEAD
开启 RTL 很简单，只需要在 `html` 标签上增加 `dir="rtl"` 属性就可使其生效。
=======
It's easy to enable RTL, you just need to apply `dir="rtl"` on the `html` element.
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

```html
<html>
<body>
  <!-- RTL 禁用 -->
</body>
</html>

<html dir="rtl">
<body>
  <!-- RTL 启用 -->
</body>
</html>
```
