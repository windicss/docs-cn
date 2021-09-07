# 间隔 {#spacing}

## Padding {#padding}

用于控制元素内边距的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', '0.5', '1', '2', '4', '8', '10', '12', '14', '16', '20', '24', '48', '1.5rem', '32px']"
  prefix='p'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-500 bg-teal-100 flex-shrink-0 w-8 h-8 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} flex-shrink-0"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    padding: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
  },
}
```

</Customizing>

## Padding Y {#padding-y}

用于控制元素垂直内边距的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', '0.5', '1', '2', '4', '8', '10', '12', '14', '16', '20', '24', '48', '1.5rem', '32px']"
  prefix='py'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-500 flex-shrink-0 bg-teal-100 w-8 h-8 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} flex-shrink-0"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

## Padding X {#padding-x}

用于控制元素水平内边距的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', '0.5', '1', '2', '4', '8', '10', '12', '14', '16', '20', '24', '48', '1.5rem', '32px']"
  prefix='px'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-500 flex-shrink-0 bg-teal-100 w-8 h-8 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} flex-shrink-0"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

## Padding Top {#padding-top}

用于控制元素内边距区域中距顶部高度的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', '0.5', '1', '2', '4', '8', '10', '12', '14', '16', '20', '24', '48', '1.5rem', '32px']"
  prefix='pt'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded flex-shrink-0 bg-teal-500 bg-teal-100 w-8 h-8 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} flex-shrink-0"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

## Padding Left {#padding-left}

用于控制元素内边距区域中距左侧宽度的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', '0.5', '1', '2', '4', '8', '10', '12', '14', '16', '20', '24', '48', '1.5rem', '32px']"
  prefix='pl'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded flex-shrink-0 bg-teal-500 bg-teal-100 w-8 h-8 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 flex-shrink-0 {class}"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

## Padding Bottom {#padding-bottom}

用于控制元素内边距区域中距底部高度的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', '0.5', '1', '2', '4', '8', '10', '12', '14', '16', '20', '24', '48', '1.5rem', '32px']"
  prefix='pb'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center flex-shrink-0 rounded bg-teal-500 bg-teal-100 w-8 h-8 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 flex-shrink-0 {class}"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

## Padding Right {#padding-right}

用于控制元素内边距区域中距右侧宽度的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', '0.5', '1', '2', '4', '8', '10', '12', '14', '16', '20', '24', '48', '1.5rem', '32px']"
  prefix='pr'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center flex-shrink-0 rounded bg-teal-500 bg-teal-100 w-8 h-8 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded flex-shrink-0 bg-green-400 {class}"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

## Margin {#margin}

用于控制元素外边距的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', 'auto', '0.5', '1', '2', '4', '8', '12', '14', '16', '20', '24', '48', '1.5rem', '32px', '-px', '-0.5', '-2', '-4', '-8', '-12', '-14', '-16', '-20', '-24', '-48', '-1.5rem', '-32px']"
  prefix='m'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-100 bg-green-400 p-2 flex-shrink-0'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} p-2 flex-shrink-0"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    margin: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
  },
}
```

</Customizing>

## Margin Y {#margin-y}

用于控制元素垂直外边距的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', 'auto', '0.5', '1', '2', '4', '8', '12', '14', '16', '20', '24', '48', '1.5rem', '32px', '-px', '-0.5', '-2', '-4', '-8', '-12', '-14', '-16', '-20', '-24', '-48', '-1.5rem', '-32px']"
  prefix='my'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-100 bg-green-400 p-2 flex-shrink-0'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} p-2 flex-shrink-0"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

## Margin X {#margin-x}

用于控制元素水平外边距的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', 'auto', '0.5', '1', '2', '4', '8', '12', '14', '16', '20', '24', '48', '1.5rem', '32px', '-px', '-0.5', '-2', '-4', '-8', '-12', '-14', '-16', '-20', '-24', '-48', '-1.5rem', '-32px']"
  prefix='mx'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-100 bg-green-400 p-2 flex-shrink-0'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 flex-shrink-0 {class} p-2"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

## Margin Top {#margin-top}

用于控制元素外边距区域中距顶部高度的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', 'auto', '0.5', '1', '2', '4', '8', '12', '14', '16', '20', '24', '48', '1.5rem', '32px', '-px', '-0.5', '-2', '-4', '-8', '-12', '-14', '-16', '-20', '-24', '-48', '-1.5rem', '-32px']"
  prefix='mt'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-100 bg-green-400 p-2 flex-shrink-0'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 flex-shrink-0 {class} p-2"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

## Margin Left {#margin-left}

用于控制元素外边距区域中距左侧宽度的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', 'auto', '0.5', '1', '2', '4', '8', '12', '14', '16', '20', '24', '48', '1.5rem', '32px', '-px', '-0.5', '-2', '-4', '-8', '-12', '-14', '-16', '-20', '-24', '-48', '-1.5rem', '-32px']"
  prefix='ml'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-100 bg-green-400 p-2 flex-shrink-0'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 flex-shrink-0 {class} p-2"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

