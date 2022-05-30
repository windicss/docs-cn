# Opacity

Utilities for controlling the opacity of an element.

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='opacity'
  fixed='p-2 dark:text-white opacity-85 overflow-hidden'
  appended='bg-teal-400 w-full h-32 rounded-md'
<<<<<<< HEAD
  :nested='true'
=======
  nested=true
>>>>>>> e1ba83f00cceb991f2619b5a893701f2e516acd0
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
