# Grid

## Grid

使用 `grid` 创建一个网格容器。

<PlaygroundWithVariants
  variant='grid'
  :variants="[]"
  nested=true
  fixed='!block'
  appended='rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 gap-2 grid-cols-3 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="{class} gap-2 grid-cols-3 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>

## Inline Grid

使用 `inline-grid` 创建一个行内网格容器。

<PlaygroundWithVariants
  variant='inline-grid'
  :variants="[]"
  nested=true
  fixed='!block'
  appended='rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 gap-2 grid-cols-3 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="{class} gap-2 grid-cols-3 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>

## Grid Template Columns

用于控制一个网格布局中网格列维度的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['1', '2', '3', '4', '5', '6', '9', '12', 'none', '[1fr,2fr]', '[100px,1fr,min-content]']"
  prefix='grid-cols'
  nested=true
  fixed='!block'
  appended='grid rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 gap-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid {class} gap-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      gridTemplateColumns: {
        nt: 'repeat(16, minmax(0, 1fr))',
        footer: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
}
```

</Customizing>

## Grid Template Rows

用于控制一个网格布局中网格行维度的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['1', '2', '3', '4', '5', '6', '9', '12', 'none', '[1fr,2fr]', '[100px,1fr,min-content]']"
  prefix='grid-rows'
  nested=true
  fixed='!block'
  appended='grid grid-flow-col rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 gap-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid {class} grid-flow-col gap-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '200px minmax(900px, 1fr) 100px',
      },
    },
  },
}
```

</Customizing>

## Grid Column Span

用于控制一个网格布局中元素行宽的工具类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'span-full', 'span-1', 'span-2', 'span-3', 'span-4', 'span-5', 'span-6', 'span-7', 'span-8', 'span-9', 'span-10', 'span-11', 'span-12', 'span-13', 'span-14', 'span-15']"
  prefix='col'
  nested=true
  fixed='!block'
  appended='grid grid-cols-4 rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 gap-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid grid-cols-4 gap-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="{class} rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      gridColumn: {
        'span-16': 'span 16 / span 16',
      },
    },
  },
}
```

</Customizing>

## Grid Row Span

用于控制一个网格布局中元素列高的工具类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'span-full', 'span-1', 'span-2', 'span-3', 'span-4', 'span-5', 'span-6', 'span-7', 'span-8', 'span-9', 'span-10', 'span-11', 'span-12', 'span-13', 'span-14', 'span-15']"
  prefix='row'
  nested=true
  fixed='!block'
  appended='grid grid-rows-3 grid-flow-col rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 gap-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid grid-rows-3 grid-flow-col gap-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="{class} rounded-md bg-teal-500 w-6 flex flex-col py-1 justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      gridRow: {
        'span-16': 'span 16 / span 16',
      },
    },
  },
}
```

</Customizing>

## Grid Column Start

用于控制网格元素开始跨列的工具类。该工具类通过 [col-end](#grid-column-end) 或者 [col-span](#grid-column-span) 来指定跨列的数量。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']"
  prefix='col-start'
  nested=true
  fixed='!block'
  appended='grid col-span-2 grid-cols-4 rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 gap-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid grid-cols-4 gap-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="{class} col-span-2 rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      gridColumnStart: {
        first: '1',
      },
    },
  },
}
```

</Customizing>


## Grid Column End

用于控制网格元素结束跨列的工具类。该工具类通过 [col-start](#grid-column-start) 或者 [col-span](#grid-column-span) 来指定跨列的数量。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']"
  prefix='col-end'
  nested=true
  fixed='!block'
  appended='grid grid-cols-4 col-span-2 rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 gap-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid grid-cols-4 gap-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="{class} col-span-2 rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>


<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      gridColumnEnd: {
        last: '20',
      },
    },
  },
}
```

</Customizing>

## Grid Row Start

用于控制网格元素开始跨行的工具类。该工具类通过 [row-end](#grid-row-end) 或者 [row-span](#grid-row-span) 来指定跨行的数量。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']"
  prefix='row-start'
  nested=true
  fixed='!block'
  appended='grid grid-rows-3 row-span-2 grid-flow-col rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 gap-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid grid-rows-3 grid-flow-col gap-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="{class} row-span-2 rounded-md bg-teal-500 w-6 flex flex-col py-1 justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      gridRowStart: {
        first: '1',
      },
    },
  },
}
```

</Customizing>


## Grid Row End

用于控制网格元素结束跨行的工具类。该工具类通过 [row-start](#grid-row-start) 或者 [row-span](#grid-row-span) 来指定跨行的数量。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15']"
  prefix='row-end'
  nested=true
  fixed='!block'
  appended='grid grid-rows-3 row-span-2 grid-flow-col rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 gap-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid grid-rows-3 grid-flow-col gap-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="{class} row-span-2 rounded-md bg-teal-500 w-6 flex flex-col py-1 justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>


<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      gridRowEnd: {
        last: '20',
      },
    },
  },
}
```

