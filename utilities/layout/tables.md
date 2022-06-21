# Tables {#tables}

## Table {#table}

`table` 工具类的行为类似于 HTML `<table>` 元素。它定义了一个块级盒子，表格元素渲染表格数据——也就是说它是渲染包含数据的单元格的行和列组成的二维表格。

<PlaygroundWithVariants
  variant='table'
  :variants='[]'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='table-caption border-collapse text-center table-header-group table-row table-cell table-row-group table-footer-group text-xs border border-emerald-500 bg-emerald-200 p-1 py-2 text-emerald-600 font-medium font-bold'
  html='&lt;div class="{class} text-xs border-collapse"&gt;
    &lt;div class="table-caption text-center text-emerald-600 py-2 font-bold"&gt;Council budget&lt;/div&gt;
    &lt;div class="table-header-group bg-emerald-200"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium"&gt;Items&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium" scope="col"&gt;Expenditure&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Donuts&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;3,000&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Stationery&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;18,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-footer-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Totals&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;21,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>

## Inline Table {#inline-table}

`inline-table` 工具类无法在 HTML 中直接映射。它类似于 HTML `<table>` 元素，但它是一个行内盒子，而不是块级盒子。在表格内部，它拥有一个块级上下文。

<PlaygroundWithVariants
  variant='inline-table'
  :variants='[]'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='table-caption border-collapse text-center table-header-group table-row table-cell table-row-group table-footer-group text-xs border border-emerald-500 bg-emerald-200 p-1 py-2 text-emerald-600 font-medium font-bold'
  html='&lt;div class="{class} text-xs border-collapse"&gt;
    &lt;div class="table-caption text-center text-emerald-600 py-2 font-bold"&gt;Council budget&lt;/div&gt;
    &lt;div class="table-header-group bg-emerald-200"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium"&gt;Items&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium" scope="col"&gt;Expenditure&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Donuts&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;3,000&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Stationery&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;18,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-footer-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Totals&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;21,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>

| inline-table | display: inline-table; |

## Table Caption {#table-caption}

`table-caption` 工具类的行为类似于 HTML `<caption>` 元素。HTML `<caption>` 元素用于指定表格的标题。

<PlaygroundWithVariants
  variant='table-caption'
  :variants='[]'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='table border-collapse text-center table-header-group table-row table-cell table-row-group table-footer-group text-xs border border-emerald-500 bg-emerald-200 p-1 py-2 text-emerald-600 font-medium font-bold ring ring-amber-400'
  html='&lt;div class="table text-xs border-collapse"&gt;
    &lt;div class="{class} text-center text-emerald-600 py-2 font-bold ring ring-amber-400"&gt;Council budget&lt;/div&gt;
    &lt;div class="table-header-group bg-emerald-200"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium"&gt;Items&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium" scope="col"&gt;Expenditure&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Donuts&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;3,000&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Stationery&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;18,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-footer-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Totals&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;21,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>

## Table Cell {#table-cell}

`table-cell` 工具类的行为类似于 HTML `<td>` 元素。HTML `<td>` 定义了表格中的一行包含的数据。它参与了表格模型。

<PlaygroundWithVariants
  variant='table-cell'
  :variants='[]'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='table border-collapse table-caption text-center table-header-group table-row table-row-group table-footer-group text-xs border border-emerald-500 bg-emerald-200 p-1 py-2 text-emerald-600 font-medium font-bold ring ring-offset-2 ring-amber-400'
  html='&lt;div class="table text-xs border-collapse"&gt;
    &lt;div class="table-caption text-center text-emerald-600 py-2 font-bold"&gt;Council budget&lt;/div&gt;
    &lt;div class="table-header-group bg-emerald-200"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium"&gt;Items&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium" scope="col"&gt;Expenditure&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell ring ring-offset-2 ring-amber-400 border border-emerald-500 p-1 text-emerald-600"&gt;Donuts&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;3,000&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Stationery&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;18,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-footer-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Totals&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;21,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>

## Table Row {#table-row}

`table-row` 工具类的行为类似于 HTML `<tr>`。HTML `<tr>` 元素定义了表格中一行的单元格，通过混合使用 `<td>` （数据单元）和 `<th>` （标题单元）来组成表格行。

<PlaygroundWithVariants
  variant='table-row'
  :variants='[]'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='table border-collapse text-center table-caption table-header-group table-row table-cell table-row-group table-footer-group text-xs border border-emerald-500 bg-emerald-200 p-1 py-2 text-emerald-600 font-medium font-bold ring ring-offset-2 ring-amber-400'
  html='&lt;div class="table text-xs border-collapse"&gt;
    &lt;div class="table-caption text-center text-emerald-600 py-2 font-bold"&gt;Council budget&lt;/div&gt;
    &lt;div class="table-header-group bg-emerald-200"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium"&gt;Items&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium" scope="col"&gt;Expenditure&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row-group"&gt;
        &lt;div class="table-row ring ring-offset-2 ring-amber-400"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Donuts&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;3,000&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Stationery&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;18,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-footer-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Totals&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;21,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>

