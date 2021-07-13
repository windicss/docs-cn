# 排版

## 字体序列 {#font-family}

控制元素字体序列的功能类。

<PlaygroundWithVariants
  variant='sans'
  :variants="['sans', 'serif', 'mono']"
  prefix='font'
  fixed='text-lg p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
        serif: ['ui-serif', 'Georgia'],
        mono: ['ui-monospace', 'SFMono-Regular'],
        display: ['Oswald'],
        body: ['Open Sans'],
      },
    },
  },
}
```

字体序列可以是一个数组或者逗号分隔的字符串:

```json5
{
  // Array format:
  "sans": ["Helvetica", "Arial", "sans-serif"],
  // Comma-delimited format:
  "sans": "Helvetica, Arial, sans-serif",
}
```

注意：Windi CSS不会为你自动转义字体序列名称，如果你使用的字体序列包含无效标识符，请使用引号包裹或者转义它。

```json5
{
  // Won't work:
  "sans": ["Exo 2", /* ... */],
  // Add quotes:
  "sans": ["\"Exo 2\"", /* ... */],
}
```

</Customizing>

## 字体大小 {#font-size}

用来控制元素字体大小的功能类。

<PlaygroundWithVariants
  variant='base'
  :variants="['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl']"
  prefix='text'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
}
```

你可以在 `windi.config.js` 文件中设置 `[fontSize, lineHeight]` 的选项。

```js
// windi.config.js
export default {
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
  },
}
```

也可以在 `windi.config.js` 文件中设置 `[fontSize, { letterSpacing, lineHeight }]` 的选项。

```js
// windi.config.js
export default {
  theme: {
    fontSize: {
      '2xl': ['24px', {
        letterSpacing: '-0.01em',
      }],
      // Or with a default line-height as well
      '3xl': ['32px', {
        letterSpacing: '-0.02em',
        lineHeight: '40px',
      }],
    },
  },
}
```

</Customizing>

## 字体平滑度 {#font-smoothing}

用来控制字体平滑度的功能类。

<PlaygroundWithVariants
  variant='antialiased'
  :variants="['antialiased', 'subpixel-antialiased']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## 字体样式 {#font-style}

用来控制字体样式的功能类。

<PlaygroundWithVariants
  variant='italic'
  :variants="['italic', 'not-italic']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## 字体粗细 {#font-weight}

用来控制字体粗细的功能类。

<PlaygroundWithVariants
  variant='normal'
  :variants="['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', '400', '600']"
  prefix='font'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    fontWeight: {
      'hairline': 100,
      'extra-light': 100,
      'thin': 200,
      'light': 300,
      'normal': 400,
      'medium': 500,
      'semibold': 600,
      'bold': 700,
      'extrabold': 800,
      'extra-bold': 800,
      'black': 900,
    },
  },
}
```

</Customizing>

## 字体数字变形 {#font-variant-numeric}

用来控制数字变形的功能类。

<PlaygroundWithVariants
  variant='ordinal'
  :variants="['normal-nums','ordinal','slashed-zero','lining-nums','oldstyle-nums','proportional-nums','tabular-nums','diagonal-fractions','stacked-fractions']"
  prefix=''
  fixed='p-2 dark:text-white opacity-85 text-xl'
  html="0123456789&lt;br&gt;1/2 3/4&lt;br&gt;1st 2nd"
/>

## 连字符 {#hyphens}

`hyphens` 可以指定文本在多行换行时应如何断字。它可以完全防止断字，在文本中手动指定的点断字，或者让浏览器在适当的地方自动插入断字。

<PlaygroundWithVariants
  variant='auto'
  :variants="['none', 'manual', 'auto']"
  prefix='hyphens'
  fixed='dark:text-white opacity-85 overflow-hidden'
  appended='border border-blue-300 border-dashed p-2'
  nested=true
  html="&lt;p class='{class} border p-2 border-blue-300 border-dashed'&gt;An extra&shy;ordinarily long English word!&lt;/&gt;"
/>

## 字母间距 {#letter-spacing} 

用于控制元素的字距（字母间距）的功能类。

<PlaygroundWithVariants
  variant='normal'
  :variants="['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', '0px', '2px', '0.5em']"
  prefix='tracking'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
    },
  },
}
```

</Customizing>

## 行高 {#line-height}

用于控制元素的前行距（行高）的功能类。

