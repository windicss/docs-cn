# 滤镜 {#filters}

## 工具类 {#utilities}

| 类名 | 属性值 |
| :---- | :--------- |
| `blur-none` | filter: none |
| `blur-${key}` | filter: `blur(${value});`
| `filter-${key}` | filter: `${value};` |
| `backdrop-${key}` | backdrop-filter: `${value};` |

## 使用方法 {#usage}

```js windi.config.js
export default {
  theme: {
    filter: {
      none: 'none',
      grayscale: 'grayscale(1)',
      invert: 'invert(1)',
      sepia: 'sepia(1)',
    },
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)',
    },
  },
  variants: {
    filter: ['responsive'],
    backdropFilter: ['responsive'],
  },
  plugins: [
    require('windicss/plugin/filters'),
  ],
}
```
