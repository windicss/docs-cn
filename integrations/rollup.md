<Logo name="rollup" class="logo-float-xl"/>

# [Rollup](https://rollupjs.org) 集成 {#integration-for-rollup}

<PackageInfo
  name="rollup-plugin-windicss"
  repo="vite-plugin-windicss/tree/main/packages/rollup-plugin-windicss"
  author="antfu"
/>

## 安装 {#installations}

```bash
npm i rollup-plugin-windicss -D # yarn add rollup-plugin-windicss -D
```

```js rollup.config.js
import WindiCSS from 'rollup-plugin-windicss'

export default {
  plugins: [
    ...WindiCSS(),
  ],
}
```

```ts
// 你的代码入口
import 'virtual:windi.css'
```

仅此而已。


## 配置文件 {#configuration}

<<<<<<< HEAD
### 预检样式 (样式重写) {#preflight-style-reseting}
=======
### Preflight (style resetting)
>>>>>>> be07e7e9c469198d9a80231b2bbe139db32f1096

预检样式 (Preflight) 随需启用，如果你想完全关掉它，可按照下面进行配置

```js rollup.config.js
export default {
  plugins: [
    WindiCSS({
      preflight: false,
    }),
  ],
}
```

### 安全清单 {#safelist}

默认情况下，我们会静态扫描你的源代码，并找出所有用到的工具类 (utilities)，然后随需生成响应的 CSS。然而，这存在一定限制，运行时生成的工具类并不能被高效地匹配。举个例子：

```html
<!-- 不会被侦测到 -->
<div className={`p-${size}`}>
```

为了实现这个，你需要在 `vite.config.js` 中的 `safelist` 选项中指定可能的组合。

```js rollup.config.js
export default {
  plugins: [
    WindiCSS({
      safelist: 'p-1 p-2 p-3 p-4',
    }),
  ],
}
```

或者你可以这样做

```js
function range(size, startAt = 1) {
  return Array.from(Array(size).keys()).map(i => i + startAt)
}

// rollup.config.js
export default {
  plugins: [
    WindiCSS({
      safelist: [
        range(30).map(i => `p-${i}`), // p-1 to p-3
        range(10).map(i => `mt-${i}`), // mt-1 to mt-10
      ],
    }),
  ],
}
```

### 扫描 {#scanning}

<<<<<<< HEAD
当服务启动后，`vite-plugin-windicss` 将扫描你的源代码，并把使用到的工具类提取出来。默认情况下，只有 `src/` 且后缀为 `vue, html, mdx, pug, jsx, tsx` 的文件才会被扫描。如果你想扫描本地的其他文件，你可以进行配置如下：
=======
On server start, `vite-plugin-windicss` will scan your source code and extract the utilities usages. By default, only files under `src/` with extensions `vue, html, mdx, pug, jsx, tsx` will be included. If you want to enable scanning for other file type of locations, you can configure it via:
>>>>>>> be07e7e9c469198d9a80231b2bbe139db32f1096

```js rollup.config.js
export default {
  plugins: [
    WindiCSS({
      scan: {
        dirs: ['.'], // cwd 中所有的文件
        fileExtensions: ['vue', 'js', 'ts'], // 为js、ts文件启用
      },
    }),
  ],
}
```

### 更多 {#more}

欲了解更多，请参考 [options.ts](https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts)。