## Table Column {#table-column}

`table-column` 工具类的行为类似于 HTML `<col>` 元素。HTML `<col>` 定义了表格中的一列，它用于定义所有公共单元格的公共语义。它通常被 `<colgroup>` 元素包裹。

<PlaygroundWithVariants
  variant='table-column'
  :variants='[]'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='table text-center border-collapse table-caption table-column-group table-column table-row table-cell text-xs border border-emerald-500 bg-emerald-200 bg-teal-200 bg-yellow-200 bg-green-200 p-1 py-2 text-emerald-600 font-medium font-bold'
  html='&lt;div class="table border-collapse text-xs text-emerald-600"&gt;
    &lt;div class="table-caption text-center text-emerald-600 py-2 font-bold"&gt;Superheros&lt;/div&gt;
    &lt;div class="table-column-group"&gt;
        &lt;div class="table-column bg-emerald-200"&gt;&lt;/div&gt;
        &lt;div class="table-column bg-teal-200"&gt;&lt;/div&gt;
        &lt;div class="table-column bg-yellow-200"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row"&gt;
        &lt;div class="table-cell p-1 border border-emerald-500 font-medium"&gt;Hero&lt;/div&gt;
        &lt;div class="table-cell p-1 border border-emerald-500"&gt;Batman&lt;/div&gt;
        &lt;div class="table-cell p-1 border border-emerald-500"&gt;Flash&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row"&gt;
        &lt;div class="table-cell p-1 border border-emerald-500 font-medium"&gt;Skill&lt;/div&gt;
        &lt;div class="table-cell p-1 border border-emerald-500"&gt;Smarts&lt;/div&gt;
        &lt;div class="table-cell p-1 border border-emerald-500"&gt;Speed&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>
<<<<<<< HEAD
## Table Row Group {#table-row-group}
=======

## Table Row Group
>>>>>>> 13d6adadd92e29a2e95912f8dec0214b82eba237

`table-row-group` 工具类的行为类似于 HTML `<tbody>` 元素。`<tbody>` 封装了所有表格行（`tr` 元素），它们构成了表格主体元素   （`<table>`）。

<PlaygroundWithVariants
  variant='table-row-group'
  :variants='[]'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='table border-collapse text-center table-caption table-header-group table-row table-cell table-row-group table-footer-group text-xs border border-emerald-500 bg-emerald-200 p-1 py-2 text-emerald-600 font-medium font-bold ring ring-offset-2 ring-amber-400'
  html='&lt;div class="table text-xs text-emerald-600 border-collapse"&gt;
    &lt;div class="table-caption text-center py-2 font-bold"&gt;Council budget&lt;/div&gt;
    &lt;div class="table-header-group bg-emerald-200"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 font-medium"&gt;Items&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 font-medium" scope="col"&gt;Expenditure&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row-group ring ring-offset-2 ring-amber-400"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1"&gt;Donuts&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1"&gt;3,000&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1"&gt;Stationery&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1"&gt;18,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-footer-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1"&gt;Totals&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1"&gt;21,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>

## Table Column Group {#table-column-group}

`table-column-group` 工具类的行为类似于 HTML `<colgroup>` 元素。HTML `<colgroup>` 元素定义了表格中的一组列。

<PlaygroundWithVariants
  variant='table-column-group'
  :variants='[]'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='table text-center table-caption border-collapse table-column-group table-column table-row table-cell text-xs border border-emerald-500 bg-emerald-200 bg-teal-200 bg-yellow-200 bg-green-200 p-1 py-2 text-emerald-600 font-medium font-bold'
  html='&lt;div class="table text-xs text-emerald-600 border-collapse"&gt;
    &lt;div class="table-caption text-center text-emerald-600 py-2 font-bold"&gt;Superheros&lt;/div&gt;
    &lt;div class="table-column-group"&gt;
        &lt;div class="table-column bg-emerald-200"&gt;&lt;/div&gt;
        &lt;div class="table-column bg-teal-200"&gt;&lt;/div&gt;
        &lt;div class="table-column bg-yellow-200"&gt;&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row"&gt;
        &lt;div class="table-cell p-1 border border-emerald-500 font-medium"&gt;Hero&lt;/div&gt;
        &lt;div class="table-cell p-1 border border-emerald-500"&gt;Batman&lt;/div&gt;
        &lt;div class="table-cell p-1 border border-emerald-500"&gt;Flash&lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row"&gt;
        &lt;div class="table-cell p-1 border border-emerald-500 font-medium"&gt;Skill&lt;/div&gt;
        &lt;div class="table-cell p-1 border border-emerald-500"&gt;Smarts&lt;/div&gt;
        &lt;div class="table-cell p-1 border border-emerald-500"&gt;Speed&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>

