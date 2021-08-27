<Logo name="javascript" class="logo-float-xl"/>

# Windi CSS 的 JavaScript API {#windi-css-javascript-api}

<PackageInfo name="windicss" author="voorjaar" />

## 关于 {#about}

如果使用命令行工具不能适配你的工作流，你可以直接使用 Windi CSS API。

## 安装 {#install}

添加包:

```bash
npm i -D windicss
```

## 用法 {#usage}

### 以解释模式开始 {#setup-with-interpret-mode}

```js
const { Processor } = require('windicss/lib')
const { HTMLParser } = require('windicss/utils/parser')

export function generateStyles(html) {
  // 获取 windi processor
  const processor = new Processor()

  // 解析所有的 classes 并将它们放到一行来简化操作
  const htmlClasses = new HTMLParser(html)
    .parseClasses()
    .map(i => i.result)
    .join(' ')

  // 基于我们传入的 html 生成预检样式
  const preflightSheet = processor.preflight(html)

  // 将 html classes 处理为一个可解释的样式表
  const interpretedSheet = processor.interpret(htmlClasses).styleSheet

  // 构建样式
  const APPEND = false
  const MINIFY = false
  const styles = interpretedSheet.extend(preflightSheet, APPEND).build(MINIFY)

  return styles
}
```

### 以编译模式开始 {#setup-with-compile-mode}

编译模式需要更多的工作来替换当前编译的 classname。

在 [这里](/posts/modes.html) 可以了解更多关于编译模式的内容。

```js
const { Processor } = require('windicss/lib')
const { HTMLParser } = require('windicss/utils/parser')

export function generateStyles(html) {
  // 获取 windi processor
  const processor = new Processor()

  // 解析 html 获取与 location 匹配的 class 数组
  const parser = new HTMLParser(html)

  // 基于我们输入的 html 生成预检样式
  const preflightSheet = processor.preflight(html)

  const PREFIX = 'windi-'
  const outputCSS = []
  let outputHTML = ''
  let indexStart = 0

  parser.parseClasses().forEach((p) => {
    // 将 HTML 子字符串添加到从索引到匹配开始的位置
    outputHTML += html.substring(indexStart, p.start)

    // 生成样式表
    const style = processor.compile(p.result, PREFIX)

    // 将样式表加到样式堆栈
    outputCSS.push(style.styleSheet)

    // 添加被忽略的 classes 并添加到 output
    outputHTML += [style.className, ...style.ignored].join(' ')

    // 为下一次迭代将结束的位置标记为新的开始
    indexStart = p.end
  })

  // 追加 html 其余的部分
  outputHTML += html.substring(indexStart)

  // 构建样式
  const MINIFY = false
  const styles = outputCSS
    // 为堆栈中的每个样式表拓展预检样式的样式表
    .reduce((acc, curr) => acc.extend(curr), preflightSheet)
    .build(MINIFY)

  return {
    styles,
    outputHTML,
  }
}
```

### 以属性模式开始 {#setup-with-attributify-mode}

属性模式需要更多的工作来解析每个独立的属性.

在 [这里](/posts/v30.html#attributify-mode) 了解更多关于属性模式的内容
并且你可以在 [这里](/posts/attributify.html) 找到语法

```js
const { Processor } = require('windicss/lib')
const { HTMLParser } = require('windicss/utils/parser')

export function generateStyles(html) {
  // 获取 windi processor
  const processor = new Processor()

  // 解析 html 获取与 location 匹配的 class 数组
  const parser = new HTMLParser(html)

  // 基于我们输入的 html 生成预检样式
  const preflightSheet = processor.preflight(html)

  // 总是返回数组
  const castArray = val => (Array.isArray(val) ? val : [val])

  const attrs = parser.parseAttrs().reduceRight((acc, curr) => {
    // 获取当前匹配到的 key
    const attrKey = curr.key

    // 忽略 class 或 className 属性
    if (attrKey === 'class' || attrKey === 'className') return acc

    // 以数组类型获取当前匹配到的值,
    const attrValue = castArray(curr.value)

    // 如果当前匹配到的 key 早在累加器之中了
    if (attrKey in acc) {
      // 以数组类型获取当前属性的键值
      const attrKeyValue = castArray(acc[attrKey])

      // 将当前的值追加到累加器值
      acc[attrKey] = [...attrKeyValue, ...attrValue]
<<<<<<< HEAD
    }
    else {
      // 将属性值数组添加到累加器
=======
    } else {
      // else add atrribute value array to accumulator
>>>>>>> 42cae07450a3a5bda02e2befffe27bf65d63d501
      acc[attrKey] = attrValue
    }

    return acc
  }, {})

  // 构建样式
  const MINIFY = false
  const styles = processor
    .attributify(attrs)
    .styleSheet.extend(preflightSheet)
    .build(MINIFY)

  return styles
}
```
