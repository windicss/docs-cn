# 可变修饰组 {#variant-groups}

通过使用括号对相同的工具类进行编组，将其应用于同一可变修饰。

```html
<div class="hover:(bg-gray-400 font-medium) bg-white font-light"/>
```

尝试修改一下：

<InlinePlayground
  :input="'bg-blue-200 font-light p-2\nhover:(bg-gray-400 font-medium)'"
  :showCSS="true"
  :showMode="true"
/>