<PlaygroundWithVariants
  variant='normal'
  :variants="['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', '0', '1', '2', '3', '4', '5', '6']"
  prefix='leading'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      lineHeight: {
        'extra-loose': '2.5',
      },
    },
  },
}
```

</Customizing>

## 制表符宽度 {#tab-size}

用于自定义制表符字符（U+0009）的宽度的功能类。

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '2', '4', '8', '7.5px', '2rem']"
  fixed='dark:text-white opacity-85 overflow-scroll font-mono text-xs'
  prefix='tab'
  nested=true
  appended='w-full whitespace-pre-wrap'
  html="&lt;p class='w-full whitespace-pre-wrap {class}'&gt;without tab
	with 1 tab
		with 2 tabs
  &lt;/&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    tabSize: {
      sm: '2',
      md: '4',
      lg: '8',
    },
  },
}
```

</Customizing>

## 文本对齐 {#text-alignment}

用来控制文本对齐的功能类。

<PlaygroundWithVariants
  variant='left'
  :variants="['left', 'center', 'right', 'justify']"
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  prefix='text'
  html="&lt;p class='{class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

## 文本颜色 {#text-color}

用于控制元素的文字颜色的功能类。

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='text'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  html="&lt;p class='{class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    textColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

</Customizing>

## 文本装饰 {#text-decoration} 

用于控制文本装饰的实用功能类。

### 文本装饰类型 {#text-decoration-type}

用于控制文本装饰类型的实用功能类。

<PlaygroundWithVariants
  variant='underline'
  :variants="['underline', 'line-through', 'no-underline']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

### 文本装饰样式 {#text-decoration-style}

用于控制文本装饰样式的实用功能类。

<PlaygroundWithVariants
  variant='solid'
  prefix='underline'
  :variants="['solid', 'double', 'dotted', 'dashed']"
  fixed='p-2 dark:text-white opacity-85 underline'
  html="The quick brown fox jumps over the lazy dog"
/>

### 文本装饰颜色 {#text-decoration-color}

用于控制文本装饰颜色的实用功能类。

<PlaygroundWithVariants
  variant='green-500'
  type='color'
  prefix='underline'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden underline underline-2'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    textDecorationColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

</Customizing>

### 文本装饰不透明度 {#text-decoration-opacity}

用于控制文本装饰颜色的不透明度的实用功能类。

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='underline-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='text-black underline underline-teal-600 underline-2'
  nested=true
  html="&lt;p class='text-black underline underline-2 underline-teal-600 {class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      textDecorationOpacity: {
        10: '0.1',
        20: '0.2',
        95: '0.95',
      },
    },
  },
}
```

</Customizing>

### 文本装饰长度 {#text-decoration-length}

用于控制文本装饰长度的实用功能类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', '0', '1', '2', '3', '4', '5', '6', '7', '8', '0.1rem', '3px', '0.3em']"
  prefix='underline'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='text-black underline underline-teal-600'
  nested=true
  html="&lt;p class='text-black underline underline-teal-600 {class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      textDecorationLength: {
        sm: '1px',
        md: '2px',
        lg: '4px',
      },
    },
  },
}
```

</Customizing>

### 文本装饰偏移量 {#text-decoration-offset}

用于控制文本装饰偏移量的实用功能类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', '1', '2', '3', '4', '5', '6', '7', '8', '0.6rem', '8.5px', '0.5em']"
  prefix='underline-offset'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden underline underline-2'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    textDecorationOffset: {
      sm: '1px',
      md: '2px',
      lg: '4px',
    },
  },
}
```

</Customizing>

## 文本缩进 {#text-indent}

用于控制文本缩进的实用功能类。

<PlaygroundWithVariants
  variant=''
  :variants="['', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '1.8rem', '2em', '1/2', '-xs', '-1em']"
  prefix='indent'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      textIndent: {
        '4xl': '5rem',
        '5xl': '6rem',
      },
    },
  },
}
```

</Customizing>

## 文本颜色不透明度 {#text-opacity}

用于控制文本颜色不透明度的实用功能类。

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='text-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='text-black'
  nested=true
  html="&lt;p class='text-black {class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      textOpacity: {
        10: '0.1',
        20: '0.2',
        95: '0.95',
      },
    },
  },
}
```

</Customizing>

## 文本阴影 {#text-shadow}

用于控制文本阴影的实用功能类。

<PlaygroundWithVariants
  variant='lg'
  :variants="['', 'sm', 'md', 'lg', 'xl', 'none']"
  prefix='text-shadow'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  html='The quick brown fox jumps over the lazy dog'
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    textShadow: {
      'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // If a DEFAULT shadow is provided, it will be used for the non-suffixed shadow utility.
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
  },
}
```

</Customizing>

## 文本描边 {#text-stroke}

用于控制文本描边的实用功能类。

### 文本描边宽度 {#text-stroke-width}

