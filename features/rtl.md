# 从右到左 {#rtl}

从`v2.5.4`开始，Windi CSS 拥有开箱即用的从右到左（RTL）书写方式支持，无需任何配置。

通过向工具类前方增加`rtl:`可变修饰即可，这只会在RTL可用时生效。

<!-- With the following example, the `Preview` text will be `text-right` and `text-red-400` on the RTL. Try play with it: -->

<!-- <InlinePlayground :input="'text-green-400 rtl:(text-right text-red-400)'" :showCSS="true" :showPreview="true" /> -->

开启RTL很简单，只需要在`html`标签上增加`dir="rtl"`属性来使启生效。

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
