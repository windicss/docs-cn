# 边框 {#border}

## 边框圆角 {#border-radius}

用于控制元素边框圆角半径的工具类。

<PlaygroundWithBox
  variant='3xl'
  :variants="['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '1/2', 'full']"
  prefix='rounded'
  fixed='bg-teal-500 m-auto mt-6 mb-2 w-30 h-30 text-transparent transition-all duration-300'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '4px',
      md: '0.375rem',
      lg: '0.5rem',
      full: '9999px',
      large: '12px',
    },
  },
}
```

</Customizing>

## 边框宽度 {#border-width}

用于控制元素边框宽度的工具类。

<PlaygroundWithBox
  mode='edges'
  variant=''
  :variants="['', '0', 1, 2, 3, 4, 5]"
  prefix='border'
  fixed='bg-gray-500 bg-opacity-5 border-teal-500 m-auto mt-6 mb-2 w-30 h-30 text-transparent transition-all'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      none: '0',
      sm: '2px',
    },
  },
}
```

</Customizing>

## 边框颜色 {#border-color}

用于控制元素边框颜色的工具类。

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='border'
  fixed='bg-gray-500 bg-opacity-5 border-3 border-teal-500 m-auto mt-6 mb-2 w-30 h-30 text-transparent transition-all'
/>

<Customizing>

你可以通过编辑 `windi.config.js` 文件 `theme.colors` 的部分来自定义调色板，或仅使用 `theme.borderColor` 部分自定义边框颜色。

```js
// windi.config.js
export default {
  theme: {
    borderColor: theme => ({
      ...theme('colors'),
      DEFAULT: theme('colors.gray.300', 'currentColor'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
  },
}
```

</Customizing>

## 边框不透明度 {#border-opacity}

用于控制元素边框颜色不透明度的工具类。

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='border-opacity'
  fixed='bg-gray-500 bg-opacity-5 border-3 border-teal-500 m-auto mt-6 mb-2 w-30 h-30 text-transparent transition-all'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      borderOpacity: {
        light: '0.1',
      },
    },
  },
}
```

</Customizing>

## 边框样式 {#border-style}

用于控制元素边框样式的工具类。

<PlaygroundWithVariants
  variant='solid'
  :variants="['solid', 'dashed', 'dotted', 'double', 'none']"
  prefix='border'
  fixed='bg-gray-500 bg-opacity-5 border-3 border-teal-500 m-auto mt-6 mb-2 w-30 h-30 text-transparent transition-all'
/>

## 分割线宽度 {#divide-width}

用于控制元素之间分割线厚度的工具类。

#### 纵向分割线 {#divide-y}

<PlaygroundWithVariants
  variant=''
  :variants="['', 'reverse', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']"
  prefix='divide-y'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='w-full py-2 text-center divide-y divide-teal-500'
  nested=true
  html='&lt;div class=&quot;w-full divide-y divide-teal-500 {class}&quot;&gt;
  &lt;div class="text-center py-2"&gt;1&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;2&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;3&lt;/div&gt;
&lt;/div&gt;'
/>

#### 适用于横向排列的元素分割线 {#divide-x}

<PlaygroundWithVariants
  variant=''
  :variants="['', 'reverse', '2', '4', '6', '8', '10', '12', '14', '16', '18', '20']"
  prefix='divide-x'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='w-full px-4 text-center divide-x divide-teal-500 flex items-center'
  nested=true
  html='&lt;div class=&quot;w-full divide-x divide-teal-500 flex items-center {class}&quot;&gt;
  &lt;div class="text-center px-4"&gt;1&lt;/div&gt;
  &lt;div class="text-center px-4"&gt;2&lt;/div&gt;
  &lt;div class="text-center px-4"&gt;3&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

分割线厚度的值默认继承了 `borderWidth` 的值，所以如果你希望同时自定义边框宽度和分割线厚度的值，请尝试更改 `windi.config.js` 文件的 `theme.borderWidth` 部分。

```js
// windi.config.js
export default {
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
  },
}
```

如果仅需要自定义分割线的宽度值，请尝试更改 `windi.config.js` 文件的 `theme.divideWidth` 部分。

```js
// windi.config.js
export default {
  theme: {
    divideWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
    },
  },
}
```

</Customizing>

## 分割线颜色 {#divide-color}

用于控制元素之间分割线颜色的工具类。

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='divide'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='w-full py-2 text-center divide-y'
  nested=true
  html='&lt;div class=&quot;w-full divide-y {class}&quot;&gt;
  &lt;div class="text-center py-2"&gt;1&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;2&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;3&lt;/div&gt;
&lt;/div&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    divideColor: theme => ({
      ...theme('borderColors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
  },
}
```