用于控制文本描边宽度的实用功能类。

<PlaygroundWithVariants
  variant='md'
  :variants="['', 'none', 'sm', 'md', 'lg', '0', '1', '2', '3', '4', '5', '6', '7', '8', '0.1rem', '3px', '0.3em']"
  prefix='text-stroke'
  fixed='p-2 text-transparent opacity-85 overflow-hidden text-stroke-teal-500 text-4xl'
  html="Hello World"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    extend: {
      textStrokeWidth: {
        'xl': '6',
        '2xl': '8',
      },
    },
  },
}
```

</Customizing>

### 文本描边颜色 {#text-stroke-color}

用于控制文本描边颜色的实用功能类。

<PlaygroundWithVariants
  variant='blue-500'
  type='color'
  prefix='text-stroke'
  fixed='p-2 text-transparent opacity-85 overflow-hidden text-4xl text-stroke'
  html="Hello World"
/>

<Customizing>

```js
// windi.config.js
export default {
  theme: {
    textStrokeColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

</Customizing>

## 文本转换 {#text-transform}

用于控制文本转换的实用功能类。

<PlaygroundWithVariants
  variant='uppercase'
  :variants="['uppercase', 'lowercase', 'capitalize', 'normal-case']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## 文本溢出 {#text-overflow}

用于控制文本溢出的实用功能类。

<PlaygroundWithVariants
  variant='truncate'
  :variants="['truncate', 'overflow-ellipsis', 'overflow-clip']"
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  html="&lt;p class='{class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

## 垂直对齐 {#vertical-alignment}

用于控制内联或表格单元格的垂直对齐的功能类。

<PlaygroundWithVariants
  variant='baseline'
  :variants="['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom']"
  fixed='p-2 dark:text-white opacity-85'
  prefix='align'
  nested=true
  appended='leading-none relative inline-block w-0 h-8 absolute top-0 border-blue-300 border-t border-b border-dashed w-full h-4 relative z-10 text-blue-500 font-medium'
  html='&lt;div class="leading-none relative"&gt;
    &lt;span class="w-0 h-8 inline-block {class}"&gt;
      &lt;span class="absolute top-0 border-blue-300 border-t border-b border-dashed w-full h-8"&gt;&lt;/span&gt;
      &lt;span class="absolute top-0 border-blue-300 border-t border-b border-dashed w-full h-4"&gt;&lt;/span&gt;
    &lt;/span&gt;
    &lt;span class="relative z-10 text-blue-500 font-medium"&gt;Hello WindiCSS&lt;/span&gt;
  &lt;/div&gt;'
/>

## 空格 {#whitespace}

用于控制元素的空格属性的功能类。

<PlaygroundWithVariants
  variant='normal'
  :variants="['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap']"
  fixed='p-2 dark:text-white opacity-85 overflow-scroll'
  prefix='whitespace'
  nested=true
  appended='w-full'
  html="&lt;p class='w-full {class}'&gt;First Line
      Second Line
      Third Line
  Last Line&lt;/&gt;"
/>

## 文本换行 {#word-break} 

用于控制元素中的换行符的功能类。

<PlaygroundWithVariants
  variant='normal'
  :variants="['normal', 'words', 'all']"
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  prefix='break'
  appended='w-4/5 mx-auto bg-blue-200'
  nested=true
  html="&lt;div class='w-4/5 mx-auto bg-blue-200'&gt;&lt;p class='w-full {class}'&gt;The quick brown fox jumps over the lazy dog
  abcdefghijklmnopqrstuvw&lt;/&gt;&lt;/div&gt;"
/>

## 书写模式 {#writing-mode}

`writing-mode` 可以设置文本的书写方向是水平还是垂直排列，以及块的截断方式。如果应用到整个文档时，需要设置在 `HTML` 根元素上。

<PlaygroundWithVariants
  variant='vertical-right'
  :variants="['normal', 'vertical-right', 'vertical-left']"
  prefix='write'
  fixed='p-2 dark:text-white opacity-85 w-full'
  html="The quick brown fox jumps over the lazy dog"
/>

## 书写方向 {#writing-orientation}

`writing-orientation` 可以设置文本字符的方向。它只影响垂直模式下的文本（当写入模式不是水平方向时）。它对于垂直方向语言的文本非常有用，当然也可以设置垂直方向的表格标题。

<PlaygroundWithVariants
  variant='mixed'
  :variants="['mixed', 'upright', 'sideways']"
  prefix='write-orient'
  fixed='p-2 dark:text-white opacity-85 write-vertical-right w-full'
  html="The quick brown fox jumps over the lazy dog"
/>
