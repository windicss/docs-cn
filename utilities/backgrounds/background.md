<<<<<<< HEAD:utilities/backgrounds.md
# 背景 {#backgrounds}
=======
# Background
>>>>>>> 3967dfbeff35ba1d6b556e37ba926bef55685b1c:utilities/backgrounds/background.md

## 背景固定 {#background-attachment}

用于控制背景图片在滚动时表现的工具类。

<PlaygroundWithVariants
  variant='fixed'
  :variants="['fixed', 'local', 'scroll']"
  prefix='bg'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden flex'
  nested=true
  appended='w-full h-full overflow-y-scroll bg-center bg-no-repeat'
  html='&lt;div class="{class} w-full h-full overflow-y-scroll bg-no-repeat bg-center" style="background-image:url(&#39;/assets/bg-blue.svg&#39;);"
&gt;&lt;p&gt;The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.&lt;/p&gt;&lt;/div&gt;'
/>

## 背景裁剪 {#background-clip}

用于控制元素背景是否裁剪到边框、内边距盒子、内容盒子下的工具类。

<PlaygroundWithVariants
  variant='border'
  :variants="['border', 'padding', 'content']"
  prefix='bg-clip'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='p-6 bg-cover rounded-md bg-blue-300 border-4 border-blue-400 border-dashed font-extrabold text-white flex justify-center items-center py-2'
  html="&lt;div class=&quot;{class} p-6 bg-cover rounded-md bg-blue-300 border-4 border-blue-400 border-dashed font-extrabold text-white flex justify-center items-center&quot;&gt;
      &lt;span class=&quot;py-2&quot;&gt;Hello World&lt;/span&gt;
    &lt;/div&gt;"
/>

<PlaygroundWithVariants
  variant='text'
  :variants="[]"
  prefix='bg-clip'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'
  html="&lt;div class=&quot;text-5xl font-extrabold&quot;&gt;
  &lt;span class=&quot;bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500&quot;&gt;
    Hello world
  &lt;/span&gt;
&lt;/div&gt;"
/>

## 背景颜色 {#background-color}

用于控制元素背景色的工具类。

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='bg'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='p-2 rounded-md'
  html="&lt;div class='{class} p-2 rounded-md'&gt;&lt;p&gt;The quick brown fox jumps over the lazy dog&lt;/p&gt;&lt;/div&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      primary: '#3490dc',
      secondary: '#ffed4a',
      danger: '#e3342f',
    }),
  },
}
```

</Customizing>

## 背景颜色不透明度 {#background-opacity}

用于控制元素背景色不透明度的工具类。

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='bg-opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='p-2 rounded-md bg-blue-500'
  html="&lt;div class='bg-blue-500 {class} p-2 rounded-md'&gt;&lt;p&gt;The quick brown fox jumps over the lazy dog&lt;/p&gt;&lt;/div&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      opacity: {
        light: '0.15',
      },
    },
  },
}
```

</Customizing>

## 背景图像位置 {#background-position}

用于控制元素背景图片位置的工具类。

