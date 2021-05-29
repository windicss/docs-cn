# Transform API {#transform-api}

对于 Tailwind 的插件，我们通常使用 Transform API 来支持。你可以像下面这样把它们引入到你的配置文件中：

```js
// windi.config.js

const { transform } = require('windicss/helpers')

export default {
  theme: {
    // ...
  },
  plugins: [
    transform('plugin-name'), // 把 require 换成 transform
  ],
}
```

https://github.com/windicss/plugins
