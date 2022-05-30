# 指令 {#directives}

你可以通过指令与 CSS 相结合的方式来使用可用的工具类 (utilities)。

## @apply {#apply}

将 `@apply` 使用在你 style 块中同一行的、一些已存在的工具类上。

当你在 HTML 中发现一个通用工具类组合时, 这个指令非常有用。你会喜欢把这些通用的工具类组合提取到一个新的组件中。

<DirectivesPlayground
:input='`
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white;
  padding-top: 1rem;
}`.trim()'
/>

如果你希望将 `apply` 使用在一个已存在的 class 上，并且使它 `!important`，只需要将 `!important` 加到声明的末尾即可：

<DirectivesPlayground
:input='`
.btn {
  @apply font-bold py-2 px-4 rounded !important;
}`.trim()'
/>

## @variants {#variants}

<<<<<<< HEAD
你可以通过把自己的工具类定义包装在 `@variants`中，以此来生成带有 [屏幕可变修饰，状态可变修饰，主题可变修饰](/utilities/general/variants) 的工具类。
=======
You can generate [screen variants, state variants, theme variants](/utilities/general/variants) of your own utilities by wrapping their definitions in the `@variants` directive.
>>>>>>> e1ba83f00cceb991f2619b5a893701f2e516acd0

<DirectivesPlayground
:input='`
@variants focus, hover {
  .rotate-0 {
    transform: rotate(0deg);
  }
  .rotate-90 {
    transform: rotate(90deg);
  }
}
@variants dark {
  .bg-color {
    background-color: #1c1c1e;
  }
}`.trim()'
/>


## @screen {#screen}

`@screen` 指令允许你创建媒体查询，通过名称来引用断点，以此来取代通过复制你 CSS 里面的值来实现。


<DirectivesPlayground
:input='`
@screen sm {
  .custom {
    @apply text-lg;
  }
}`.trim()'
/>

## @layer {#layer}

`@layer` 指令用来确认每个 class 的排序。合法的层级为 `基础 (base)`, `组件 (components)` 和 `工具类 (utilities)`。

<DirectivesPlayground
:input='`
@layer components {
  .components {
    @apply bg-red-500;
  }
}
@layer utilities {
  .utilities {
    max-width: 768px;
  }
}
@layer base {
  base {
    margin-left: auto;
  }
}
.normal {
  margin-right: auto; /* components by default */
}`.trim()'
/>

## theme() {#theme}

`theme()` 函数允许你通过 `.` 运算符来获取你设置的值。

<DirectivesPlayground
:input='`
.btn-blue {
  background-color: theme("colors.blue.500");
}`.trim()'
/>
