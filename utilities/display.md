# Display {#display}

## 块级元素 {#block}

`block` 工具类生成一个块级元素盒子，在常规流中的该元素前后生成换行符。

<PlaygroundWithVariants
  variant='block'
  :variants="[]"
  nested=true
  fixed='space-y-2 pt-6 pl-12'
  appended='rounded-md bg-teal-500 bg-teal-100 w-8 h-8 bg-red-400 bg-green-400 bg-blue-400'
  html='
&lt;div class="{class} rounded-md bg-red-400 w-8 h-8"&gt;&lt;/div&gt;
&lt;div class="{class} rounded-md bg-green-400 w-8 h-8"&gt;&lt;/div&gt;
&lt;div class="{class} rounded-md bg-blue-400 w-8 h-8"&gt;&lt;/div&gt;'
/>

## 行内块级元素 {#inline-block}

`inline-block` 工具类生成一个块级元素盒子，该元素将和周围的内容一起浮动，就像是一个单独的行内盒子一样（它表现的更像一个被替代的元素）。

<PlaygroundWithVariants
  variant='inline-block'
  :variants="[]"
  nested=true
  fixed='space-x-1 pt-12 pl-4 text-xs'
  appended='rounded-md bg-teal-500 bg-teal-100 w-8 h-8 bg-red-400 bg-green-400 bg-blue-400 text-gray-500'
  html='
&lt;div class="{class} rounded-md bg-red-400 w-8 h-8"&gt;&lt;/div&gt;
&lt;div class="{class} rounded-md bg-green-400 w-8 h-8"&gt;&lt;/div&gt;
&lt;div class="{class} rounded-md bg-blue-400 w-8 h-8"&gt;&lt;/div&gt;
&lt;span class="text-gray-500"&gt;...&lt;/span&gt;'
/>

## 行内元素 {#inline}

`inline` 工具类生成一个或多个行内元素盒子并且不会在它们前后生成换行符，在常规流中，如果同行内有空间，下一个元素将在同一行上。

<PlaygroundWithVariants
  variant='inline'
  :variants="['inline', 'inline-block']"
  nested=true
  fixed='space-x-1 pt-12 pl-2 text-xs text-white'
  appended='rounded-md bg-teal-500 bg-teal-100 py-2 px-3 bg-red-400 bg-green-400 bg-blue-400 text-gray-500'
  html='
&lt;div class="{class} rounded-md bg-red-400 py-2 px-3"&gt;1&lt;/div&gt;
&lt;div class="{class} rounded-md bg-green-400 py-2 px-3"&gt;2&lt;/div&gt;
&lt;div class="{class} rounded-md bg-blue-400 py-2 px-3"&gt;3&lt;/div&gt;
&lt;span class="text-gray-500"&gt;...&lt;/span&gt;'
/>

## Flow Root {#flow-root}

`flow-root` 工具类生成一个块级元素盒子，它用于建立一个新的 [块级格式上下文](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)，定义格式化根元素的所在位置。

| Class     | Properties          |
| :-------- | :------------------ |
| flow-root | display: flow-root; |

<PlaygroundWithVariants
  variant='flow-root'
  :variants="[]"
  nested=true
  fixed='space-y-2 pt-2'
  appended='rounded-md bg-teal-500 bg-teal-100 w-8 h-8 m-1 bg-red-400 bg-green-400 bg-blue-400 bg-teal-100'
  html='
&lt;div class="{class} bg-teal-100 rounded-md"&gt;
  &lt;div class="m-1 rounded-md bg-red-400 w-8 h-8"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="{class} bg-teal-100 rounded-md"&gt;
  &lt;div class="m-1 rounded-md bg-green-400 w-8 h-8"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="{class} bg-teal-100 rounded-md"&gt;
  &lt;div class="m-1 rounded-md bg-blue-400 w-8 h-8"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

## 内容 {#contents}

`contents` 工具类不会使它们自己生成特定的盒子，它们会被自己的伪盒子和次级盒子代替。

