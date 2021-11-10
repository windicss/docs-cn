# Important 前缀 {#important-prefix}

<<<<<<< HEAD
你可以在任意工具类的前面使用 `!` 前缀，使它们变为 `!important`。当你想覆盖之前的样式规则中指定的属性时，这个会非常有用。
=======
You can prefix any utility classes with `!` to set them as `!important`. This could be very useful when you want to override previous styling rules for a specific property.
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

```css
!text-green-300
```

<InlinePlayground :input="'text-blue-200\n!text-green-300'" :showCSS="true" :showPreview="false"/>
