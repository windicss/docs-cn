<Logo name="windi" class="logo-float-xl"/>

# Windi CSS CLI

<PackageInfo name="windicss" author="voorjaar" />

## 安装 {#install}

添加包：

```bash
npm i -g windicss
```

## 用法 {#usage}

### 打印帮助信息

```bash
windicss --help  // windicss -h
```

应输出如下信息

```bash
Generate css from text files that containing windi classes.
By default, it will use interpretation mode to generate a single css file.

Usage:
  windicss [filenames]
  windicss [filenames] -c -m -d
  windicss [filenames] -c -s -m -d
  windicss [filenames] [-c | -i] [-a] [-b | -s] [-m] [-d] [-p <prefix:string>] [-o <path:string>] [--args arguments]

Options:
  -h, --help            Print this help message and exit.
  -v, --version         Print windicss current version and exit.

  -i, --interpret       Interpretation mode, generate class selectors. This is the default behavior.
  -c, --compile         Compilation mode, combine the class name in each row into a single class.
  -a, --attributify     Attributify mode, generate attribute selectors. Attributify mode can be mixed with the other two modes.
  -t, --preflight       Add preflights, default is false.

  -b, --combine         Combine all css into one single file. This is the default behavior.
  -s, --separate        Generate a separate css file for each input file.

  -d, --dev             Enable hot reload and watch mode.
  -m, --minify          Generate minimized css file.
  -z, --fuzzy           Enable fuzzy match, only works in interpration mode.
  -p, --prefix PREFIX   Set the css class name prefix, only valid in compilation mode. The default prefix is 'windi-'.
  -o, --output PATH     Set output css file path.
  -f, --config PATH     Set config file path.

  --style               Parse and transform windi style block.
  --init PATH           Start a new project on the path.
```

### 初始化测试项目 {#initial-test-project}

```bash
windicss --init <project>  // windicss --init .
windicss --init <project> --compile  // windicss --init hello_world --compile
```

### 文件名 {#file-names}

`[filenames]` 参数可以包括文件路径和 glob 模式 (由 [node-glob](https://github.com/isaacs/node-glob) 支持).

```bash
windicss './hello.html' './world.html'
windicss './**/*.html'
windicss './src/**/*.html'
windicss './hello.html' './world.html', './src/**/*.svelte'
...
```

### 编译 CSS 文件 {#compile-css-file}

#### 生成普通 css {#generate-normal-css}

使用 `-o` 参数指定生成 css 文件的名称，  `-t` 参数指定是否添加预检样式 (基本样式)。

```bash
windicss './**/*.html'
windicss './**/*.html' -to windi.css
windicss './test.html' -to windi.css
windicss './test.html' --preflight --output windi.css

```

#### 最小化构建 {#minimize-build}

使用 `-m` 或 `--minify` 来生产最小化的 css 文件。此参数主要用于构建时。

```bash
windicss './**/*.html' -mto windi.min.css
windicss './**/*.html' -to windi.css --minify
```

#### 使用编译模式 {#using-compiliation-mode}

编译模式会将所有windi工具类合并到一个新的类名中， 你可以使用 `-p` 或 `--prefix` 进行指定。

```bash
windicss './**/*.html' -cto windi.css
windicss './**/*.html' -ctom windi.min.css
windicss './**/*.html' -cto windi.css --minify
windicss './**/*.html' -cto windi.css --minify --prefix 'tw-'
windicss './test.html' --compile --preflight --output windi.css
```

举个例子

```html
<div class="windi-15wa4me">
  <img class="windi-1q7lotv" src="/img/erin-lindford.jpg" alt="Woman's Face">
  <div class="windi-7831z4">
    <div class="windi-x3f008">
      <p class="windi-2lluw6">
        Erin Lindford
      </p>
      <p class="windi-1caa1b7">
        Product Engineer
      </p>
    </div>
    <button class="windi-d2pog2">Message</button>
  </div>
</div>
```

#### 使用归因模式 {#using-attributify-mode}

你可以将归因模式与解释模式或编译模式相结合。 

```bash
windicss './**/*.html' -ato windi.css
windicss './**/*.html' -atom windi.min.css
windicss './**/*.html' -ato windi.css --minify
windicss './test.html' --attributify --preflight --output windi.css
windicss './test.html' --attributify --compile --preflight --output windi.css
```

举个例子

```html
<button 
	bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  text="sm white"
  font="mono light"
  p="y-2 x-4"
  border="2 rounded blue-200"
>
  Button
</button>
```

#### 传递配置文件 {#pass-a-config-file}

使用 `-f` 或 `--config` 参数来传递一个配置文件，目前仅支持 js 配置文件。

```bash
windicss './**/*.html' -to windi.css --config windi.config.js
```

举个例子

```js
// windi.config.js
module.exports = {
  // ...
  theme: {
    extend: {
      colors: {
        primary: '#1c1c1e',
      },
      // ...
    },
  },
}
```

#### 开发模式 {#dev-mode}

启用开发模式将打开热重载，在检测到文件更改时更新 css 文件。

```bash
windicss './**/*.html' -to windi.css --dev
```

> 注意: 为达到更好的热重载体验 (约5ms) 我们在开发时不会移除内置的 css，所以在发布时使用最小化构建指令进行一次构建，以获得最佳的开发和构建体验。 例如 `windicss './**/*.html' -mto windi.css`

#### 模糊模式 {#fuzzy-mode}

默认情况下，windi会匹配传入文件的 class/className='...'，如果文件类型不匹配，你可以打开这个选项。 它将匹配文件中所有可能的windi工具类。

```bash
windicss './**/*.html' -to windi.css --dev --fuzzy
```

你也可以为特定类型的文件配置 `extractors`

```js
// windi.config.js
module.exports = {
  // ...
  extract: {
    extractors: [
      {
        extractor: (content) => {
          return { classes: content.match(/(?<=class:)[!@\w-]+/g) ?? [] }
        },
        extensions: ['svelte'],
      },
    ],
  },
  // ...
}
```

#### 样式块 {#style-block}

要启用样式，你需要使用 `--style` 参数。

```bash
windicss './**/*.html' -to windi.css --dev --style
```

像这样定义样式块：

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>cli</title>
  <link rel="stylesheet" href="windi.css">
  <style lang='windi'>
    .btn-blue {
      @apply bg-blue-500 hover:bg-blue-700 text-white;
      padding-top: 1rem;
    }
  </style>
</head>
```
