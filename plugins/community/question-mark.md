# @windicss/plugin-question-mark

一个可以提供实用的开发时工具类 `?` 的插件。它是基于 [tailwindcss-question-mark](https://github.com/GavinJoyce/tailwindcss-question-mark) 修改来适配 Windi CSS 的。

**Demo**: https://play.tailwindcss.com/5a9dYkfqd4

![example](https://user-images.githubusercontent.com/2526/100670452-ca598300-3356-11eb-8743-5d4d3c7b740f.gif)

## 安装 {#installation}

使用 npm 安装：

```bash
npm install --save-dev @windicss/plugin-question-mark
```

然后把本插件添加到 `tailwind.config.js` 文件中：

```js
// windi.config.js
export default {
  theme: {
    // ...
  },
  plugins: [
    require('@windicss/plugin-question-mark'),
    // ...
  ],
}
```

## 用法 {#usage}

把 `?` 工具类添加给任何你想要高亮显示的元素就可以了。

**Demo**: https://play.tailwindcss.com/5a9dYkfqd4
