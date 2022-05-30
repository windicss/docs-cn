<<<<<<< HEAD
# 过渡和动画 {#transitions-and-animations}
=======
# Transitions
>>>>>>> e1ba83f00cceb991f2619b5a893701f2e516acd0

## 过渡属性 {#transitions-property}

用于控制 CSS 过渡属性的工具类。

<PlaygroundWithVariants
  variant=''
  :variants="['', 'all', 'colors', 'opacity', 'shadow', 'transform', 'none']"
  prefix='transition'
  fixed='p-2 dark:text-white opacity-85 h-full flex flex-col justify-center'
  :nested='true'
  appended='focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 cursor-pointer transform hover:bg-indigo-400 hover:ring-indigo-500 hover:scale-110 hover:-translate-y-1 !duration-300 hover:shadow-xl hover:opacity-80 shadow-indigo-500'
  html='&lt;button tabindex="-1"; class="{class} !duration-300 focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 cursor-pointer hover:bg-indigo-400 hover:ring-indigo-500 transform hover:scale-110 hover:-translate-y-1 hover:shadow-xl hover:opacity-80 shadow-indigo-500"&gt;
    Hover me
  &lt;/button&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
}
```

</Customizing>

## 过渡持续时间 {#transitions-duration}

用于控制 CSS 过渡持续时间的工具类。

<PlaygroundWithVariants
  variant='150'
  :variants="['0', '50', '75', '100', '150', '200', '300', '400', '500', '600', '700', '1000']"
  prefix='duration'
  fixed='p-2 dark:text-white opacity-85 h-full flex flex-col justify-center'
  :nested='true'
  appended='transition focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 cursor-pointer transform hover:scale-110 hover:-translate-y-1'
  html='&lt;button tabindex="-1"; class="transition {class} focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 cursor-pointer transform hover:scale-110 hover:-translate-y-1"&gt;
    Hover me
  &lt;/button&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      transitionDuration: {
        zero: '0ms',
        long: '2000ms',
      },
    },
  },
}
```

</Customizing>

## 过渡计时函数 {#transitions-timing-function}

用于控制 CSS 过渡缓和的工具类。

<PlaygroundWithVariants
  variant='linear'
  :variants="['linear', 'in', 'out', 'in-out']"
  prefix='ease'
  fixed='p-2 dark:text-white opacity-85 h-full flex flex-col justify-center'
  :nested='true'
  appended='transition focus:outline-none ease-in-out w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 cursor-pointer transform hover:scale-110 hover:-translate-y-1 duration-600'
  html='&lt;button tabindex="-1"; class="transition ease-in-out {class} duration-600 focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 cursor-pointer transform hover:scale-110 hover:-translate-y-1"&gt;
    Hover me
  &lt;/button&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
}
```

</Customizing>

## 过渡延迟 {#transitions-delay}

用于控制 CSS 过渡延迟的工具类。

<PlaygroundWithVariants
  variant='150'
  :variants="['0', '50', '75', '100', '150', '200', '300', '400', '500', '600', '700', '1000']"
  prefix='delay'
  fixed='p-2 dark:text-white opacity-85 h-full flex flex-col justify-center'
  :nested='true'
  appended='transition ease-in-out focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 cursor-pointer transform hover:scale-110 hover:-translate-y-1'
  html='&lt;button tabindex="-1"; class="transition {class} ease-in-out focus:outline-none w-full py-3 rounded font-bold text-white bg-blue-400 ring-4 ring-blue-500 ring-opacity-50 cursor-pointer transform hover:scale-110 hover:-translate-y-1"&gt;
    Hover me
  &lt;/button&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    extend: {
      transitionDelay: {
        zero: '0ms',
        long: '2000ms',
      },
    },
  },
}
```

</Customizing>
