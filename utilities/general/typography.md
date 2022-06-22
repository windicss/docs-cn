# 排版 {#typography}

## Font Family {#font-family}

用于控制元素 Font Family 的工具类。

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

Font Family 可以是数组或者逗号分隔的字符串:

```json5
{
  // Array format:
  "sans": ["Helvetica", "Arial", "sans-serif"],
  // Comma-delimited format:
  "sans": "Helvetica, Arial, sans-serif",
}
```

注意：Windi CSS 不会为你自动转义 Font Family 名称，如果你使用的 Font Family 包含无效标识符，请使用引号包裹或者转义它。

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

用来控制元素字体大小的工具类。

<PlaygroundWithVariants
  variant='base'
  :variants="['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl']"
  prefix='text'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js windi.config.js
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

你可以在 windi.config.js 文件中为每一个字体大小, 使用元组 [fontSize, lineHeight] 的形式来配置默认行高。

```js windi.config.js
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

你可以在 windi.config.js 文件中为每一个字体大小, 使用元组 [fontSize, {letterSpacing, lineHeight}] 的形式来配置默认行高。

```js windi.config.js
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

用来控制元素字体平滑度的工具类。

<PlaygroundWithVariants
  variant='antialiased'
  :variants="['antialiased', 'subpixel-antialiased']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## 字体样式 {#font-style}

用来控制文本样式的工具类。

<PlaygroundWithVariants
  variant='italic'
  :variants="['italic', 'not-italic']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## 字体粗细 {#font-weight}

用来控制元素字体粗细的工具类。

<PlaygroundWithVariants
  variant='normal'
  :variants="['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', '400', '600']"
  prefix='font'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js windi.config.js
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

## Font Variant Numeric {#font-variant-numeric}

用来控制元素 Font Variant Numeric 的工具类。

<PlaygroundWithVariants
  variant='ordinal'
  :variants="['normal-nums','ordinal','slashed-zero','lining-nums','oldstyle-nums','proportional-nums','tabular-nums','diagonal-fractions','stacked-fractions']"
  prefix=''
  fixed='p-2 dark:text-white opacity-85 text-xl'
  html="0123456789&lt;br&gt;1/2 3/4&lt;br&gt;1st 2nd"
/>

## 连字符 {#hyphens}

使用 `hyphens` 工具类可以指定文本在多行换行时应如何断字。它可以完全防止断字，在文本中手动指定的点断字，或者让浏览器在适当的地方自动插入断字。

<PlaygroundWithVariants
  variant='auto'
  :variants="['none', 'manual', 'auto']"
  prefix='hyphens'
  fixed='dark:text-white opacity-85 overflow-hidden'
  appended='border border-blue-300 border-dashed p-2'
  :nested='true'
  html="&lt;p class='{class} border p-2 border-blue-300 border-dashed'&gt;An extra&shy;ordinarily long English word!&lt;/&gt;"
/>

## 字符间距 {#letter-spacing} 

用于控制元素字距的工具类。

<PlaygroundWithVariants
  variant='normal'
  :variants="['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', '0px', '2px', '0.5em']"
  prefix='tracking'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js windi.config.js
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

用于控制元素前行距（行高）的工具类。

<PlaygroundWithVariants
  variant='normal'
  :variants="['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', '0', '1', '2', '3', '4', '5', '6']"
  prefix='leading'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js windi.config.js
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

用于自定义制表符（U+0009）宽度的工具类。

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '2', '4', '8', '7.5px', '2rem']"
  fixed='dark:text-white opacity-85 overflow-scroll font-mono text-xs'
  prefix='tab'
  :nested='true'
  appended='w-full whitespace-pre-wrap'
  html="&lt;p class='w-full whitespace-pre-wrap {class}'&gt;without tab
	with 1 tab
		with 2 tabs
  &lt;/&gt;"
/>

<Customizing>

