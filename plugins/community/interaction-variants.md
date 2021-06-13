# @windicss/plugin-interaction-variants

增加了交互状态下缺失的可变修饰。此插件是基于 [tailwindcss-interaction-variants](https://github.com/benface/tailwindcss-interaction-variants) 修改来适配 Windi CSS 的。

## 安装 {#installation}

```bash
npm install --save-dev @windicss/plugin-interaction-variants
```

## 用法 {#usage}

```js
// windi.config.js
export default {
  theme: {
    backgroundColor: {
      black: 'black',
    },
  },
  variants: {
    backgroundColor: ['group-focus-within', 'group-focus-visible', 'group-active', 'group-visited', 'group-disabled', 'hocus', 'group-hocus', 'can-hover', 'no-hover'],
  },
  plugins: [
    require('@windicss/plugin-interaction-variants'),
  ],
}
```

上述配置会生成如下所示的 CSS 样式：

```css
.bg-black {
  background-color: black;
}

.group:focus-within .group-focus-within\:bg-black {
  background-color: black;
}

.group:focus-visible .group-focus-visible\:bg-black {
  background-color: black;
}

.group:active .group-active\:bg-black {
  background-color: black;
}

.group:visited .group-visited\:bg-black {
  background-color: black;
}

.group:disabled .group-disabled\:bg-black {
  background-color: black;
}

.hocus\:bg-black:hover, .hocus\:bg-black:focus {
  background-color: black;
}

.group:hover .group-hocus\:bg-black, .group:focus .group-hocus\:bg-black {
  background-color: black;
}

@media (hover: hover) {
  .can-hover\:bg-black {
    background-color: black;
  }
}

@media (hover: none) {
  .no-hover\:bg-black {
    background-color: black;
  }
}
```
