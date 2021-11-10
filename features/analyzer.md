# 可视化分析器 {#visual-analyzer}

<PackageInfo name="windicss-analysis" author="antfu" />

<<<<<<< HEAD
一个为 [Windi CSS](https://github.com/windicss/windicss) 提供的可视化分析工具。浏览你所有的工具类 (utilities) 使用情况，综观你的设计系统，识别"糟糕的使用"，以及更多！
=======
A visual analyser tool for [Windi CSS](https://github.com/windicss/windicss). Browse your utility usages, get an overview of your design system, identify "bad practices", and more!
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

<img src="https://user-images.githubusercontent.com/11247099/113150805-0c43f880-9267-11eb-85a6-ec1a2f1eed37.png" />

## 开始使用 {#get-started}

<<<<<<< HEAD
在你的项目根目录下运行下面的命令
=======
Run the following command in your project root
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

```bash
npx windicss-analysis
```

分析报告将可在 http://localhost:8113/ 获取

### NPM {#npm}

<<<<<<< HEAD
或者你可以下载到本地以复用你本地相同版本的 `windicss` 模块
=======
Or you can install it locally to use the same version as your local `windicss` module
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

```bash
npm i -D windicss-analysis
```

```json5 package.json
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

<<<<<<< HEAD
你可以在分析器里看到分析报告的预览

[分析报告示例](http://analysis-demo.windicss.org)

你可以生成你自己的报告，并通过下面的命令将它静态保存到本地
=======
You can preview the report of the analyser itself at 
[analysis-demo.windicss.org](http://analysis-demo.windicss.org)

You can generate your own report and host it statically by running the following command:
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

```bash
npx windicss-analysis --html dist
```

## FAQ {#faq}

### 它没侦测到我的文件 {#it-does-not-detect-my-files}

<<<<<<< HEAD
你需要在 `windi.config.js` 的 `extract.include` 选项中配置，而非你的框架配置文件。这样才可以被分析器所理解，就如同其他的集成一样。例如：
=======
You will need to explicitly configure the `extract.include` option in `windi.config.js` instead of your framework's configuration file so it can be understood by the analyzer. For example:
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

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

<<<<<<< HEAD
当然。你可以通过命令行工具获得 JSON 格式的报告文件。
=======
Yes. You can get the raw JSON file via the CLI
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

```bash
npx windicss-analysis --json report.json
```

然后按照你需要的方式进行处理。

你也可以通过下面的方式获得类型支持：

```ts
import rawReport from './report.json'
import type { AnalysisReport } from 'windicss-analysis'

const report = rawReport as AnalysisReport
```

<<<<<<< HEAD
### 在程序中使用 {#programmatic-use}

当然可以。就如同普通的 Node 包一样：
=======
### Can I use Windi CSS programmatically?

Yes, just like a normal Node package:
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

```ts
import { startServer } from 'windicss-analysis'

startServer({ /* ... */ })
```

<<<<<<< HEAD
查看类型声明以了解更多可用的 API。
=======
Check out the type declarations to see available APIs.
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d
