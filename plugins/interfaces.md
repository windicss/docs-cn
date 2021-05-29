# 插件接口 {#plugin-interfaces}

通过 Windi CSS 的接口，可以使你的插件开发变得很简单。Windi CSS 是基于 TypeScipt 开发的，所以我们强烈推荐你使用 TypeScript 来开发插件，它能提供很好的类型支持和补全提示。当然，JavaScript 也是受支持的。

## 添加静态工具类 {#add-static-utilities}

### 基本用法 {#basic-usage}

```js
import plugin from 'windicss/plugin'

plugin(({ addUtilities }) => {
  addUtilities({
    '.aspect-none': {
      'position': 'static',
      'paddingBottom': '0',
      '> *': {
        position: 'static',
        height: 'auto',
        width: 'auto',
        top: 'auto',
        right: 'auto',
        bottom: 'auto',
        left: 'auto',
      },
    },
  })
})
```

## 添加动态工具类 {#add-dynamic-utilities}

### 基本用法 {#basic-usage}

```js
addDynamic('filter', ({ Utility, Style }) => {
  return Utility.handler
    .handleStatic(Style('filter'))
    .createProperty(['-webkit-filter', 'filter'])
})
```

## 添加组件 {#add-components}

```js
import plugin from 'windicss/plugin'

plugin(({ addComponents }) => {
  addComponents({
    '.btn': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
    },
    '.btn-blue': {
      'backgroundColor': '#3490dc',
      'color': '#fff',
      '&:hover': {
        backgroundColor: '#2779bd',
      },
    },
  })
})
```

## 添加可变修饰 {#add-variants}

### 修改选择器 {#modify-selectors}

```js
import plugin from 'windicss/plugin'

plugin(addVariant('pointer-group-hover', ({ modifySelectors }) => {
  return modifySelectors(({ className }) => {
    return `.no-touch .group:hover .${className}`
  })
}))
```

## 添加基础样式 {#add-base-styles}

```js
import plugin from 'windicss/plugin'

plugin(({ addBase, theme }) => {
  addBase({
    h1: { fontSize: theme('fontSize.2xl') },
    h2: { fontSize: theme('fontSize.xl') },
    h3: { fontSize: theme('fontSize.lg') },
  })
})
```

## 其它工具 {#other-tools}

### CSS Escape {#css-escape}

`e()`

### 手动添加前缀 {#manual-prefix}

`prefix()`

### 获取用户可变样式 {#get-user-variants}

`variants()`

### 获取用户主题 {#get-user-theme}

`theme()`

### 获取用户配置 {#get-user-configuration}

`config()`

## Debug {#debug}

### 使用 loadPlugin 接口 {#using-loadplugin-interface}

```js
import { Processor } from 'windicss/lib'
import aspectRatio from 'windicss/plugin/aspect-ratio'

describe('Aspect Ratio Plugin', () => {
  it('should generate correct css', () => {
    const processor = new Processor()
    processor.loadPlugin(aspectRatio)
    const result = processor.interpret('aspect-none aspect-w-16 aspect-h-9 aspect-9/16')
    expect(result.ignored.length).toEqual(0)
    expect(result.styleSheet.build()).toEqual('...')
  })
})
```

### 使用自定义配置 {#using-configuration}

```js
import { Processor } from 'windicss/lib'
import aspectRatio from 'windicss/plugin/aspect-ratio'

describe('Aspect Ratio Plugin', () => {
  it('should generate correct css', () => {
    const processor = new Processor({
      plugins: [
        aspectRatio(),
      ],
    })
    const result = processor.interpret('aspect-none aspect-w-16 aspect-h-9 aspect-9/16')
    expect(result.ignored.length).toEqual(0)
    expect(result.styleSheet.build()).toEqual('...')
  })
})
```
