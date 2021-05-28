# Important 前缀

你可以在任意工具类的前面使用 `!` 前缀，使它们变为 `!important`。当你想覆盖之前的样式规则中指定的属性时，这个会非常有用。

```css
!text-green-300
```

<InlinePlayground :input="'text-blue-200\n!text-green-300'" :showCSS="true" :showPreview="false"/>
