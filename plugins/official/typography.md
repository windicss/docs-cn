# 排版 {#typography}

## 工具类 {#utilities}

| Class       | Body 字体大小  |
| :---------- | :-------------- |
| `prose-sm`  | 0.875rem (14px) |
| `prose`     | 1rem (16px)     |
| `prose-lg`  | 1.125rem (18px) |
| `prose-xl`  | 1.25rem (20px)  |
| `prose-2xl` | 1.5rem (24px)   |

| Class          | 链接颜色   |
| :------------- | :----------- |
| `prose-red`    | `red.600`    |
| `prose-yellow` | `yellow.600` |
| `prose-green`  | `green.600`  |
| `prose-blue`   | `blue.600`   |
| `prose-indigo` | `indigo.600` |
| `prose-purple` | `purple.600` |
| `prose-pink`   | `pink.600`   |

## 基本用法 {#basic-usage}

```js windi.config.js
export default {
  theme: {
    // ...
  },
  plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],
}
```

现在你可以使用 `prose` 工具类 (或者其中一种可变修饰) 来设置包裹 HTML 元素的样式：

```html
<article class="prose">
  <h1>Styled heading!</h1>
  <blockquote>Very useful for styling markdown content!</blockquote>
</article>
```

## 禁用大小调节器 {#disabling-size-modifiers}

```js windi.config.js
export default {
  theme: {
    // ...
  },
  plugins: [
    require('windicss/plugin/typography')({
      modifiers: ['sm', 'lg'],
    }),
    // ...
  ],
}
```

## 自定义配置 {#customization}

```js windi.config.js
export default {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              'color': '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      },
    },
  },
  plugins: [
    require('windicss/plugin/typography'),
    // ...
  ],
}
```
