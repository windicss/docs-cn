# 响应式设计 {#responsive-design}

<<<<<<< HEAD
在 Windi CSS 中，可以很轻松实现 [响应式设计](https://en.wikipedia.org/wiki/Responsive_web_design)。只需要将可变修饰（variant）的前缀加到对应的工具类前，比如 `md:`、`lg:`。对应的媒体查询会自动生成。实现方式如下：
=======
Doing [Responsive Design](https://en.wikipedia.org/wiki/Responsive_web_design) in Windi CSS is effortless. By simply adding variant prefixes like `md:` or `lg:` to the utility you want to use, the corresponding media query will be generated automatically. Try it yourself using the playground below:
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

<InlinePlayground :input="'p-1 lg:p-2'" :showCSS="true" :showPreview="false"/>

当你想把断点可变修饰加到多个工具类上时，在 Windi CSS 中你可以通过使用 [可变修饰组](/features/variant-groups.html) 特性来实现，而不需要重复编写。

<InlinePlayground :input="'p-1 lg:(p-2 m-2 text-red-400)'" :showCSS="true" :showPreview="false"/>

## 自定义范围 {#custom-range}

<<<<<<< HEAD
默认情况下，Windi CSS 的断点被设计为移动端优先。
=======
By default, Windi CSS's breakpoints are designed as Mobile First. 
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

这就意味着没有前缀的工具类（比如：`p-1`） 作用在所有尺寸的屏幕上，而带有前缀的工具类（比如：`md:p-2`）只在**指定断点及以上尺寸**起作用。

<<<<<<< HEAD
我们还添加通过 `<` 和 `@` 前缀的方式，提供了超过查询范围的情况下的更多控制能力。
=======
We also provided the ability to have more control over the query range by adding the `<` and `@` prefixes:
>>>>>>> 0b74e0eddcab63746370b4cc1efda9ca87db0a6d

```bash
lg  => greater or equal than this breakpoint
<lg => smaller than this breakpoint
@lg => exactly this breakpoint range
```

<InlinePlayground :input="'lg:p-1\n<lg:p-2\n@lg:p-3'" :showCSS="true" :showPreview="false"/>

## 断点 {#breakpoints}

|  | 默认 | 带有 `<` 前缀 | 带有 `@` 前缀 |
| :------ | :--- | :--- | :--- |
| sm | (min-width: 640px) | (max-width: 639.9px) | (min-width: 640px) and <br>(max-width: 767.9px) |
| md | (min-width: 768px) | (max-width: 767.9px) | (min-width: 768px) and <br>(max-width: 1023.9px) |
| lg | (min-width: 1024px) | (max-width: 1023.9px) | (min-width: 1024px) and <br>(max-width: 1279.9px) |
| xl | (min-width: 1280px) | (max-width: 1279.9px) | (min-width: 1280px) and <br>(max-width: 1535.9px) |
| 2xl | (min-width: 1536px) | (max-width: 1535.9px) | (min-width: 1536px) |

## 自定义 {#customization}

你可以在你的 `windi.config.js` 中自定义断点。

```ts windi.config.js
import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    screens: {
      tablet: '640px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
})
```
