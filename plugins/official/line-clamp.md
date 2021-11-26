# Line Clamp {#line-clamp}

## 工具类 {#utilities}

| 类 | 属性值 |
| :---- | :--------- |
| `line-clamp-${int}` | overflow: hidden;<br>display: -webkit-box;<br>-webkit-box-orient: vertical;<br>-webkit-line-clamp: `${int};` |
| `line-clamp-none` | -webkit-line-clamp: unset; |

## 用法 {#usage}

```js windi.config.js
export default {
  extend: {
    lineClamp: {
      sm: '3',
      lg: '10',
    },
  },
  plugins: [
    require('windicss/plugin/line-clamp'),
    // ...
  ],
}
```
