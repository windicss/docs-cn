<<<<<<< HEAD
# 盒阴影 {#box-shadow}

## 盒阴影大小 {#box-shadow-size}
=======
# Box Shadow

## Box Shadow Size
>>>>>>> 13d6adadd92e29a2e95912f8dec0214b82eba237

用于控制元素盒阴影的工具类。

<PlaygroundWithVariants
  variant=''
  :variants="['', 'sm', 'md', 'lg', 'xl', '2xl', 'inner', 'none']"
  prefix='shadow'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='bg-teal-400 w-full h-32 rounded-md'
  :nested='true'
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

<<<<<<< HEAD
### 盒阴影颜色 {#box-shadow-color}
=======
## Box Shadow Color
>>>>>>> 13d6adadd92e29a2e95912f8dec0214b82eba237

<PlaygroundWithVariants
  variant='gray-500'
  type='color'
  prefix='shadow'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='bg-teal-400 w-full h-32 rounded-md shadow-2xl'
  :nested='true'
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

</Customizing>