## Table Header Group {#table-header-group}

`table-header-group` 工具类的行为类似于 HTML `<thead>` 元素。HTML `<thead>` 元素定义了一组表示表格表头标题的行。

<PlaygroundWithVariants
  variant='table-header-group'
  :variants='[]'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='table text-center table-caption border-collapse table-header-group table-row table-cell table-row-group table-footer-group text-xs border border-emerald-500 bg-emerald-200 p-1 py-2 text-emerald-600 font-medium font-bold ring ring-offset-2 ring-amber-400'
  html='&lt;div class="table text-xs border-collapse"&gt;
    &lt;div class="table-caption text-center text-emerald-600 py-2 font-bold"&gt;Council budget&lt;/div&gt;
    &lt;div class="table-header-group bg-emerald-200 ring ring-offset-2 ring-amber-400"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium"&gt;Items&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium" scope="col"&gt;Expenditure&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Donuts&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;3,000&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Stationery&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;18,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-footer-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Totals&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;21,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>

## Table Footer Group {#table-footer-group}

`table-footer-group` 工具类的行为类似于 HTML `<tfoot>` 元素。HTML `<tfoot>` 元素定义了一组汇总表格列的行。

<PlaygroundWithVariants
  variant='table-footer-group'
  :variants='[]'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='table text-center table-caption border-collapse table-header-group table-row table-cell table-row-group table-footer-group text-xs border border-emerald-500 bg-emerald-200 p-1 py-2 text-emerald-600 font-medium font-bold ring ring-offset-2 ring-amber-400'
  html='&lt;div class="table text-xs border-collapse"&gt;
    &lt;div class="table-caption text-center text-emerald-600 py-2 font-bold"&gt;Council budget&lt;/div&gt;
    &lt;div class="table-header-group bg-emerald-200"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium"&gt;Items&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium" scope="col"&gt;Expenditure&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Donuts&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;3,000&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Stationery&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;18,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-footer-group ring ring-offset-2 ring-amber-400"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Totals&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;21,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>

## Table Layout {#table-layout}

用于控制表格布局算法的工具类。

<PlaygroundWithVariants
  variant='auto'
  :variants="['auto', 'fixed']"
  prefix='table'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='border-collapse text-center text-xs border border-emerald-500 bg-emerald-200 p-1 py-2 text-emerald-600 font-medium font-bold w-2/3'
  html='&lt;table class="{class} text-xs border-collapse w-2/3"&gt;
    &lt;caption class="text-center text-emerald-600 py-2 font-bold"&gt;Council budget&lt;/caption&gt;
    &lt;thead class="bg-emerald-200"&gt;
        &lt;tr&gt;
            &lt;th class="border border-emerald-500 p-1 text-emerald-600 font-medium"&gt;Items&lt;/th&gt;
            &lt;th class="border border-emerald-500 p-1 text-emerald-600 font-medium"&gt;Expenditure&lt;/th&gt;
        &lt;/tr&gt;
    &lt;/thead&gt;
    &lt;tbody&gt;
        &lt;tr&gt;
            &lt;td class="border border-emerald-500 p-1 text-emerald-600"&gt;Donuts&lt;/td&gt;
            &lt;td class="border border-emerald-500 p-1 text-emerald-600"&gt;3,000&lt;/td&gt;
        &lt;/tr&gt;
        &lt;tr&gt;
            &lt;td class="border border-emerald-500 p-1 text-emerald-600"&gt;Stationery&lt;/td&gt;
            &lt;td class="border border-emerald-500 p-1 text-emerald-600"&gt;18,000&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tbody&gt;
    &lt;tfoot&gt;
        &lt;tr&gt;
            &lt;td class="border border-emerald-500 p-1 text-emerald-600"&gt;Totals&lt;/td&gt;
            &lt;td class="border border-emerald-500 p-1 text-emerald-600"&gt;21,000&lt;/td&gt;
        &lt;/tr&gt;
    &lt;/tfoot&gt;
&lt;/table&gt;'
/>

## Table Border Collapse {#table-border-collapse}

用于控制表格边框折叠或分离的工具类。

<PlaygroundWithVariants
  variant='collapse'
  :variants="['collapse', 'separate']"
  prefix='border'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='table table-caption text-center table-header-group table-row table-cell table-row-group table-footer-group text-xs border border-emerald-500 bg-emerald-200 p-1 py-2 text-emerald-600 font-medium font-bold'
  html='&lt;div class="table {class} text-xs"&gt;
    &lt;div class="table-caption text-center text-emerald-600 py-2 font-bold"&gt;Council budget&lt;/div&gt;
    &lt;div class="table-header-group bg-emerald-200"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium"&gt;Items&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium" scope="col"&gt;Expenditure&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Donuts&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;3,000&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Stationery&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;18,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-footer-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Totals&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;21,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>