</Customizing>

## Grid Auto Flow

用于控制网格元素自动布局的工具类。

<PlaygroundWithVariants
  variant='row'
  :variants="['row', 'col', 'row-dense', 'col-dense']"
  prefix='grid-flow'
  nested=true
  fixed='!block'
  appended='grid grid-cols-3 grid-rows-3 col-span-2 rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 w-17 gap-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid grid-cols-3 grid-rows-3 {class} gap-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="rounded-md bg-teal-500 w-17 h-6 flex flex-col justify-center col-span-2"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-17 h-6 flex flex-col justify-center col-span-2"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>

## Grid Auto Columns

用于控制网格隐式创建列宽的工具类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'min', 'max', 'fr']"
  prefix='auto-cols'
  nested=true
  fixed='!block'
  appended='grid col-span-2 col-start-3 col-span-4 rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 gap-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid {class} gap-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="col-span-4 rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="col-start-3 col-span-2 rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;22222&lt;/div&gt;
&lt;div class="col-span-2 rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="col-span-2 rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="col-span-2 rounded-md bg-teal-500 h-6 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      gridAutoColumns: {
        '2fr': 'minmax(0, 2fr)',
      },
    },
  },
}
```

</Customizing>

## Grid Auto Rows

用于控制网格隐式创建行高的工具类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'min', 'max', 'fr']"
  prefix='auto-rows'
  nested=true
  fixed='!block'
  appended='grid grid-flow-col row-span-4 row-span-2 row-start-3 rounded-md bg-teal-500 bg-teal-100 p-2 w-6 h-6 gap-2 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid grid-flow-col {class} gap-2 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="row-span-4 rounded-md bg-teal-500 flex flex-col py-1 justify-center"&gt;1&lt;/div&gt;
&lt;div class="row-start-2 row-span-2 rounded-md bg-teal-500 flex flex-col justify-center"&gt;
  &lt;p&gt;22222&lt;/p&gt;
  &lt;p&gt;22222&lt;/p&gt;
&lt;/div&gt;
&lt;div class="row-span-2 rounded-md bg-teal-500 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="row-span-2 rounded-md bg-teal-500 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="row-span-2 rounded-md bg-teal-500 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      gridAutoRows: {
        '2fr': 'minmax(0, 2fr)',
      },
    },
  },
}
```

</Customizing>

## Gap

用于控制网格行列间隔的工具类。

<PlaygroundWithVariants
  variant='2'
  :variants="['0', 'px', '0.5', '1', '2', '4', '8', '10', '12', '14', '16', '20', '24', '48', '1.5rem', '32px']"
  prefix='gap'
  nested=true
  fixed='!block'
  appended='rounded-md bg-teal-500 bg-teal-100 p-2 h-8 grid grid-cols-3 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid {class} grid-cols-3 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

你可以使用 theme.spacing 或者 theme.extend.spacing 来自定义全局间隔比例，配置项如下：

```js windi.config.js
export default {
  theme: {
    extend: {
      spacing: {
        lg: '18rem',
      },
    },
  },
}
```

在 Tailwind 主题配置中使用 gap 来自定义间隔，配置如下。

```js windi.config.js
export default {
  theme: {
    extend: {
      gap: {
        sm: '2.75rem',
      },
    },
  },
}
```

</Customizing>

## Gap X

用于控制网格列间隔的工具类。

<PlaygroundWithVariants
  variant='2'
  :variants="['0', 'px', '0.5', '1', '2', '4', '8', '10', '12', '14', '16', '20', '24', '48', '1.5rem', '32px']"
  prefix='gap-x'
  nested=true
  fixed='!block'
  appended='rounded-md bg-teal-500 bg-teal-100 p-2 h-8 grid grid-cols-3 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid {class} grid-cols-3 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>

## Gap Y

用于控制网格行间隔的工具类。

<PlaygroundWithVariants
  variant='2'
  :variants="['0', 'px', '0.5', '1', '2', '4', '8', '10', '12', '14', '16', '20', '24', '48', '1.5rem', '32px']"
  prefix='gap-y'
  nested=true
  fixed='!block'
  appended='rounded-md bg-teal-500 bg-teal-100 p-2 h-8 grid grid-cols-3 text-xs text-white text-center flex flex-col justify-center'
  html='&lt;div class="grid {class} grid-cols-3 bg-teal-100 rounded-md p-2 text-xs text-white text-center"&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;1&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;2&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;3&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;4&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;5&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;6&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;7&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;8&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;9&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;10&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;11&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 h-8 flex flex-col justify-center"&gt;12&lt;/div&gt;
&lt;/div&gt;'
/>