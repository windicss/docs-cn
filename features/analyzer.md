# 可视化分析器 {#visual-analyzer}

<PackageInfo name="windicss-analysis" author="antfu" />

一个为 [Windi CSS](https://github.com/windicss/windicss) 提供的可视化分析工具。浏览你所有的工具类 (utilities) 使用情况，综观你的设计系统，识别"糟糕的使用"，以及更多！

<img src="https://user-images.githubusercontent.com/11247099/113150805-0c43f880-9267-11eb-85a6-ec1a2f1eed37.png" />

## 开始使用 {#get-started}

在你的项目根目录下运行下面的命令

```bash
npx windicss-analysis
```

分析报告将可在 http://localhost:8113/ 获取

### NPM {#npm}

或者你可以下载到本地以复用你本地相同版本的 `windicss` 模块

```bash
npm i -D windicss-analysis
```

```json5
// package.json
{
  "scripts": {
    "analysis": "windicss-analysis"
  }
}
```

### VS Code 扩展 {#vs-code-extension}

从 [Windi CSS Intellisense](https://github.com/windicss/windicss-intellisense) 的 v0.8.0 版本开始，内置了这个分析器。

- 在 VS Code 中打开你使用 Windi CSS 的项目
- 打开你的命令面板 (⇧⌘P / Ctrl+Shift+P)
- 运行命令：`Windi CSS: Run & Open Analysis`
- 在编辑器的第二列就可以看到分析器

### 在线预览 {#online-preview}

你可以在分析器里看到分析报告的预览

[分析报告示例](http://analysis-demo.windicss.org)

你可以生成你自己的报告，并通过下面的命令将它静态保存到本地

```bash
npx windicss-analysis --html dist
```

## FAQ {#faq}

### 它没侦测到我的文件 {#it-does-not-detect-my-files}

你需要在 `windi.config.js` 的 `extract.include` 选项中配置，而非你的框架配置文件。这样才可以被分析器所理解，就如同其他的集成一样。例如：

```ts
// windi.config.js
import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  extract: {
    include: [
      'src/**/*.{vue,jsx,tsx,svelte}',
      'shared/**/*.{vue,ts}',
    ],
  },
})
```

### 我可以使用其他工具展示报告吗？ {#can-i-use-the-report-for-other-tools}

当然。你可以通过命令行工具获得 JSON 格式的报告文件。

```bash
npx windicss-analysis --json report.json
```

然后按照你需要的方式进行处理。

你也可以通过下面的方式获得类型支持：

```ts
import type { AnalysisReport } from 'windicss-analysis'
import rawReport from './report.json'

const report = rawReport as AnalysisReport
```

### 在程序中使用 {#programmatic-use}

当然可以。就如同普通的 Node 包一样：

```ts
import { startServer } from 'windicss-analysis'

startServer({ /* ... */ })
```

查看类型声明以了解更多可用的 API。
