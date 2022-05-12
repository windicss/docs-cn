# Background Blend Mode

Utilities for controlling how an element's background image should blend with its background color.

<PlaygroundWithVariants
  variant='normal'
  :variants="['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']"
  prefix='bg-blend'
  fixed='dark:text-white opacity-85 overflow-hidden'
<<<<<<< HEAD
  :nested='true'
=======
  nested=true
>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f
  appended='w-full h-full bg-no-repeat bg-contain bg-center bg-green-300 rounded-md'
  html="&lt;div class=&quot;w-full h-full bg-no-repeat bg-green-300 rounded-md bg-contain bg-center {class}&quot; style=&quot;background-image:url(&#39;/assets/bg-blue.svg&#39;);&quot;&gt;
  &lt;/div&gt;"
/>
