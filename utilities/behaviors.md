# 行为 {#behaviors}

## Animation {#animation}

用于控制元素动画如何使用 CSS 动画的工具类。

<PlaygroundWithVariants
  variant='bounce'
  :variants="['none', 'spin', 'ping', 'pulse', 'bounce']"
  prefix='animate'
  fixed='p-2 dark:text-white opacity-85 h-full flex flex-col justify-center'
  nested=true
  appended='transition ease-in-out focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 cursor-pointer transform hover:scale-110 hover:-translate-y-1'
  html='&lt;button tabindex="-1"; class="transition {class} ease-in-out focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 cursor-pointer transform hover:scale-110 hover:-translate-y-1"&gt;
    Click me
  &lt;/button&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
  },
}
```

为了添加新动画 @keyframes, 可以在主题配置的 keyframes 部分进行定义：

```js windi.config.js
export default {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
}
```

</Customizing>

## Appearance {#appearance}

用于控制原生表单样式的工具类。

<PlaygroundWithVariants
  variant='none'
  :variants="['none']"
  prefix='appearance'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden flex flex-col justify-center space-y-5 h-full bg-blue-100 rounded-md'
  appended='w-12'
  nested=true
  html='
  &lt;select class="w-12"&gt;
  &lt;option&gt;Yes&lt;/option&gt;
  &lt;option&gt;No&lt;/option&gt;
&lt;/select&gt;
  &lt;select class="{class} w-12"&gt;
  &lt;option&gt;Yes&lt;/option&gt;
  &lt;option&gt;No&lt;/option&gt;
&lt;/select&gt;'
/>

## Box Decoration Break {#box-decoration-break}

用于控制元素跨多行、多列或多页时如何渲染的工具类。

<PlaygroundWithVariants
  variant='slice'
  :variants="['slice', 'clone']"
  prefix='decoration'
  fixed='dark:text-white opacity-85 overflow-hidden p-2 h-full'
  nested=true
  appended='text-5xl font-extrabold bg-gradient-to-r from-green-400 to-blue-500 rounded-16px px-4 text-sm text-white'
  html="
&lt;div&gt;
  &lt;span class=&quot;{class} bg-gradient-to-r px-4 from-green-400 to-blue-500 text-sm text-white rounded-16px&quot;&gt;The&lt;br&gt;quick&lt;br&gt;brown fox&lt;br&gt;over the lazy dog&lt;/span&gt;
&lt;/div&gt;"
/>

## Caret Color {#caret-color}

用于控制输入光标颜色的工具类。

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='caret'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-gray-100 py-2 rounded px-4 w-full border border-gray-400'
  html="&lt;input class='{class} bg-gray-100 border border-gray-400 py-2 rounded px-4 w-full' placeholder='Focus Me'&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    caretColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

</Customizing>

## Caret Opacity {#caret-opacity}

用于控制输入光标颜色不透明度的工具类。

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='caret-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-gray-100 py-2 rounded px-4 w-full border border-gray-400 caret-blue-500'
  html="&lt;input class='caret-blue-500 {class} bg-gray-100 border border-gray-400 py-2 rounded px-4 w-full' placeholder='Focus Me'&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      caretOpacity: {
        light: '0.1',
      },
    },
  },
}
```

</Customizing>

## Cursor {#cursor}

用于控制元素悬停时光标样式的工具类。

<PlaygroundWithVariants
  variant='pointer'
  :variants="['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed']"
  prefix='cursor'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-blue-500 ring-4 ring-opacity-50'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 {class}&quot;&gt;
    Hover me
  &lt;/button&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    cursor: {
      'auto': 'auto',
      'default': 'default',
      'pointer': 'pointer',
      'wait': 'wait',
      'text': 'text',
      'move': 'move',
      'not-allowed': 'not-allowed',
      'crosshair': 'crosshair',
      'zoom-in': 'zoom-in',
    },
  },
}
```

</Customizing>

## Image Rendering {#image-rendering}

`image-render` 工具类定义了当原始图像尺寸放大或缩小时，浏览器是如何渲染图像的。默认情况下，每个浏览器都会尝试使用锯齿来缩放图像，以防止失真，但如何我们希望保留其原始像素化方式，这可能会成为一个问题。

<PlaygroundWithVariants
  variant='pixel'
  :variants="['auto', 'pixel', 'edge']"
  prefix='image-render'
  fixed='p-2 dark:text-white opacity-85'
  appended='w-full h-32'
  nested=true
  html="&lt;img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAACdJREFUCB1j9Pf3/88ABMmMjCCKgQlMIhGMu3btAquY9mMDWBhDBQAutwfDrUlKzQAAAABJRU5ErkJggg==' class='{class} w-full h-32'&gt;"
/>

## List Style Type {#list-style-type}

用于控制列表元素样式的工具类。

<PlaygroundWithVariants
  variant='disc'
  :variants="['none', 'disc', 'circle', 'square', 'decimal', 'zero-decimal', 'greek', 'roman', 'upper-roman', 'alpha', 'upper-alpha']"
  prefix='list'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  html="&lt;ul class='{class}'&gt;
  &lt;li&gt;One&lt;/li&gt;
  &lt;li&gt;Two&lt;/li&gt;
  &lt;li&gt;Three&lt;/li&gt;
&lt;/ul&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
  },
}
```

