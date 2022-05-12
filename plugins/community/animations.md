# @windicss/plugin-animations

将 [Animate CSS](https://github.com/animate-css/animate.css) 作为 [Windi CSS](https://github.com/windicss/windicss) 插件添加到你的项目中。此插件是基于 [tailwind-animate.css](https://github.com/bentzibentz/tailwindcss-animate.css) 修改的，以适配 Windi CSS。

## 安装 {#installation}

```bash
npm install --save-dev @windicss/plugin-animations
```

## 用法 {#usage}

```js windi.config.js
export default {
  theme: {
    // ...
  },
  plugins: [
    // 其他插件
    require('@windicss/plugin-animations')({
      settings: {
        animatedSpeed: 1000,
        heartBeatSpeed: 1000,
        hingeSpeed: 2000,
        bounceInSpeed: 750,
        bounceOutSpeed: 750,
        animationDelaySpeed: 1000,
      },
    }),
  ],
}
```

<<<<<<< HEAD
### 可用的 Animate CSS 类 {#available-animate-css-classes}
=======
### Available Animate CSS classes

>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f
* .animate-animated
* .animate-infinite
* .animate-delay
* .animate-delay-1s
* .animate-delay-2s
* .animate-delay-3s
* .animate-delay-4s
* .animate-delay-5s
* .animate-fast
* .animate-faster
* .animate-slow
* .animate-slower
* .animate-bounce
* .animate-flash
* .animate-pulse
* .animate-rubberBand
* .animate-shakeY
* .animate-shakeX
* .animate-headShake
* .animate-swing
* .animate-tada
* .animate-wobble
* .animate-jello
* .animate-heartBeat
* .animate-hinge
* .animate-jackInTheBox
* .animate-lightSpeedIn
* .animate-lightSpeedOut
* .animate-flip
* .animate-flipInX
* .animate-flipInY
* .animate-flipOutX
* .animate-flipOutY
* .animate-rotateIn
* .animate-rotateInDownLeft
* .animate-rotateInDownRight
* .animate-rotateInUpLeft
* .animate-rotateInUpRight
* .animate-rotateOut
* .animate-rotateOutDownLeft
* .animate-rotateOutDownRight
* .animate-rotateOutUpLeft
* .animate-rotateOutUpRight
* .animate-rollIn
* .animate-rollOut
* .animate-zoomIn
* .animate-zoomInUp
* .animate-zoomInDown
* .animate-zoomInLeft
* .animate-zoomInRight
* .animate-bounceIn
* .animate-bounceInDown
* .animate-bounceInUp
* .animate-bounceInLeft
* .animate-bounceInRight
* .animate-bounceOut
* .animate-bounceOutDown
* .animate-bounceOutUp
* .animate-bounceOutLeft
* .animate-bounceOutRight
* .animate-slideInDown
* .animate-slideInLeft
* .animate-slideInRight
* .animate-slideInUp
* .animate-slideOutDown
* .animate-slideOutLeft
* .animate-slideOutRight
* .animate-slideOutUp
* .animate-fadeIn
* .animate-fadeInDown
* .animate-fadeInDownBig
* .animate-fadeInLeft
* .animate-fadeInLeftBig
* .animate-fadeInRight
* .animate-fadeInRightBig
* .animate-fadeInUp
* .animate-fadeInUpBig
* .animate-fadeInTopLeft
* .animate-fadeInTopRight
* .animate-fadeInBottomLeft
* .animate-fadeInBottomRight
* .animate-fadeOut
* .animate-fadeOutDown
* .animate-fadeOutDownBig
* .animate-fadeOutLeft
* .animate-fadeOutLeftBig
* .animate-fadeOutRight
* .animate-fadeOutRightBig
* .animate-fadeOutUp
* .animate-fadeOutUpBig
* .animate-fadeOutTopLeft
* .animate-fadeOutTopRight
* .animate-fadeOutBottomLeft
* .animate-fadeOutBottomRight
* .animate-zoomOutDown
* .animate-zoomOutLeft
* .animate-zoomOutRight
* .animate-zoomOut
* .animate-zoomOutUp
* .animate-lightSpeedInRight
* .animate-lightSpeedInLeft
* .animate-lightSpeedOutRight
* .animate-lightSpeedOutLeft
* .animate-backInDown
* .animate-backInUp
* .animate-backInLeft
* .animate-backInRight
* .animate-backOutDown
* .animate-backOutUp
* .animate-backOutLeft
* .animate-backOutRight

## 致谢 {#credits}

此插件基于超给力的 [Animate.css](https://github.com/animate-css/animate.css)。
