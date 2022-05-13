
# 属性化模式 {#attributify-mode}

:warning: 属性化在 [svelte-windicss-preprocess](https://github.com/windicss/svelte-windicss-preprocess) 中不可用。

<<<<<<< HEAD
基于这个特性，你可以在 html 属性中编写 windi 类。
=======
With this feature, you can write windi classes in HTML attributes.
>>>>>>> 1617bae959351fa4f4341f86a8fc39bbb0648b2a

> 有关 css 大小的问题，css 大小可能会略有增加，但是在 gzip 压缩下，它的影响很小。

属性化默认情况下是可选的，可以在你的 windi 配置中开启。

```ts windi.config.ts
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  attributify: true,
})
```

并根据需要这样使用它们：

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

## 语法 {#syntax}

```
(variant[:-]{1})*key? = "((variant:)*value)*"
```

### 例子 {#examples}

```
sm = "bg-blue-200 hover:bg-blue-300"
sm:hover = "bg-blue-200 dark:bg-blue-300"
sm-hover = "bg-blue-200 dark:bg-blue-300"

p = "x-4 y-2 md:y-3"
md:bg = "blue-300 dark:blue-400"
md-bg = "blue-300 dark:blue-400"
```

## 前缀 {#prefix}

如果你担心命名冲突，可以通过属性化方式添加自定义前缀：

```js windi.config.js
export default {
  attributify: {
    prefix: 'w:',
  },
}
```

```html
<button
  w:bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
  w:text="sm white"
  w:font="mono light"
  w:p="y-2 x-4"
  w:border="2 rounded blue-200"
>
  Button
</button>
```

## 正常化 {#normalization}

实际上你可以有两种**编程范式**来选择：

1. 基于**工具类**分组

   ```html
   class=...
   bg=...
   text=...
   border=...
   ```

2. 基于**可变修饰**分组

   ```html
   class=...
   sm=...
   md=...
   dark=...
   ```

<<<<<<< HEAD
> 当然，你也可以**将它们混合使用**，但我个人**不推荐**。只需要选择一个并持续下去。你会发现你的代码变得更加清晰了。
=======
> And of course, you can **mix them** together, but we **don't recommend** it because it reduces the clarity of your code.
>>>>>>> 1617bae959351fa4f4341f86a8fc39bbb0648b2a

## 工具类 {#utilities}

参考：[属性化工具类](/posts/attributify.html#utilities)
