# Flexbox {#flexbox}

## Flex {#flex}

使用 `flex` 创建一个块级 flex 容器。

<PlaygroundWithVariants
  variant='flex'
  :variants="[]"
  nested=true
  fixed='!block pt-20'
  appended='rounded-md bg-teal-500 bg-teal-100 p-2 space-x-2 w-6 h-6'
  html='&lt;div class="{class} bg-teal-100 rounded-md p-2 space-x-2"&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

## Inline Flex {#inline-flex}

使用 `inline-flex` 创建一个行内 flex 容器。

<PlaygroundWithVariants
  variant='inline-flex'
  :variants="[]"
  fixed='!block pt-20'
  nested=true
  appended='rounded-md bg-teal-500 bg-teal-100 p-2 space-x-2 w-6 h-6'
  html='&lt;div class="{class} bg-teal-100 rounded-md p-2 space-x-2"&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-teal-500 w-6 h-6"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

## Flex 方向 {#flex-direction}

用于控制 flex 子项排列方向的工具类。

<PlaygroundWithVariants
  variant='row'
  :variants="['row', 'row-reverse', 'col', 'col-reverse']"
  prefix='flex'
  nested=true
  fixed='!block pt-20'
  appended='flex items-center rounded-md bg-teal-500 bg-teal-100 w-6 h-6 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="flex items-center {class} bg-teal-100 rounded-md p-1"&gt;
&lt;div class="rounded-md bg-red-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-green-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-blue-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

## Flex Wrap {#flex-wrap}

用于控制 flex 行的堆叠方向的工具类。

<PlaygroundWithVariants
  variant='wrap'
  :variants="['wrap', 'wrap-reverse', 'nowrap']"
  prefix='flex'
  nested=true
  fixed='!block pt-20'
  appended='flex items-center rounded-md bg-teal-500 bg-teal-100 w-6 h-6 bg-red-400 bg-teal-400 bg-yellow-400 bg-green-400 bg-blue-400 bg-purple-400 m-1 p-1'
  html='&lt;div class="flex items-center {class} bg-teal-100 rounded-md p-1"&gt;
&lt;div class="rounded-md bg-red-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-yellow-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-green-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-teal-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-blue-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-purple-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

## Flex Stretch {#flex-stretch}

用于同时控制 flex 子项如何伸缩的工具类。

<PlaygroundWithVariants
  variant='1'
  :variants="['1', 'auto', 'initial', 'none']"
  prefix='flex'
  nested=true
  fixed='!block pt-20'
  appended='flex items-center rounded-md bg-teal-500 bg-teal-100 w-6 h-6 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="flex items-center bg-teal-100 rounded-md p-1"&gt;
&lt;div class="rounded-md bg-red-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="{class} rounded-md bg-green-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-blue-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    flex: {
      1: '1 1 0%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      inherit: 'inherit',
      none: 'none',
      2: '2 2 0%',
    },
  },
}
```

</Customizing>

## Flex Grow {#flex-grow}

用于控制 flex 子项如何伸展的工具类。

<PlaygroundWithVariants
  variant='grow-0'
  :variants="['grow-0', 'grow']"
  prefix='flex'
  nested=true
  fixed='!block pt-20'
  appended='flex items-center rounded-md bg-teal-500 bg-teal-100 w-6 h-6 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="flex items-center bg-teal-100 rounded-md p-1"&gt;
&lt;div class="rounded-md bg-red-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-green-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="{class} rounded-md bg-blue-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    flexGrow: {
      0: 0,
      DEFAULT: 2,
      1: 1,
    },
  },
}
```

</Customizing>

## Flex Shrink {#flex-shrink}

用于控制 flex 子项如何被压缩的工具类。

<PlaygroundWithVariants
  variant='shrink-0'
  :variants="['shrink-0', 'shrink']"
  prefix='flex'
  nested=true
  fixed='!block pt-20'
  appended='flex items-center flex-nowrap rounded-md bg-teal-500 bg-teal-100 w-6 h-6 bg-red-400 bg-teal-400 bg-yellow-400 bg-green-400 bg-blue-400 bg-purple-400 m-1 p-1'
  html='&lt;div class="flex items-center flex-nowrap bg-teal-100 rounded-md p-1"&gt;
&lt;div class="rounded-md bg-red-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-yellow-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-green-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-teal-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-blue-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;div class="{class} rounded-md bg-purple-400 w-6 h-6 m-1"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    flexShrink: {
      0: 0,
      DEFAULT: 2,
      1: 1,
    },
  },
}
```

</Customizing>