## Margin Bottom {#margin-bottom}

用于控制元素外边距区域中距底部高度的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', 'auto', '0.5', '1', '2', '4', '8', '12', '14', '16', '20', '24', '48', '1.5rem', '32px', '-px', '-0.5', '-2', '-4', '-8', '-12', '-14', '-16', '-20', '-24', '-48', '-1.5rem', '-32px']"
  prefix='mb'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-100 bg-green-400 p-2 flex-shrink-0'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 flex-shrink-0 {class} p-2"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

## Margin Right {#margin-right}

用于控制元素外边距区域中距右侧宽度的工具类。

<PlaygroundWithVariants
  variant='4'
  :variants="['0', 'px', 'auto', '0.5', '1', '2', '4', '8', '12', '14', '16', '20', '24', '48', '1.5rem', '32px', '-px', '-0.5', '-2', '-4', '-8', '-12', '-14', '-16', '-20', '-24', '-48', '-1.5rem', '-32px']"
  prefix='mr'
  nested=true
  fixed='text-white text-xs'
  appended='inline-flex items-center rounded bg-teal-100 bg-green-400 p-2 flex-shrink-0'
  html='&lt;div class="inline-flex items-center bg-teal-100 rounded"&gt;
&lt;p class="rounded bg-green-400 {class} p-2 flex-shrink-0"&gt;{class}&lt;/p&gt;
&lt;/div&gt;'
/>

## Space Between Y {#space-between-y}

用于控制元素垂直方向与其子元素的间隔的工具类。

<PlaygroundWithVariants
  variant='2'
  :variants="['0', 'px', '0.5', '1', '2', '4', '8', '12', '14', '16', '20', '24', '48', '1.5rem', '32px', '-px', '-0.5', '-2', '-4', '-8', '-12', '-14', '-16', '-20', '-24', '-48', '-1.5rem', '-32px']"
  prefix='space-y'
  nested=true
  fixed='!block'
  appended='flex items-center flex-col rounded-md bg-teal-500 bg-teal-100 w-6 h-6 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="flex items-center flex-col {class} bg-teal-100 rounded-md p-1"&gt;
&lt;div class="rounded-md bg-red-400 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-green-400 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-blue-400 w-6 h-6"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    space: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
  },
}
```

</Customizing>

## Space Between Y Reverse {#space-between-y-reverse}

如果你的元素倒序（使用 `flex-col-reverse`），请使用 `space-y-reverse` 间隔来确保每个元素被添加到正确的一侧的工具类。

<PlaygroundWithVariants
  variant='reverse'
  :variants="[]"
  prefix='space-y'
  nested=true
  fixed='!block'
  appended='flex items-center flex-col-reverse rounded-md bg-teal-500 bg-teal-100 w-6 h-6 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1 space-y-2 space-y-reverse'
  html='&lt;div class="flex items-center flex-col-reverse space-y-2 space-y-reverse bg-teal-100 rounded-md p-1"&gt;
&lt;div class="rounded-md bg-red-400 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-green-400 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-blue-400 w-6 h-6"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

## Space Between X {#space-between-x}

用于控制元素水平方向与其子元素的间隔的工具类。

<PlaygroundWithVariants
  variant='2'
  :variants="['0', 'px', '0.5', '1', '2', '4', '8', '12', '14', '16', '20', '24', '48', '1.5rem', '32px', '-px', '-0.5', '-2', '-4', '-8', '-12', '-14', '-16', '-20', '-24', '-48', '-1.5rem', '-32px']"
  prefix='space-x'
  nested=true
  fixed='!block'
  appended='flex items-center rounded-md bg-teal-500 bg-teal-100 w-6 h-6 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1'
  html='&lt;div class="flex items-center {class} bg-teal-100 rounded-md p-1"&gt;
&lt;div class="rounded-md bg-red-400 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-green-400 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-blue-400 w-6 h-6"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    space: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
  },
}
```

</Customizing>

## Space Between X Reverse {#space-between-x-reverse}

如果你的元素倒序（使用 `flex-row-reverse`），请使用 `space-x-reverse` 间隔来确保每个元素被添加到正确的一侧的工具类。

<PlaygroundWithVariants
  variant='reverse'
  :variants="[]"
  prefix='space-x'
  nested=true
  fixed='!block'
  appended='flex items-center flex-row-reverse rounded-md bg-teal-500 bg-teal-100 w-6 h-6 bg-red-400 bg-green-400 bg-blue-400 m-1 p-1 space-x-2 space-x-reverse'
  html='&lt;div class="flex items-center flex-row-reverse space-x-2 space-x-reverse bg-teal-100 rounded-md p-1"&gt;
&lt;div class="rounded-md bg-red-400 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-green-400 w-6 h-6"&gt;&lt;/div&gt;
&lt;div class="rounded-md bg-blue-400 w-6 h-6"&gt;&lt;/div&gt;
&lt;/div&gt;'
/>