```js windi.config.js
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

用来控制文本对齐的工具类。

<PlaygroundWithVariants
  variant='left'
  :variants="['left', 'center', 'right', 'justify']"
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  :nested='true'
  prefix='text'
  html="&lt;p class='{class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

## 文本颜色 {#text-color}

用于控制元素文本颜色的工具类。

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='text'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  :nested='true'
  html="&lt;p class='{class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

<Customizing>

```js windi.config.js
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

用于控制文本装饰的工具类。

### 文本装饰类型 {#text-decoration-type}

用于控制文本装饰类型的工具类。

<PlaygroundWithVariants
  variant='underline'
  :variants="['underline', 'overline', 'line-through', 'no-underline']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<<<<<<< HEAD
### 文本装饰颜色 {#text-decoration-color}

用于控制文本装饰颜色的工具类。
=======
### Text Decoration Color

Utilities for controlling the color of text decoration.
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6

<PlaygroundWithVariants
  variant='green-500'
  type='color'
  prefix='decoration'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden underline decoration-2'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js windi.config.js
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

<<<<<<< HEAD
### 文本装饰样式 {#text-decoration-style}

用于控制文本装饰样式的工具类。
=======
### Text Decoration Style

Utilities for controlling the style of text decoration.
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6

<PlaygroundWithVariants
  variant='solid'
  prefix='decoration'
  :variants="['solid', 'double', 'dotted', 'dashed', 'wavy']"
  fixed='p-2 dark:text-white opacity-85 underline'
  html="The quick brown fox jumps over the lazy dog"
/>

<<<<<<< HEAD
### 文本装饰线粗细 {#text-decoration-thickness}

用于控制文本装饰线粗细的工具类。
=======
### Text Decoration Thickness

Utilities for controlling the thickness of text decorations.
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'from-font', '0', '1', '2', '3', '4', '5', '6', '7', '8', '0.1rem', '3px', '0.3em']"
  prefix='decoration'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='underline decoration-teal-600'
<<<<<<< HEAD
  :nested='true'
=======
  nested=true
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6
  html="&lt;p class='text-black underline decoration-teal-600 {class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

<Customizing>

```js windi.config.js
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

用于控制文本装饰偏移量的工具类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', '1', '2', '3', '4', '5', '6', '7', '8', '0.6rem', '8.5px', '0.5em']"
  prefix='underline-offset'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden underline underline-2'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js windi.config.js
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

<<<<<<< HEAD
### 文本装饰不透明度 {#text-decoration-opacity}
=======
### Text Decoration Opacity

Utilities for controlling the opacity of an element's decoration color. This is a fallback of
[Text Decoration Color](#text-decoration-color) beginning with WindiCSS v3.4.0.

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='underline-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='underline underline-teal-600 underline-2'
  nested=true
  html="&lt;p class='text-black underline underline-2 underline-teal-600 {class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

<Customizing>

```js windi.config.js
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

## Text Indent
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6

