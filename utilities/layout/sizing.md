# Sizing {#sizing}

## Width {#width}

用于控制元素宽度的工具类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'px', 'full', 'screen', 'min', 'max', 'prose', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'screen-sm', 'screen-md', 'screen-lg', 'screen-xl', 'screen-2xl',
    '0', '1', '1.5', '2', '4', '8', '10', '12', '14', '18', '20', '24', '1/2', '1/3', '3/5', '11/12', '4rem', '60px']"
  prefix='w'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-500 bg-teal-100 flex-shrink-0 h-auto bg-green-400 m-1 p-2'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} h-auto flex-shrink-0 p-2"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      width: {
        half: '50%',
      },
    },
  },
}
```

</Customizing>

## Min-Width {#min-width}

用于控制元素最小宽度的工具类。

<PlaygroundWithVariants
  variant='none'
  :variants="['none', 'px', 'full', 'screen', 'min', 'max', 'prose', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'screen-sm', 'screen-md', 'screen-lg', 'screen-xl', 'screen-2xl',
    '0', '1', '1.5', '2', '4', '8', '10', '12', '14', '18', '20', '24', '1/2', '1/3', '3/5', '11/12', '4rem', '60px']"
  prefix='min-w'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-500 bg-teal-100 flex-shrink-0 h-auto bg-green-400 m-1 p-2'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} h-auto flex-shrink-0 p-2"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    minWidth: {
      half: '50%',
      full: '100%',
    },
  },
}
```

</Customizing>

## Max-Width {#max-width}

用于控制元素最大宽度的工具类。

<PlaygroundWithVariants
  variant='none'
  :variants="['none', 'px', 'full', 'screen', 'min', 'max', 'prose', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'screen-sm', 'screen-md', 'screen-lg', 'screen-xl', 'screen-2xl',
    '0', '1', '1.5', '2', '4', '8', '10', '12', '14', '18', '20', '24', '1/2', '1/3', '3/5', '11/12', '4rem', '60px']"
  prefix='max-w'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-500 bg-teal-100 flex-shrink-0 h-auto bg-green-400 m-1 p-2'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} h-auto flex-shrink-0 p-2"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
  },
}
```

</Customizing>

## Height {#height}

用于控制元素高度的工具类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'px', 'full', 'screen', 'min', 'max', 'prose', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'screen-sm', 'screen-md', 'screen-lg', 'screen-xl', 'screen-2xl',
    '0', '1', '1.5', '2', '4', '8', '10', '12', '14', '18', '20', '24', '1/2', '1/3', '3/5', '11/12', '4rem', '60px']"
  prefix='h'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-500 bg-teal-100 flex-shrink-0 w-auto bg-green-400 m-1 p-2'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} w-auto flex-shrink-0 p-2"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    height: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
  },
}
```

</Customizing>

## Min-Height {#min-height}

用于控制元素最小高度的工具类。

<PlaygroundWithVariants
  variant='none'
  :variants="['none', 'px', 'full', 'screen', 'min', 'max', 'prose', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'screen-sm', 'screen-md', 'screen-lg', 'screen-xl', 'screen-2xl',
    '0', '1', '1.5', '2', '4', '8', '10', '12', '14', '18', '20', '24', '1/2', '1/3', '3/5', '11/12', '4rem', '60px']"
  prefix='min-h'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-500 bg-teal-100 flex-shrink-0 w-auto bg-green-400 m-1 p-2'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} w-auto flex-shrink-0 p-2"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
  },
}
```

</Customizing>

## Max-Height {#max-height}

用于控制元素最大高度的工具类。

<PlaygroundWithVariants
  variant='none'
  :variants="['none', 'px', 'full', 'screen', 'min', 'max', 'prose', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 'screen-sm', 'screen-md', 'screen-lg', 'screen-xl', 'screen-2xl',
    '0', '1', '1.5', '2', '4', '8', '10', '12', '14', '18', '20', '24', '1/2', '1/3', '3/5', '11/12', '4rem', '60px']"
  prefix='max-h'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-500 bg-teal-100 flex-shrink-0 w-auto bg-green-400 m-1 p-2'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} w-auto flex-shrink-0 p-2"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
  },
}
```

</Customizing>

## Box Sizing {#box-sizing}

用于控制浏览器如何计算元素尺寸的工具类。

- 使用 `box-border` 用于告知浏览器**当你设置元素高度或宽度时，包含元素边框和内边距**，这意味着一个 **100px × 100px** 元素带有 **2px 的边框和 4px 的内边距**将被渲染为 **100px × 100px**，它的内部内容区域为 88px × 88px。Windi 将在预设样式中设置默认值。

- 使用 `box-content` 用于告知浏览器**在元素的添加边框和内边距到顶部高度**，这意味着一个 100px × 100px 元素带有 **2px 的边框和 4px 的内边距**将被渲染成 **112px × 112px**，它的内部内容区域为 100px × 100px。

<PlaygroundWithVariants
  variant='border'
  :variants="['border', 'content']"
  prefix='box'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-500 bg-teal-100 flex-shrink-0 w-full h-32 bg-green-400 text-center flex flex-col justify-center m-1 p-2'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;div class="rounded bg-green-400 {class} w-full h-32 flex-shrink-0 p-2 text-center flex flex-col justify-center"&gt;w-full x h-32&lt;/div&gt;
&lt;/div&gt;'
/>
