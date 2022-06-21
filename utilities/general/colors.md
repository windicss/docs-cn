<<<<<<< HEAD
# 颜色 {#colors}

<ColorsPalette />

## 自定义 {#customization}
=======
# Colors

<ColorsPalette />

## Customization
>>>>>>> 13d6adadd92e29a2e95912f8dec0214b82eba237

```ts windi.config.js
export default {
  theme: {
    colors: {
<<<<<<< HEAD
      // 在这里配置你的调色板
=======
      // Configure your color palette here
>>>>>>> 13d6adadd92e29a2e95912f8dec0214b82eba237
    },
  },
}
```

<<<<<<< HEAD
### 颜色复用 {#reuse-colors}

默认情况下，调色板中的所有颜色都是可用的。如果你想给调色板中的颜色设置别名或复用其中一些颜色，你可以从 `windicss/colors` 模块中导入它们。
=======
### Reuse Colors

All the colors from the palette are enabled by default. If you want to set alias or reuse some colors from the palette, you can import them from `windicss/colors` module.
>>>>>>> 13d6adadd92e29a2e95912f8dec0214b82eba237

```ts windi.config.js
import colors from 'windicss/colors'

export default {
  theme: {
    extend: {
      colors: {
        grey: colors.gray,
      },
    },
  },
}
```