<PlaygroundWithVariants
  variant='contents'
  :variants="['block', 'contents']"
  nested=true
  fixed='pt-10'
  appended='flex items-center rounded-md flex-1 bg-teal-500 bg-teal-100 h-6 bg-red-400 bg-yellow-400 bg-green-400 bg-blue-400 bg-indigo-100 w-10 m-1 p-1'
  html='&lt;div class="flex items-center bg-teal-100 rounded-md p-1"&gt;
&lt;div class="flex-1 rounded-md bg-red-400 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md w-10 bg-indigo-100 {class}"&gt;
  &lt;div class="flex-1 rounded-md bg-yellow-400 h-6 m-1"&gt;&lt;/div&gt;
  &lt;div class="flex-1 rounded-md bg-green-400 h-6 m-1"&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;div class="flex-1 rounded-md bg-blue-400 h-6 m-1"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

## 隐藏 {#hidden}

失效一个元素的 `display` ，布局中不产生影响（文档渲染为该元素不存在）。 所有后代元素均不会显示。 如果仍在布局中保留元素的占用空间，请使用 [visibility](#visibility) 属性代替。

<PlaygroundWithVariants
  variant='hidden'
  :variants="['block', 'hidden']"
  nested=true
  fixed='pt-20'
  appended='flex items-center rounded-md bg-teal-500 bg-teal-100 w-8 h-8 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="flex items-center bg-teal-100 rounded-md p-1"&gt;
&lt;div class="rounded-md bg-red-400 w-8 h-8 m-1"&gt;&lt;/div&gt;
&lt;div class="{class} rounded-md bg-green-400 w-8 h-8 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-blue-400 w-8 h-8 m-1"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

## Visibility {#visibility}

用于控制一个元素的可见性的工具类。 `visibility` CSS 属性会在不改变文档布局的情况下显示或隐藏元素。 该属性也可以隐藏位于 `<table>` 中的行和列。

<PlaygroundWithVariants
  variant='visible'
  :variants="['visible', 'invisible']"
  nested=true
  fixed='pt-20'
  appended='flex items-center rounded-md bg-teal-500 bg-teal-100 w-8 h-8 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="flex items-center bg-teal-100 rounded-md p-1"&gt;
&lt;div class="rounded-md bg-red-400 w-8 h-8 m-1"&gt;&lt;/div&gt;
&lt;div class="{class} rounded-md bg-green-400 w-8 h-8 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-blue-400 w-8 h-8 m-1"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

## Backface Visibility {#backface-visibility}

 `backface` 工具类可设置元素背面朝向用户时，它是否可见。

<PlaygroundWithVariants
  variant='hidden'
  :variants="['visible', 'hidden']"
  prefix='backface'
  nested=true
  fixed='!block'
  appended='w-34 h-42 transform hover:rotate-y-180 rotate-y-180 relative preserve-3d transition-all duration-500 absolute z-1 z-2 rounded-lg'
  html='&lt;div class="transform hover:rotate-y-180 relative preserve-3d transition-all duration-500"&gt;
    &lt;img src="/assets/card-front.jpg" class="rounded-lg w-34 h-42 absolute {class} z-1" alt="Card Front" /&gt;            
    &lt;img src="/assets/card-back.jpg" class="rounded-lg w-34 h-42 absolute {class} z-2 transform rotate-y-180" alt="Card Back" /&gt;
&lt;/div&gt;'
/>

## List Item {#list-item}

 `list-item` 工具类生成一个 `::marker` 伪元素，其内容由它的 [list-style](/utilities/typography.html#list-style-type) 属性（例如着重号（bullet point））指定，并为它的内容生成一个指定类型的盒子。

<PlaygroundWithVariants
  variant='list-item'
  :variants="['block', 'list-item']"
  fixed='py-4 px-8 dark:text-white opacity-85'
  nested=true
  appended='list-decimal'
  html="&lt;div class='list-decimal'&gt;
  &lt;div class='{class}'&gt;One&lt;/div&gt;
  &lt;div class='{class}'&gt;Two&lt;/div&gt;
  &lt;div class='{class}'&gt;Three&lt;/div&gt;
&lt;/div&gt;"
/>