</Customizing>

## List Style Position {#list-style-position}

用于控制列表元素位置的工具类。

<PlaygroundWithVariants
  variant='inside'
  :variants="['inside', 'outside']"
  prefix='list'
  fixed='p-2 dark:text-white opacity-85'
  nested=true
  appended='bg-blue-200 bg-blue-300'
  html="&lt;ul class='{class} bg-blue-300'&gt;
  &lt;li class='bg-blue-200'&gt;One&lt;/li&gt;
  &lt;li class='bg-blue-200'&gt;Two&lt;/li&gt;
  &lt;li class='bg-blue-200'&gt;Three&lt;/li&gt;
&lt;/ul&gt;"
/>

## Outline {#outline}

用于控制元素轮廓的工具类。

<PlaygroundWithVariants
  variant='gray-500'
  :variants="['none', 'white', 'black', 'gray-500', 'red-500', 'yellow-500', 'blue-500', 'green-500']"
  prefix='outline'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 {class}&quot;&gt;
    Button
  &lt;/button&gt;'
/>

#### Outline Solid {#outline-solid}

<PlaygroundWithVariants
  variant='gray-500'
  :variants="['none', 'white', 'black', 'gray-500', 'red-500', 'yellow-500', 'blue-500', 'green-500']"
  prefix='outline-solid'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 {class}&quot;&gt;
    Button
  &lt;/button&gt;'
/>

#### Outline Dotted {#outline-dotted}

<PlaygroundWithVariants
  variant='gray-500'
  :variants="['none', 'white', 'black', 'gray-500', 'red-500', 'yellow-500', 'blue-500', 'green-500']"
  prefix='outline-dotted'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400'
  nested=true
  html='&lt;button tabindex=&quot;-1&quot; class=&quot;focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 {class}&quot;&gt;
    Button
  &lt;/button&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      outline: {
        blue: '2px solid #0000ff',
      },
    },
  },
}
```

你也可以提供一个 outline-offset 值，使用元组 [outline, outlineOffset] 的形式来自定义轮廓工具类：

```js windi.config.js
export default {
  theme: {
    extend: {
      outline: {
        blue: ['2px solid #0000ff', '1px'],
      },
    },
  },
}
```

</Customizing>

## Overflow {#overflow}

用于控制元素如何处理对于容器来说太大的内容的工具类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'hidden', 'visible', 'scroll', 'x-auto', 'x-hidden', 'x-visible', 'x-scroll', 'y-auto', 'y-hidden', 'y-visible', 'y-scroll']"
  prefix='overflow'
  fixed='dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-blue-100 dark:bg-blue-400 p-2 rounded-md text-xs'
  html='&lt;div class="bg-blue-100 dark:bg-blue-400 p-2 rounded-md text-xs {class}"&gt;
The value of Pi is
          3.1415926535897932384626433832795029. The value of e is
          2.7182818284590452353602874713526625.
        Michaelmas term lately over, and the Lord Chancellor sitting in Lincolns Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth.
&lt;/div&gt;'
/>

## Overscroll Behavior {#overscroll-behavior}

用于控制浏览器在到达滚动区域边界时行为方式的工具类。

- 使用 `auto` 可以使户可以在到达主滚动区域的边界时继续滚动父滚动区域。

- 使用 `none` 可以防止在目标区域中滚动触发父元素中的滚动，并且还可以防止滚动超过容器末尾时的“弹跳”效果。

- 使用 `contain` 来防止在目标区域中滚动触发父元素中的滚动，但在支持它的操作系统中滚动超过容器末尾时保留“弹跳”效果。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'none', 'contain', 'x-auto', 'x-none', 'x-contain', 'y-auto', 'y-none', 'y-contain']"
  prefix='overscroll'
  fixed='dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-blue-100 dark:bg-blue-400 p-2 rounded-md text-xs overflow-auto'
  html='&lt;div class="bg-blue-100 dark:bg-blue-400 p-2 rounded-md text-xs overflow-auto {class}"&gt;
The value of Pi is
          3.1415926535897932384626433832795029. The value of e is
          2.7182818284590452353602874713526625.
        Michaelmas term lately over, and the Lord Chancellor sitting in Lincolns Inn Hall. Implacable November weather. As much mud in the streets as if the waters had but newly retired from the face of the earth.
&lt;/div&gt;'
/>

## Placeholder Color {#placeholder-color}

用于控制占位符文本颜色的工具类。

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='placeholder'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-gray-100 py-2 rounded px-4 w-full border border-gray-400'
  html="&lt;input class='{class} bg-gray-100 border border-gray-400 py-2 rounded px-4 w-full' placeholder='Placeholder'&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    placeholderColor: {
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    },
  },
}
```

