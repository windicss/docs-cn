# 提取 {#extractions}

Windi CSS 依靠对源文件进行**静态扫描和提取**来找到你使用的工具类并为你按需生成它们。类似于[Tailwind的 清除限制](https://tailwindcss.com/docs/optimizing-for-production#writing-purgeable-html)，为了使 Windi CSS 准确地检测和生成，你将需要使用工具类的静态全名。例如：

字符串拼接的部分不能被静态地提取

```html
<div class="text-${ active ? 'green' : 'orange' }-400"></div>
```

需使用工具类的全名来代替

```html
<div class="${ active ? 'text-green-400' : 'text-orange-400' }"></div>
```

## 安全清单 {#safelist}

如下场景所示，你在必须使用动态拼接：

```html
<div class="p-${size}"></div>
```

为此，你将需要在 `windi.config.js` 的配置项 `safelist` 中列举可能的组合。

```ts
// windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  safelist: 'p-1 p-2 p-3 p-4',
})
```

或者采用更加灵活的方式：

```ts
// windi.config.js
import { defineConfig } from 'windicss/helpers'

function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

export default defineConfig({
  safelist: [
    range(3).map(i => `p-${i}`), // p-1 to p-3
    range(10).map(i => `mt-${i}`), // mt-1 to mt-10
  ],
})
```

## 扫描 {#scanning}

在开发环境启动时，Windi CSS 将会扫描你的源码并提取出你使用的工具类。默认情况下，它会扫描在 `src/` 目录下扩展名为 `vue, html, mdx, pug, jsx, tsx` 的文件。

假如你想使其能够扫描其他位置的其他文件类型，你可以通过以下所示配置：

```ts
// windi.config.js
import { defineConfig } from 'windcss/helpers'

export default defineConfig({
  extract: {
    // accepts globs and file paths relative to project root
    include: [
      'index.html',
      'src/**/*.{vue,html,jsx,tsx}',
    ],
    exclude: [
      'node_modules/**/*',
      '.git/**/*',
    ],
  },
})
```

### 预检样式 {#preflight}

预检样式（style reseting) 也可以按需和扫描一起进行。

你可以通过以下配置来完全禁用它

```ts
// windi.config.js
import { defineConfig } from 'windcss/helpers'

export default defineConfig({
  preflight: false,
})
```

或者通过白名单（safelist）进行指定

```ts
// windi.config.js
import { defineConfig } from 'windcss/helpers'

export default defineConfig({
  preflight: {
    safelist: 'h1 h2 h3 p img',
  },
})
```
