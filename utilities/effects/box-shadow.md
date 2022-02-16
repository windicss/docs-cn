<<<<<<< HEAD:utilities/effects.md
# 特效 {#effects}

## 盒阴影 {#box-shadow}
=======
# Box Shadow

## Box Shadow Size
>>>>>>> a25e42f4330c0888387d7a692c40254f50e9c6b6:utilities/effects/box-shadow.md

用于控制元素盒阴影的工具类。

<PlaygroundWithVariants
  variant=''
  :variants="['', 'sm', 'md', 'lg', 'xl', '2xl', 'inner', 'none']"
  prefix='shadow'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='bg-teal-400 w-full h-32 rounded-md'
  nested=true
  html='&lt;div class=&quot;bg-teal-400 w-full h-32 rounded-md {class}&quot;&gt;&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    boxShadow: {
      'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // If a DEFAULT shadow is provided, it will be used for the non-suffixed shadow utility.
      'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'none': 'none',
    },
  },
}
```

</Customizing>

<<<<<<< HEAD:utilities/effects.md
### 盒阴影颜色 {#box-shadow-color}
=======
## Box Shadow Color
>>>>>>> a25e42f4330c0888387d7a692c40254f50e9c6b6:utilities/effects/box-shadow.md

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='shadow'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='bg-teal-400 w-full h-32 rounded-md shadow-2xl'
  nested=true
  html='&lt;div class=&quot;bg-teal-400 w-full h-32 rounded-md shadow-2xl {class}&quot;&gt;&lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    boxShadowColor: {
      gray: '#1c1c1e',
    },
  },
}
```

<<<<<<< HEAD:utilities/effects.md
</Customizing>

## 不透明度 {#opacity}

用于控制元素不透明度的工具类。

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='bg-teal-400 w-full h-32 rounded-md'
  nested=true
  html='&lt;div class=&quot;bg-teal-400 w-full h-32 rounded-md {class}&quot;&gt;&lt;/div&gt;'
/>


<Customizing>

```js windi.config.js
export default {
  theme: {
    opacity: {
      light: '0.25',
      full: '1',
    },
  },
}
```

</Customizing>

## Mix Blend Mode {#mix-blend-mode}

用于控制元素与其背景混合的工具类。

<PlaygroundWithVariants
  variant='multiply'
  :variants="['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']"
  prefix='mix-blend'
  fixed='dark:text-white opacity-85 overflow-hidden h-full'
  appended='flex justify-center items-center bg-teal-300 bg-yellow-300 w-36 h-36 w-24 h-24 rounded-md'
  nested=true
  html='&lt;div class=&quot;flex justify-center&quot;&gt;
    &lt;div class=&quot;flex items-center justify-center rounded-md bg-teal-300 h-24 w-36&quot;&gt;
      &lt;div class=&quot;{class} rounded-md h-36 w-24 bg-yellow-300&quot;&gt;&lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>
=======
</Customizing>
>>>>>>> a25e42f4330c0888387d7a692c40254f50e9c6b6:utilities/effects/box-shadow.md
