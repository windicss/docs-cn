# Windi 语言草案 {#windi-lang-draft}

## **变量** {#variables}

```css
@var width = 1px;
@var baseColor = #c6538c;
@var borderDark = rgba(base-color, 0.88);
@var borderWidth = width + 1px;
@var prop = 'color';

.alert {
  border: ${borderWidth + 4px} solid ${borderDark};
  ${prop}: red;
}
```

> 在草案的第一个版本中，我们考虑使用 sass 中类似的 $，例如 `$width:1px;`，但是 sass 使用一个非常不雅观的 `#{}` 操作符，当更改变量时，仍需使用 `$` 符号，最后我们决定启用上面的版本，它的灵感来自 JavaScript 模板字符串。

## **别名** {#alias}

```css
*btn: py-2 px-4 font-semibold rounded-lg;
*btn-green: text-white bg-green-500 hover:bg-green-700;

/* Alias is different from shortcuts in that it will not be compiled into any css, alias only defines text replacement based on the current scope. */

.button {
  @apply *btn *btn-green border-gray-200 !important;
}
```

## **Shortcuts** {#shortcuts}

```css
.btn: py-2 px-4 font-semibold rounded-lg;
.btn-green: btn text-white bg-green-500 hover:bg-green-700;
```

## **Apply** {#apply}

```css
/* support omit @apply, when only using utilities */
.btn { p-4 rounded bg-green-500 hover:(bg-green-600) }
.container { max-w-60em py-8 }

@apply bg-white; /* global apply, generate .bg-white... */

.mixed {
  @apply max-w-60em py-8;
  border-radius: 50%;
}
```

## **属性化** {#attributify}

```css
.btn {
  @attr[bg] red-500 opacity-30 lg:red-600;
}

@attr[bg] red-500 opacity-30 lg:red-600; /* global attributify */
```

## **注释** {#comments}

```css
support // this is a single line comment
and /* this is multi line comment */
```

## **嵌套** {#nesting}

```css
@screen sm {
  .clearfix {
    display: block;
    zoom: 1;
    &:after {
      content: " ";
      display: block;
      font-size: 0;
      height: 0;
      clear: both;
      visibility: hidden;
    }
  }
}
```

## **自动转义** {#autoescape}

```css
/* input */
.sm:hover:bg-red-500 {

}
/* output */
.sm\:hover\:bg-red-500 {

}
```

## **配置** {#configuration}

```css
/* only works in the scope */
@config local {
  colors: {
    ...
  }
}

/* set global config */
@config global {
  colors: {
    ...
  }
}
```

## **Layer** {#layer}

```css
@layer base {

}
@layer components {

}
@layer utilities {

}
```

## **Important** {#important}

```css
/* input */
@important {
  .clearfix {
    display: block;
    zoom: 1;
  }
}
/* output */
.clearfix {
  display: block !important;
  zoom: 1 !important;
}
```

## **数据类型** {#data-types}

## **boolean** {#boolean}

```css
@var open = True;
@var close = False;
@var none = None;
```
<<<<<<< HEAD
> 参考 python ，首字母大写更容易识别。
=======

> Refer to python, the initial capital letters are easier to identify.
>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f

### **string** {#string}

```css
@var color = 'blue';
@var color = "blue";
@var borderValue = `${borderWidth} solid ${borderDark}`; /* template string */
```

### **sizes** {#sizes}

```css
@var size = 1rem;
@var size = 1em;
@var size = 1px;
...
```

### **colors** {#colors}

```css
@var color = #f2ece4; // #f2ece4
@var color = #b37399aa; // rgba(179, 115, 153, 67%)
@var color = midnightblue; // #191970
@var color = rgb(204, 102, 153); // #c69
@var color = rgba(107, 113, 127, 0.8); // rgba(107, 113, 127, 0.8)
@var color = hsl(228, 7%, 86%); // #dadbdf
@var color = hsla(20, 20%, 85%, 0.7); // rgb(225, 215, 210, 0.7)
```

### **number** {#number}

```css
@var width = 2;
@var height = 3.2;
```

### **dictionary** {#dictionary}

```css
@var colors = {
  'primary': blue;
  'secondary': green;
}
/* set value */
colors['primary'] = red;
/* get value */
colors['primary'];
```

### **array** {#array}

```css
@var colors = [blue, gray, gray-200, 'test,comma'];

/* set value */
colors[2] = red;
colors.push(yellow);
colors.pop(yellow);
```

## **操作符** {#operators}

`+` `-` `*` `/` `**` `==` `!=` `!` `>` `<` `>=` `<=` `and` `or` `not` `=>` `new` `as` `in` `not in` `.`

