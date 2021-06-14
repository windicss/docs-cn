# 颜色 {#colors}

<ColorsPalette />

## 自定义 {#customization}

```ts
// windi.config.js
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

```ts
import colors from 'windicss/colors'

// windi.config.js
export default {
  theme: {
    colors: {
      grey: colors.gray,
    },
  },
}
```
