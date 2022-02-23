# Transform API {#transform-api}

对于 Tailwind 的插件，我们通常使用 Transform API 来支持。你可以像下面这样将它们引入你的配置文件：

```js windi.config.js
const { transform } = require('windicss/helpers')

export default {
  theme: {
    // ...
  },
  plugins: [
    transform('plugin-name'), // 把 require 替换成 transform
  ],
}
```

See more plugins: https://github.com/windicss/plugins
