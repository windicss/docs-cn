<Logo name="postcss" class="logo-float-xl"/>

# [PostCSS](https://postcss.org/) 集成 {#integration-for-postcss}

<PackageInfo name="postcss-windicss" author="antfu" />

> 🧪 实验性的。

> ⚠️ 因为一些 PostCSS 的 API 限制，这个包是**不鼓励**使用的。使用我们为每一个专用工具提供的 [一流的集成](https://windicss.org/guide/installation.html) 以获得**最好的开发体验和性能**。这个插件应当作为你集成 Windi CSS 的最后一个选择。

## 安装 {#install}

从 NPM 安装 `postcss-windicss`

```bash
npm i -D postcss-windicss
```

在你的项目根目录下创建 `postcss.config.js`

```js
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-windicss': { /* ... */ },
  },
}
```

将 `@windicss` 添加到你的 `main.css` 入口：

```css
/* main.css */
@windicss;
```

在你的项目根目录下创建 `windi.config.js` / `windi.config.ts` 并写入下面的配置

```js
// windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['src/**/*.{html,vue,jsx,tsx,svelte}'],
  },
  /* ... */
})
```

用得开心~
