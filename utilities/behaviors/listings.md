# Listings

## List Style Type

Utilities for controlling the bullet/number style of a list.

<PlaygroundWithVariants
  variant='disc'
  :variants="['none', 'disc', 'circle', 'square', 'decimal', 'zero-decimal', 'greek', 'roman', 'upper-roman', 'alpha', 'upper-alpha']"
  prefix='list'
  fixed='p-2 dark:text-white opacity-85'
<<<<<<< HEAD
  :nested='true'
=======
  nested=true
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6
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

## List Style Position

Utilities for controlling the position of bullets/numbers in lists.

<PlaygroundWithVariants
  variant='inside'
  :variants="['inside', 'outside']"
  prefix='list'
  fixed='p-2 dark:text-white opacity-85'
<<<<<<< HEAD
  :nested='true'
=======
  nested=true
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6
  appended='bg-blue-200 bg-blue-300'
  html="&lt;ul class='{class} bg-blue-300'&gt;
  &lt;li class='bg-blue-200'&gt;One&lt;/li&gt;
  &lt;li class='bg-blue-200'&gt;Two&lt;/li&gt;
  &lt;li class='bg-blue-200'&gt;Three&lt;/li&gt;
&lt;/ul&gt;"
<<<<<<< HEAD
/>
=======
/>
>>>>>>> 7b51475a11f108c475dcd0bfe37dbb63021914f6