</Customizing>

## 分割线不透明度 {#divide-opacity}

用于控制元素之间分割线不透明度的工具类。

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='divide-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='w-full py-2 text-center divide-y divide-blue-500'
  nested=true
  html='&lt;div class=&quot;w-full divide-y divide-blue-500 {class}&quot;&gt;
  &lt;div class="text-center py-2"&gt;1&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;2&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;3&lt;/div&gt;
&lt;/div&gt;'
/>


<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      divideOpacity: {
        10: '0.1',
        20: '0.2',
        95: '0.95',
      },
    },
  },
}
```

</Customizing>

## 分割线样式 {#divide-style}

用于控制元素之间分割线样式的工具类。

<PlaygroundWithVariants
  variant='dashed'
  :variants="['solid', 'dashed', 'dotted', 'double', 'none']"
  prefix='divide'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='w-full py-2 text-center divide-y divide-blue-500'
  nested=true
  html='&lt;div class=&quot;w-full divide-y divide-blue-500 {class}&quot;&gt;
  &lt;div class="text-center py-2"&gt;1&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;2&lt;/div&gt;
  &lt;div class="text-center py-2"&gt;3&lt;/div&gt;
&lt;/div&gt;'
/>

## 环绕轮廓厚度 {#ring-width}

用于创建带盒状阴影的环绕轮廓的工具类。

<PlaygroundWithVariants
  variant=''
  :variants="['', 'inset', '0', '1', '2', '4', '6', '8']"
  prefix='ring'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring-blue-500'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 {class} ring-blue-500&quot;&gt;
    Button
  &lt;/button&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      ringWidth: {
        DEFAULT: '2px',
        6: '6px',
        10: '10px',
      },
    },
  },
}
```

</Customizing>

## 环绕轮廓颜色 {#ring-color}

用于设置环绕轮廓的颜色的工具类。

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='ring'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring-4'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring-4 {class}&quot;&gt;
    Button
  &lt;/button&gt;'
/>

<Customizing>

```js
// windi.config.js
const colors = require('windicss/colors')

export default {
  theme: {
    ringColor: {
      white: colors.white,
      pink: colors.fuchsia,
    },
  },
}
```

</Customizing>

## 环绕轮廓不透明度 {#ring-opacity}

用于设置环绕轮廓的不透明度的工具类。

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='ring-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring-blue-500 ring-4'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 {class}&quot;&gt;
    Button
  &lt;/button&gt;'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      ringOpacity: {
        15: '0.15',
        35: '0.35',
        65: '0.65',
      },
    },
  },
}
```

</Customizing>

## 环绕轮廓偏移厚度 {#ring-offset-width}

当添加环绕轮廓时，用于模拟偏移的工具类。

<PlaygroundWithVariants
  variant='2'
  :variants="['0', '1', '2', '4', '6', '8', '10', '12', '14', '16', '20']"
  prefix='ring-offset'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring ring-blue-500 ring-offset-green-400'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring ring-blue-500 {class} ring-offset-green-400&quot;&gt;
    Button
  &lt;/button&gt;'
/>


<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      ringOffsetWidth: {
        3: '3px',
        6: '6px',
        10: '10px',
      },
    },
  },
}
```

</Customizing>

## 环绕轮廓偏移颜色 {#ring-offset-color}

用于设置轮廓环偏移颜色的工具类。

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='ring-offset'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring ring-blue-500 ring-offset-4'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-32 py-3 rounded font-bold text-white bg-blue-400 ring ring-blue-500 ring-offset-4 {class}&quot;&gt;
    Button
  &lt;/button&gt;'
/>

<Customizing>

```js
// windi.config.js
const colors = require('windicss/colors')

export default {
  theme: {
    ringOffsetColor: {
      white: colors.white,
      pink: colors.fuchsia,
    },
  },
}
```

</Customizing>
