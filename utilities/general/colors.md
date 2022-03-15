# 颜色 {#colors}

<ColorsPalette />

<<<<<<< HEAD:utilities/colors.md
## 自定义 {#customization}
=======
## Customization
>>>>>>> 36ddd282425a2ab357dc0bd7339dc52590f6f026:utilities/general/colors.md

```ts windi.config.js
export default {
  theme: {
    colors: {
      // 在这里配置你的调色板
    },
  },
}
```

### 颜色复用 {#reuse-colors}

默认情况下，调色板中的所有颜色都是可用的。如果你想给调色板中的颜色设置别名或复用其中一些颜色，你可以从 `windicss/colors` 模块中导入它们。

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
