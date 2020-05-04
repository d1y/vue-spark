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

Vue.directive('click', Click())

```

你也可以传入一些在`Click()`中传入参数

```js
import Click from 'vue-spark'
const options = {
  opacity: .5, // 透明度. 最小0.1, 最大1
  style: {
    backgroundColor: 'green'
  } // 自定义的样式
}
export default Click(options)
```

如果你需要修改样式的话, 需要在 `vm.$nextTick` 回调中使用`setStyle`方法

```js
import { setStyle } from 'vue-spark'

{
  created() {
    this.$nextTick(()=> {
      setStyle({
        backgroundColor: 'blue',
        width: `120px`,
        height: `120px`
      })
    })
  }
}
```

在你需要的元素添加自定义指令即可

```vue
<template>
  <div id="app" v-click>
    <router-view/>
  </div>
</template>
```