(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{387:function(s,a,t){"use strict";t.r(a);var e=t(14),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"flex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[s._v("#")]),s._v(" Flex")]),s._v(" "),t("h4",{attrs:{id:"一、flex-布局是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、flex-布局是什么"}},[s._v("#")]),s._v(" 一、Flex 布局是什么？")]),s._v(" "),t("p",[s._v('Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。任何一个容器都可以指定为 Flex 布局。')]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("行内元素也可以使用 Flex 布局。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inline-flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("Webkit 内核的浏览器，必须加上-webkit前缀。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" -webkit-flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* Safari */")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("display")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。")]),s._v(" "),t("h4",{attrs:{id:"二、基本概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、基本概念"}},[s._v("#")]),s._v(" 二、基本概念")]),s._v(" "),t("p",[s._v('采用 Flex 布局的元素，称为 Flex 容器（flex container），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称"项目"。')]),s._v(" "),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png",alt:""}})]),s._v(" "),t("p",[s._v("容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。")]),s._v(" "),t("p",[s._v("项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。")]),s._v(" "),t("h4",{attrs:{id:"三、容器的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、容器的属性"}},[s._v("#")]),s._v(" 三、容器的属性")]),s._v(" "),t("p",[s._v("以下6个属性设置在容器上。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("flex-direction\nflex-wrap\nflex-flow\njustify-content\nalign-items\nalign-content\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h5",{attrs:{id:"flex-direction属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction属性"}},[s._v("#")]),s._v(" flex-direction属性")]),s._v(" "),t("p",[s._v("flex-direction属性决定主轴的方向（即项目的排列方向）。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-direction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" row | row-reverse | column | column-reverse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png",alt:""}})]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("row（默认值）：主轴为水平方向，起点在左端。\nrow-reverse：主轴为水平方向，起点在右端。\ncolumn（rn的默认值）：主轴为垂直方向，起点在上沿。\ncolumn-reverse：主轴为垂直方向，起点在下沿。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h5",{attrs:{id:"flex-wrap属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap属性"}},[s._v("#")]),s._v(" flex-wrap属性")]),s._v(" "),t("p",[s._v('默认情况下，项目都排在一条线（又称"轴线"）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。')]),s._v(" "),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071006.png",alt:""}})]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-wrap")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nowrap | wrap | wrap-reverse"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("它可能取三个值。\n（1）nowrap（默认）：不换行。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png",alt:""}})]),s._v(" "),t("p",[s._v("（2）wrap：换行，第一行在上方。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg",alt:""}})]),s._v(" "),t("p",[s._v("（3）wrap-reverse：换行，第一行在下方。")]),s._v(" "),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg",alt:""}})]),s._v(" "),t("h5",{attrs:{id:"flex-flow"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow"}},[s._v("#")]),s._v(" flex-flow")]),s._v(" "),t("p",[s._v("flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-flow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <flex-direction> || <flex-wrap>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h5",{attrs:{id:"justify-content属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#justify-content属性"}},[s._v("#")]),s._v(" justify-content属性")]),s._v(" "),t("p",[s._v("justify-content属性定义了项目在主轴上的对齐方式。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("justify-content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png",alt:""}})]),s._v(" "),t("p",[s._v("它可能取5个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("flex-start（默认值）：左对齐\nflex-end：右对齐\ncenter： 居中\nspace-between：两端对齐，项目之间的间隔都相等。\nspace-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h5",{attrs:{id:"align-items属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#align-items属性"}},[s._v("#")]),s._v(" align-items属性")]),s._v(" "),t("p",[s._v("align-items属性定义项目在交叉轴上如何对齐。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-items")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | baseline | stretch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png",alt:""}})]),s._v(" "),t("p",[s._v("它可能取5个值。具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("flex-start：交叉轴的起点对齐。\nflex-end：交叉轴的终点对齐。\ncenter：交叉轴的中点对齐。\n"),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("baseline")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 项目的第一行文字的基线对齐。\nstretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h5",{attrs:{id:"align-content属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#align-content属性"}},[s._v("#")]),s._v(" align-content属性")]),s._v(" "),t("p",[s._v("align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".box")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-content")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" flex-start | flex-end | center | space-between | space-around | stretch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png",alt:""}})]),s._v(" "),t("p",[s._v("该属性可能取6个值。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("flex-start：与交叉轴的起点对齐。\nflex-end：与交叉轴的终点对齐。\ncenter：与交叉轴的中点对齐。\nspace-between：与交叉轴两端对齐，轴线之间的间隔平均分布。\nspace-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。\nstretch（默认值）：轴线占满整个交叉轴。\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h4",{attrs:{id:"四、项目的属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四、项目的属性"}},[s._v("#")]),s._v(" 四、项目的属性")]),s._v(" "),t("p",[s._v("以下6个属性设置在项目上。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[s._v("order\nflex-grow\nflex-shrink\nflex-basis\nflex\nalign-self\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h5",{attrs:{id:"order属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#order属性"}},[s._v("#")]),s._v(" order属性")]),s._v(" "),t("p",[s._v("order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("order")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <integer>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png",alt:""}})]),s._v(" "),t("h5",{attrs:{id:"flex-grow属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow属性"}},[s._v("#")]),s._v(" flex-grow属性")]),s._v(" "),t("p",[s._v("flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-grow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 0 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png",alt:""}})]),s._v(" "),t("p",[s._v("如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。")]),s._v(" "),t("h5",{attrs:{id:"flex-shrink属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink属性"}},[s._v("#")]),s._v(" flex-shrink属性")]),s._v(" "),t("p",[s._v("flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-shrink")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <number>"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default 1 */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg",alt:""}})]),s._v(" "),t("p",[s._v("如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。")]),s._v(" "),t("p",[s._v("负值对该属性无效。")]),s._v(" "),t("h5",{attrs:{id:"flex-basis属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis属性"}},[s._v("#")]),s._v(" flex-basis属性")]),s._v(" "),t("p",[s._v("flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex-basis")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" <length> | auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("/* default auto */")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。")]),s._v(" "),t("h5",{attrs:{id:"flex属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flex属性"}},[s._v("#")]),s._v(" flex属性")]),s._v(" "),t("p",[s._v("flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("flex")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" none | [ <"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-grow'")]),s._v("> <"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-shrink'")]),s._v(">? || <"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'flex-basis'")]),s._v("> ]\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。")]),s._v(" "),t("p",[s._v("建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。")]),s._v(" "),t("h5",{attrs:{id:"align-self属性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#align-self属性"}},[s._v("#")]),s._v(" align-self属性")]),s._v(" "),t("p",[s._v("align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".item")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("align-self")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" auto | flex-start | flex-end | center | baseline | stretch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png",alt:""}})]),s._v(" "),t("p",[s._v("该属性可能取6个值，除了auto，其他都与align-items属性完全一致。")]),s._v(" "),t("p",[s._v("转自 "),t("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("阮一峰：Flex 布局教程：语法篇"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);