<PlaygroundWithVariants
  variant='bottom'
  :variants="['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top']"
  prefix='bg'
  fixed='dark:text-white opacity-85'
  nested=true
  appended='mx-auto bg-blue-300 rounded-md w-full bg-no-repeat'
  html='&lt;div class=&quot;mx-auto {class} bg-blue-300 rounded-md w-full bg-no-repeat&quot; style=&quot;background-image:url(&#39;/assets/bg-square.svg&#39;);aspect-ratio: 1 / 1;&quot;&gt;&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backgroundPosition: {
      'bottom': 'bottom',
      'bottom-4': 'center bottom 1rem',
      'center': 'center',
      'left': 'left',
      'left-bottom': 'left bottom',
      'left-top': 'left top',
      'right': 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      'top': 'top',
      'top-4': 'center top 1rem',
    },
  },
}
```

</Customizing>

## 背景图像重复 {#background-repeat}

用于控制元素背景图像重复的工具类。

<PlaygroundWithVariants
  variant='repeat'
  :variants="['repeat', 'no-repeat', 'repeat-x', 'repeat-y', 'repeat-round', 'repeat-space']"
  prefix='bg'
  fixed='h-full dark:text-white opacity-85'
  nested=true
  appended='mx-auto w-full bg-blue-300 rounded-md'
  html='&lt;div class=&quot;mx-auto w-full bg-blue-300 rounded-md {class}&quot; style=&quot;background-image:url(&#39;/assets/bg-square.svg&#39;);aspect-ratio: 1 / 1;&quot;&gt;
  &lt;/div&gt;'
/>

## 背景图像大小 {#background-size}

用于控制元素背景图背景大小的工具类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'cover', 'contain']"
  prefix='bg'
  fixed='dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='w-full h-full bg-no-repeat bg-center'
  html="&lt;div class=&quot;w-full h-full {class} bg-no-repeat bg-center&quot; style=&quot;background-image:url(&#39;/assets/bg-blue.svg&#39;);&quot;&gt;
  &lt;/div&gt;"
/>

<Customizing>

```js
export default {
  theme: {
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
  },
}
```

</Customizing>

## 背景图像原点 {#background-origin}

用于控制元素背景图像原点的工具类。

<PlaygroundWithVariants
  variant='border'
  :variants="['border', 'padding', 'content']"
  prefix='bg-origin'
  fixed='dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='p-6 rounded-md border-4 border-blue-400 border-dashed font-extrabold text-white flex justify-center items-center bg-no-repeat'
  html='&lt;div class="{class} bg-no-repeat p-6 rounded-md border-4 border-blue-400 border-dashed font-extrabold text-white flex justify-center items-center" style="background-image: url(/assets/bg-shop.jpg);"&gt;
      &lt;span&gt;Hello World&lt;/span&gt;
    &lt;/div&gt;'
/>
<<<<<<< HEAD:utilities/backgrounds.md

## 背景图像 {#background-image}

用于控制元素背景图像的工具类。

<PlaygroundWithVariants
  variant='gradient-to-r'
  :variants="['none', 'gradient-to-t', 'gradient-to-tr', 'gradient-to-r', 'gradient-to-br', 'gradient-to-b', 'gradient-to-bl', 'gradient-to-l', 'gradient-to-tl']"
  prefix='bg'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='h-full w-full rounded-md from-green-400 to-blue-500'
  html="&lt;div class=&quot;h-full w-full rounded-md {class} from-green-400 to-blue-500&quot;&gt;&lt;/div&gt;"
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': 'url(\'/img/hero-pattern.svg\')',
        'footer-texture': 'url(\'/img/footer-texture.png\')',
      }),
    },
  },
}
```

</Customizing>

## 背景渐变 {#background-gradient}

用于控制元素背景渐变的工具类。

### 渐变起点色 {#gradient-from}

<PlaygroundWithVariants
  variant='green-500'
  type='color'
  prefix='from'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='h-full w-full rounded-md bg-gradient-to-r to-blue-500'
  html="&lt;div class=&quot;h-full w-full rounded-md bg-gradient-to-r {class} to-blue-500&quot;&gt;&lt;/div&gt;"
/>

### 渐变中间色 {#gradient-via}

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='via'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='h-full w-full rounded-md bg-gradient-to-r from-red-500 to-blue-500'
  html="&lt;div class=&quot;h-full w-full rounded-md bg-gradient-to-r from-red-500 {class} to-blue-500&quot;&gt;&lt;/div&gt;"
/>

### 渐变终点色 {#gradient-to}

<PlaygroundWithVariants
  variant='yellow-500'
  type='color'
  prefix='to'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='h-full w-full rounded-md bg-gradient-to-r from-green-500'
  html="&lt;div class=&quot;h-full w-full rounded-md bg-gradient-to-r from-green-500 {class}&quot;&gt;&lt;/div&gt;"
/>

## 背景混合模式 {#background-blend-mode}

用于控制元素背景图像与其背景颜色混合的工具类。

<PlaygroundWithVariants
  variant='normal'
  :variants="['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']"
  prefix='bg-blend'
  fixed='dark:text-white opacity-85 overflow-hidden'
  nested=true
  appended='w-full h-full bg-no-repeat bg-contain bg-center bg-green-300 rounded-md'
  html="&lt;div class=&quot;w-full h-full bg-no-repeat bg-green-300 rounded-md bg-contain bg-center {class}&quot; style=&quot;background-image:url(&#39;/assets/bg-blue.svg&#39;);&quot;&gt;
  &lt;/div&gt;"
/>
=======
>>>>>>> 3967dfbeff35ba1d6b556e37ba926bef55685b1c:utilities/backgrounds/background.md