```css
// numbers are converted into the same units
@var conversion-1 = 5cm + 10mm; // result is 6cm
@var conversion-2 = 2 - 3cm - 5mm; // result is -1.5cm

// conversion is impossible
@var incompatibleUnits = 2 + 5px - 3cm; // result is 4px

// example with variables
@var base = 5%;
@var filler = base * 2; // result is 10%
@var other = base + filler; // result is 15%
```

乘法和除法不转换为数字。在大多数情况下，它是没有意义的，长度相乘得到区域，css 不支持指定区域。Less 将按原样对数字进行运算，并显式指定计算结果的单位类型。

```css
@var base = 2cm * 3mm; // result is 6cm
```

您也可以对颜色进行算术运算：

```css
@var color = #224488 / 2; //results in #112244
@var bg = #112244 + #111; // result is #223355
```

## **函数** {#functions}

config()

theme()

range()

...

### **语句** {#statements}

在 windi 语言中，每条语句都以 `@` 开头。

#### 函数  {#function}

```css
@func pow(base, exponent) {
  @var result = base ** exponent;
  @return result;
}
```

#### 加载 {#loading}

加载 javascript 模块

```css
@load 'module1', 'module2', 'module3';
@load { export1 } from "module-name";
@load { export1 , export2 } from "module-name";
@load { export1 , export2 as alias2 , export3 as alias3 } from "module-name";
@load * from "module";
@load * as name from "module";
@load defaultExport from "module";
@load defaultExport, { export1, export2 } from "module-name";
@load defaultExport, * as name from 'module-name';
```

#### 导入 {#importing}

导入 css 文件

```css
@import "typo.css";
@import "typo.windi";
@import "src/corners" as c;
@import "src/corners.windi" as c;
```

#### Console {#console}

```css
@log 4rem + 3px;
@warn 'warn something';
@error 3rem * 2;
@assert 4 in [1, 2, 4];
```

#### 逻辑 {#logic}

##### If 语句 {#if-statement}

```css
@var color = 'blue';

@if color == 'red' {
  .button {
    @apply btn btn-red border-gray-200 !important;
  }
} @elif color == 'green' {
  .button {
    @apply btn btn-green border-gray-200 !important;
  }
} @else {
  .button {
    @apply btn btn-blue border-gray-200 !important;
  }
}
```

##### For 语句 {#for-statement}

```css
@for color in [red, blue, yellow] {
  .button-${color} {
    background: ${color};
  }
}

@for count, enum_days in enumerate(days, 5) {
  @log count, enum_days;
}
```

##### While 语句 {#while-statement}

```css
@var i = 3;

@while i > 0 {
  @log i;
  i = i - 1;
} @else {
  @log i;
}
```

#### With {#with}

```css
@with add(1,2) as c {
  c = c + 3;
  @log c;
}
```

#### Try {#try}

```css
@var result;

@try {
  result = 10 / x;
} @except TypeError as error1 {
  @log \`Type Error \${error1.message}\`;
}

@try {
  result = 10 / x;
} @except Exception as error {
  @log 'Exceptions';
}
```

#### JS {#js}

```css
@js {
  import { eval, rgba, get, set } from 'windi/lang';

  const a = get('width');
  set('width', eval('4px'));
  const width = eval('3px');
  export function add(a, b) {
    return a + b;
  }
}

@var c = add(1, 2);
```

<<<<<<< HEAD

#### 其他 {#others}
=======
#### Others
>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f

```css
@break;
@continue;
@yield 123;
@return 'hello world';
@raise Error('msg);
@del a['key'];
```

## **实现** {#implementation}

目前我们把 windi 语言编译成 JavaScript 并运行它，就像 TypeScript 一样。之后我们将拥有一个解释器，并使之成为一个独立的语言。无论如何，我们希望有一种编程语言能使 **JavaScript 和 windi 进行良好的交互**。 windi 的所有包依赖都将使用TypeScript构建，这意味着您可以直接调用 JavaScript/TypeScript 函数或类。

<<<<<<< HEAD
另外，关于 css 的构建，我们从第一个版本开始就有了自己的 css 构建引擎，然后我们还实现了嵌套 css, 所以这里不做详细介绍。总之，我相信有了上面的语法，wind 将会越来越完美。
=======
In addition, regarding the construction of CSS, we have our own CSS build engine since the windi v1 version, and then we have also implemented nested CSS, so I won't go into details here. In short, I believe that with the above grammar, windi will become more perfect.
>>>>>>> 297a90b840fbd7fc76f4f5da8f3b4baa8464949f

目前 wind 语言处于起草阶段，**欢迎提出任何建议**。您可以在 GitHub 上进行讨论，我们会尽快回复您。