用于控制文本装饰颜色的不透明度的工具类。从 WindiCSS v3.4.0 开始作为 [文本装饰颜色](#text-decoration-color) 的备用选项。

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='underline-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='underline underline-teal-600 underline-2'
  :nested='true'
  html="&lt;p class='text-black underline underline-2 underline-teal-600 {class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

<Customizing>

```js windi.config.js
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

## 文本缩进 {#text-indent}

用于控制文本缩进的工具类。

<PlaygroundWithVariants
  variant=''
  :variants="['', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '1.8rem', '2em', '1/2', '-xs', '-1em']"
  prefix='indent'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

<Customizing>

```js windi.config.js
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

## 文本不透明度 {#text-opacity}

用于控制文本颜色不透明度的工具类。

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='text-opacity'
  fixed='p-2 opacity-85 overflow-hidden'
  appended='text-black'
  :nested='true'
  html="&lt;p class='text-black {class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

<Customizing>

```js windi.config.js
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

用于控制文本元素阴影的工具类。

<PlaygroundWithVariants
  variant='lg'
  :variants="['', 'sm', 'md', 'lg', 'xl', 'none']"
  prefix='text-shadow'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  html='The quick brown fox jumps over the lazy dog'
/>

<Customizing>

```js windi.config.js
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

用于控制文本描边的工具类。

### 文本描边宽度 {#text-stroke-width}

用于控制文本描边宽度的工具类。

<PlaygroundWithVariants
  variant='md'
  :variants="['', 'none', 'sm', 'md', 'lg', '0', '1', '2', '3', '4', '5', '6', '7', '8', '0.1rem', '3px', '0.3em']"
  prefix='text-stroke'
  fixed='p-2 text-transparent opacity-85 overflow-hidden text-stroke-teal-500 text-4xl'
  html="Hello World"
/>

<Customizing>

```js windi.config.js
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

用于控制文本描边颜色的工具类。

<PlaygroundWithVariants
  variant='blue-500'
  type='color'
  prefix='text-stroke'
  fixed='p-2 text-transparent opacity-85 overflow-hidden text-4xl text-stroke'
  html="Hello World"
/>

<Customizing>

```js windi.config.js
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

用于控制文本转换的工具类。

<PlaygroundWithVariants
  variant='uppercase'
  :variants="['uppercase', 'lowercase', 'capitalize', 'normal-case']"
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## 文本溢出 {#text-overflow}

用于控制文本溢出的工具类。

<PlaygroundWithVariants
  variant='truncate'
  :variants="['truncate', 'overflow-ellipsis', 'overflow-clip']"
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  :nested='true'
  html="&lt;p class='{class}'&gt;The quick brown fox jumps over the lazy dog&lt;/&gt;"
/>

## 垂直对齐 {#vertical-alignment}

用于控制 inline 或 table-cell 盒元素垂直对齐的工具类。

<PlaygroundWithVariants
  variant='baseline'
  :variants="['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom']"
  fixed='p-2 dark:text-white opacity-85'
  prefix='align'
  :nested='true'
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

用于控制元素的空格属性的工具类。

<PlaygroundWithVariants
  variant='normal'
  :variants="['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap']"
  fixed='p-2 dark:text-white opacity-85 overflow-scroll'
  prefix='whitespace'
  :nested='true'
  appended='w-full'
  html="&lt;p class='w-full {class}'&gt;First Line
      Second Line
      Third Line
  Last Line&lt;/&gt;"
/>

## 断字 {#word-break} 

用于控制元素中如何断字的工具类。

<PlaygroundWithVariants
  variant='normal'
  :variants="['normal', 'words', 'all']"
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  prefix='break'
  appended='w-4/5 mx-auto bg-blue-200'
  :nested='true'
  html="&lt;div class='w-4/5 mx-auto bg-blue-200'&gt;&lt;p class='w-full {class}'&gt;The quick brown fox jumps over the lazy dog
  abcdefghijklmnopqrstuvw&lt;/&gt;&lt;/div&gt;"
/>

## 书写模式 {#writing-mode}

使用 `writing-mode` 工具类可以设置文本的书写方向是水平或是垂直排列，以及块的排列方向。为整个文档设置时，应设置在根元素上 (`HTML` 元素是 HTML 文档的根元素)。

<PlaygroundWithVariants
  variant='vertical-right'
  :variants="['normal', 'vertical-right', 'vertical-left']"
  prefix='write'
  fixed='p-2 dark:text-white opacity-85 w-full'
  html="The quick brown fox jumps over the lazy dog"
/>

## 书写方向 {#writing-orientation}

使用 `writing-orientation` 工具类可以设置行内文本字符的方向。它只会在垂直模式对文本产生影响（当 `书写模式` 不是 `水平上下排列` 时）。它对于垂直方向的语言文本非常有用，当然也可以用于设置垂直方向的表格标题。

<PlaygroundWithVariants
  variant='mixed'
  :variants="['mixed', 'upright', 'sideways']"
  prefix='write-orient'
  fixed='p-2 dark:text-white opacity-85 write-vertical-right w-full'
  html="The quick brown fox jumps over the lazy dog"
/>