## Table Caption Side {#table-caption-side}

`caption` 工具类用于指定 `<caption>` 元素在表格中的位置。这些值与表格的写入模式有关。

<PlaygroundWithVariants
  variant='top'
  :variants="['top', 'bottom']"
  prefix='caption'
  fixed='dark:text-white opacity-85'
  :nested='true'
  appended='table table-caption text-center table-header-group table-row table-cell table-row-group table-footer-group text-xs border border-emerald-500 bg-emerald-200 p-1 py-2 text-emerald-600 font-medium font-bold'
  html='&lt;div class="table {class} text-xs"&gt;
    &lt;div class="table-caption text-center text-emerald-600 py-2 font-bold"&gt;Council budget&lt;/div&gt;
    &lt;div class="table-header-group bg-emerald-200"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium"&gt;Items&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600 font-medium" scope="col"&gt;Expenditure&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-row-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Donuts&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;3,000&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Stationery&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;18,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="table-footer-group"&gt;
        &lt;div class="table-row"&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;Totals&lt;/div&gt;
            &lt;div class="table-cell border border-emerald-500 p-1 text-emerald-600"&gt;21,000&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;'
/>

## Table Empty Cells {#table-empty-cells}

<<<<<<< HEAD
`empty-cells` 工具类用于指定在无可见内容的情况下表格边框和背景的渲染方式。空单元格的一个很好的用例可能是，你可能不知道一个表是否包含空数据，并且决定隐藏它们。
=======
The `empty-cells` utility sets whether borders and backgrounds appear around `<table>`cells that have no visible content. A good use case for empty-cells could be a situation where you may not know whether a table will or will not contain empty data points and you decide to hide them.
>>>>>>> 13d6adadd92e29a2e95912f8dec0214b82eba237

<PlaygroundWithVariants
  variant='visible'
  :variants="['visible', 'hidden']"
  prefix='empty-cells'
  fixed='dark:text-white opacity-85 text-xs'
  :nested='true'
  appended='border-separate text-emerald-600 border border-emerald-500 p-1 font-medium font-bold py-2 text-center'
  html='&lt;table class="border-separate text-emerald-600 {class}"&gt;
  &lt;caption class="text-center py-2 font-bold"&gt;Client Info&lt;/caption&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;th class="border border-emerald-500 p-1 font-medium"&gt;Client Name&lt;/th&gt;
    	&lt;th class="border border-emerald-500 p-1 font-medium"&gt;Age&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
    	&lt;td class="border border-emerald-500 p-1"&gt;&lt;/td&gt;
    	&lt;td class="border border-emerald-500 p-1"&gt;25&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td class="border border-emerald-500 p-1"&gt;Louise Q.&lt;/td&gt;
      &lt;td class="border border-emerald-500 p-1"&gt;&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td class="border border-emerald-500 p-1"&gt;Owen B.&lt;/td&gt;
      &lt;td class="border border-emerald-500 p-1"&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;'
/>

## 表格工具类示例 {#example-of-table-utilities}

使用以下工具类来创建表格行为类似的元素。

<<<<<<< HEAD
#### Raw Html Tags {#raw-html-tags}
=======
### Raw Html Tags
>>>>>>> 13d6adadd92e29a2e95912f8dec0214b82eba237

```html
<table>
    <caption>Council budget</caption>
    <thead>
        <tr>
            <th>Items</th>
            <th scope="col">Expenditure</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th scope="row">Donuts</th>
            <td>3,000</td>
        </tr>
        <tr>
            <th scope="row">Stationery</th>
            <td>18,000</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th scope="row">Totals</th>
            <td>21,000</td>
        </tr>
    </tfoot>
</table>
```

<<<<<<< HEAD
#### 使用 Windi 工具类 {#with-windi-utilities}
=======
### With Windi Utilities
>>>>>>> 13d6adadd92e29a2e95912f8dec0214b82eba237

```html
<div class="table">
    <div class="table-caption">Council budget</div>
    <div class="table-header-group">
        <div class="table-row">
            <div class="table-cell">Items</div>
            <div class="table-cell">Expenditure</div>
        </div>
    </div>
    <div class="table-row-group">
        <div class="table-row">
            <div class="table-cell">Donuts</div>
            <div class="table-cell">3,000</div>
        </div>
        <div class="table-row">
            <div class="table-cell">Stationery</div>
            <div class="table-cell">18,000</div>
        </div>
    </div>
    <div class="table-footer-group">
        <div class="table-row">
            <div class="table-cell">Totals</div>
            <div class="table-cell">21,000</div>
        </div>
    </div>
</div>
```
