# 自动值推导 {#value-auto-infer}

Windi CSS 只会生成你使用的 CSS 工具类，它允许你在样式类中编写任意值，同时会根据适当的语义生成相应的样式。

```html
<!-- 尺寸和定位 -->
<div class="p-5px mt-[0.3px]"></div>

<!-- 颜色 -->
<button class="bg-hex-b2a8bb"></button>
<button class="bg-[#b2a8bb]"></button>
<button class="bg-[hsl(211.7,81.9%,69.6%)]"></button>

<!-- grid template -->
<div class="grid-cols-[auto,1fr,30px]"></div>
```

当你想有意忽略你的设计系统，并且对特定的组件有一定的粒度控制时，这是非常有用的。直接的 `p-5px` 和 显示转义的 `p-[5px]` 都是被支持的。

<<<<<<< HEAD
我们提供了一个 [可视化分析器](/features/analyzer)，可以让你对你项目中所有工具类的使用情况有一个概览，轻松标记出你设计系统中不符合预期的值转义。
=======
We also provided [an visual analyser](/features/analyzer) to give you an overview of all the utility usages in your project and to spot unwanted value escaping of your design system with ease.
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6

## 数字 {#numbers}

```less
p-{float} -> padding: {float/4}rem;
```

<InlinePlayground :input="'p-2.5\np-3.2'" :showCSS="true" :showPreview="false"/>

## 尺寸 {#sizes}

```less
// {size} 应当以 rem|em|px|vh|vw|ch|ex 结尾
p-{size} -> padding: {size};
```

<InlinePlayground :input="'p-3px\np-4rem'" :showCSS="true" :showPreview="false"/>

<<<<<<< HEAD

## 分数 {#fractions}
=======
## Fractions
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6

```less
w-{fraction} -> width: {fraction -> percent};
```

<InlinePlayground :input="'w-9/12'" :showCSS="true" :showPreview="false"/>

<<<<<<< HEAD

## 颜色 {#colors}
=======
## Colors
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6

```css
text-{color} -> color: rgba(...);

border-hex-{hex} -> border-color: rgba(...);
```

<InlinePlayground
  :input="'text-cyan-400\nborder-hex-6dd1c7'"
  :showCSS="true"
  :showPreview="false"
  fixed="border border-2 px-4 py-2 rounded"
/>

## 变量 {#variables}

你甚至可以传递变量名称，在与 css 变量结合时非常有用。

```css
bg-${variableName}
```

<InlinePlayground
  :input="'bg-$test-variable'"
  :showCSS="true"
  :showPreview="false"
/>

## Grid Templates

```css
grid-cols-[auto,1fr,30px]
```

<InlinePlayground
  :input="'grid-cols-[auto,1fr,30px]'"
  :showCSS="true"
  :showPreview="false"
/>
