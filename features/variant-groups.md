# 可变修饰组 {#variant-groups}

<<<<<<< HEAD
通过使用括号对相同的工具类进行编组，将其应用于同一可变修饰。
=======
Apply utilities for the same variant by grouping them with a parenthesis.
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

```html
<div class="hover:(bg-gray-400 font-medium) bg-white font-light"/>
```

尝试修改一下：

<InlinePlayground 
  :input="'bg-blue-200 font-light p-2\nhover:(bg-gray-400 font-medium)'"
  :showCSS="true"
  :showMode="true"
/>
