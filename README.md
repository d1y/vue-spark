# vue-spark

简单的点击效果

![update](https://i.loli.net/2020/05/03/q7vXomTzY2sECVU.gif)

```
npm install --save vue-spark
```

在 `main.js` 中引入, 并添加一个自定义指令

```js
import Click from 'vue-spark'
import Vue from 'vue'

Vue.directive('click', Click)

```

在你需要的元素添加自定义指令即可

```vue
<template>
  <div id="app" v-click>
    <router-view/>
  </div>
</template>
```

## FAQ

1. 样式太丑了, 我想自己写

```js
import { setStyle } from 'vue-spark'
// 自行添加样式..
setStyle({
  background: 'blue'
})
```

2. 我只想在当前元素上有效果

参考一下源码, 我写的这个是相对于`document.body`的,