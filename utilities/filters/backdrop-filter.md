# Backdrop Filter

<<<<<<< HEAD
用于控制元素是否启用背景滤镜的工具类。
=======
Utilities for enabling and disabling backdrop filters on an element.
>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f

<PlaygroundWithVariants
  variant=''
  :variants="['', 'none']"
  prefix='backdrop-filter'
  fixed='dark:text-white opacity-85 h-full overflow-hidden'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover !backdrop-blur-md rounded-md text-sm bg-white bg-opacity-30 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  :nested='true'
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="{class} !backdrop-blur-md rounded-md text-sm bg-white bg-opacity-30 text-center p-4"&gt;
      &lt;p&gt;backdrop-blur&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<<<<<<< HEAD


## 模糊背景(blur) {#backdrop-blur}
=======
## Backdrop Blur
>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f

<PlaygroundWithVariants
  variant='sm'
  :variants="['', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '0', '1', '2', '3', '9', '12', '24px', '2rem']"
  prefix='backdrop-blur'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-30 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  :nested='true'
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-30 text-center p-4"&gt;
      &lt;p&gt;backdrop-blur&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropBlur: {
      '4xl': '72px',
      '5xl': '96px',
      '6xl': '128px',
    },
  },
}
```

</Customizing>

## 亮度背景(brightness) {#backdrop-brightness}

<PlaygroundWithVariants
  variant='100'
  :variants="['0', '50', '75', '90', '95', '100', '105', '110', '115', '125', '150', '175', '200', '251']"
  prefix='backdrop-brightness'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  :nested='true'
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-brightness&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropBrightness: {
      sm: '50',
      md: '100',
      lg: '150',
    },
  },
}
```

</Customizing>

## 对比度背景(contrast) {#backdrop-contrast}

<PlaygroundWithVariants
  variant='100'
  :variants="['0', '50', '75', '90', '95', '100', '105', '110', '115', '125', '150', '175', '200', '251']"
  prefix='backdrop-contrast'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  :nested='true'
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-contrast&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropContrast: {
      sm: '50',
      md: '100',
      lg: '150',
    },
  },
}
```

</Customizing>

## 灰度背景(grayscale) {#backdrop-grayscale}

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='backdrop-grayscale'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  :nested='true'
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-grayscale&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropGrayscale: {
      50: '0.5',
      80: '0.8',
    },
  },
}
```

</Customizing>

## 色调背景(huerotate) {#backdrop-hue-rotate}

<PlaygroundWithVariants
  variant='45'
  :variants="['0', '15', '30', '45', '60', '90', '120', '180', '-120', '-90', '-60', '-45', '-30', '-15']"
  prefix='backdrop-hue-rotate'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  :nested='true'
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-hue-rotate&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropHueRotate: {
      sm: '60',
      lg: '90',
      xl: '180',
    },
  },
}
```

</Customizing>

## 反转背景(invert) {#backdrop-invert}

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='backdrop-invert'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  :nested='true'
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-invert&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropInvert: {
      sm: '0.5',
      lg: '0.8',
    },
  },
}
```

</Customizing>

## 不透明度背景(opacity) {#backdrop-opacity}

<PlaygroundWithVariants
  variant='50'
  type='opacity'
  prefix='backdrop-opacity'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm text-center p-2 p-4 flex flex-col justify-center overflow-hidden border-2'
  :nested='true'
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm text-center p-4 border-2"&gt;
      &lt;p&gt;backdrop-opacity&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>


<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropOpacity: {
      sm: '0.5',
      lg: '0.8',
    },
  },
}
```

</Customizing>

## 饱和度背景(saturate) {#backdrop-saturate}

<PlaygroundWithVariants
  variant='0'
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='backdrop-saturate'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  :nested='true'
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-saturate&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropSaturate: {
      sm: '0.5',
      md: '1',
      lg: '1.5',
    },
  },
}
```

</Customizing>

## 棕褐色背景(sepia) {#backdrop-sepia}

<PlaygroundWithVariants
  variant=''
  :variants="['', '0', '5', '10', '20', '25', '30', '40' ,'50', '60', '70', '75', '80', '90', '95', '100']"
  prefix='backdrop-sepia'
  fixed='dark:text-white opacity-85'
  appended='w-screen h-full bg-no-repeat bg-center bg-cover backdrop-filter rounded-md text-sm bg-white bg-opacity-50 text-center p-2 p-4 flex flex-col justify-center overflow-hidden'
  :nested='true'
  html='
  &lt;div class="p-2 w-screen h-full bg-no-repeat bg-center bg-cover flex flex-col justify-center overflow-hidden" style="background-image: url(/assets/bg-shop.jpg), linear-gradient(rgb(219, 166, 166), rgb(0, 0, 172));"&gt;
    &lt;div class="backdrop-filter {class} rounded-md text-sm bg-white bg-opacity-50 text-center p-4"&gt;
      &lt;p&gt;backdrop-sepia&lt;/p&gt;
    &lt;/div&gt;
  &lt;/div&gt;'
/>

<Customizing>

```js windi.config.js
export default {
  theme: {
    backdropSepia: {
      sm: '0.5',
      md: '0.8',
    },
  },
}
```
<<<<<<< HEAD
=======

>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f
</Customizing>
