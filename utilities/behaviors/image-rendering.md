# Image Rendering

<<<<<<< HEAD
The `image-render` utility defines how the browser should render an image if it is scaled up or down from its original 
dimensions. By default, each browser will attempt to apply aliasing to this scaled image in order to prevent distortion, 
=======
The `image-render` utility defines how the browser should render an image if it is scaled up or down from its original
dimensions. By default, each browser will attempt to apply aliasing to this scaled image in order to prevent distortion,
>>>>>>> be07e7e9c469198d9a80231b2bbe139db32f1096
but this can sometimes be a problem if we want the image to preserve its original pixelated form.

<PlaygroundWithVariants
  variant='pixel'
  :variants="['auto', 'pixel', 'edge']"
  prefix='image-render'
  fixed='p-2 dark:text-white opacity-85'
  appended='w-full h-32'
<<<<<<< HEAD
  :nested='true'
=======
  nested=true
>>>>>>> be07e7e9c469198d9a80231b2bbe139db32f1096
  html="&lt;img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAACdJREFUCB1j9Pf3/88ABMmMjCCKgQlMIhGMu3btAquY9mMDWBhDBQAutwfDrUlKzQAAAABJRU5ErkJggg==' class='{class} w-full h-32'&gt;"
/>