</Customizing>

## Placeholder Opacity {#placeholder-opacity}

用于控制占位符文本颜色不透明度的工具类。

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='placeholder-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='bg-gray-100 py-2 rounded px-4 w-full border border-gray-400 placeholder-black'
  html="&lt;input class='placeholder-black {class} bg-gray-100 border border-gray-400 py-2 rounded px-4 w-full' placeholder='Placeholder'&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      placeholderOpacity: {
        light: '0.1',
      },
    },
  },
}
```

</Customizing>

## Pointer Events {#pointer-events}

用于控制元素响应鼠标事件的工具类。

<PlaygroundWithVariants
  variant='none'
  :variants="['none', 'auto']"
  prefix='pointer-events'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='underline text-blue-500'
  nested=true
  html='&lt;a href="/" class="underline text-blue-500 {class}"&gt;
    Click this link to return to the homepage
  &lt;/a&gt;'
/>

## Resize {#resize}

用于控制元素调整大小的工具类。

<PlaygroundWithVariants
  variant=''
  :variants="['', 'y', 'x', 'none']"
  prefix='resize'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='focus:outline-none border rounded-md m-0 w-30 h-30 bg-blue-300'
  nested=true
  html='&lt;textarea class=&quot;{class} focus:outline-none border rounded-md m-0 w-30 h-30 bg-blue-300&quot;&gt;&lt;/textarea&gt;'
/>

## User Select {#user-select}

用于控制用户允许选择元素文本的工具类。

<PlaygroundWithVariants
  variant='none'
  :variants="['none', 'text', 'all', 'auto']"
  prefix='select'
  fixed='p-2 dark:text-white opacity-85'
  html="The quick brown fox jumps over the lazy dog"
/>

## Screen Readers Access {#screen-readers-access}

用于控制提升屏幕阅读器可访问性的工具类。

| Class       | Properties                                                                                                                                                                     |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| sr-only     | position: absolute;<br>width: 1px;<br>height: 1px;<br>padding: 0;<br>margin: -1px;<br>overflow: hidden;<br>clip: rect(0, 0, 0, 0);<br>white-space: nowrap;<br>border-width: 0; |
| not-sr-only | position: static;<br>width: auto;<br>height: auto;<br>padding: 0;<br>margin: 0;<br>overflow: visible;<br>clip: auto;<br>white-space: normal;                                   |

### Usage {#usage}

使用 sr-only 以视觉方式隐藏元素，而不会将其隐藏在屏幕阅读器中：

```html
<a href="#">
  <svg><!-- ... --></svg>
  <span class="sr-only">Settings</span>
</a>
```

使用 not-sr-only 撤消 sr-only，使元素对视力正常的用户和屏幕阅读器可见。当你想在小屏幕上直观地隐藏某些内容但在大屏幕上显示它时，这会很有用，例如：

```html
<a href="#">
  <svg><!-- ... --></svg>
  <span class="sr-only sm:not-sr-only">Settings</span>
</a>
```

默认情况下，会为这些工具类生成响应式和焦点可变修饰。你可以使用 focus:not-sr-only 使元素在默认情况下在视觉上隐藏，但在用户使用 Tab 键时可见——对于“跳转到内容”链接很有用：

```html
<a href="#" class="sr-only focus:not-sr-only">
  Skip to content
</a>
```

