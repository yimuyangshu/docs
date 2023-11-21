## nextTick
在触发的changeValue时`不会立即获取修改后`的dom的text数据，但是可以通过`nextTick`函数将获取操作`推迟到下一次事件循环中执行`，也就是`推迟到vue完成dom更新后再执行`获取dom信息获取操作
::: code-group
```javascript [vue2]
methods:{
    changeValue()
    {
      this.message = 'hello';
      console.log(this.$el.textContent) // ''
      this.$nextTick(function(){
        console.log(this.$el.textContent) // hello
      })
    }
  }
```
```js [vue3]
<button type="button" ref="myElement" @click="changeValue">count is {{ count }}</button>

import { ref,nextTick } from 'vue'

const count = ref(0)
const myElement = ref(null);

const changeValue = (e) =>
{
  count.value = 1;
  console.log(myElement.value.textContent)  // count is 0

  nextTick(() =>{
    console.log(myElement.value.textContent) // count is 1
  })
}
```
:::

## props 父传子
::: code-group
```javascript [vue2]
// 父组件
<child :msg="msgValue"></child>
data(){
    return {
        msgValue:"message content"
    }
}

// 子组件
<div>{{ message }}</div>
exports default {
    props:['msgValue']
}
```

```javascript [vue3]
// 父组件
<child msg="message content"></child>

// 子组件
<p>{{msg}}</p>
defineProps({
  msg: String,
})

```
:::


## emit 子传父
::: code-group
```javascript [vue2]{14}
// 父组件
<child-component @custom-event="handleCustomEvent"></child-component>

methods: {
    handleCustomEvent(data) {
        console.log('父节点接收到的数据:', data);
    },
},

// 子组件
<button @click="emitCustomEvent">Click me</button>
methods: {
    emitCustomEvent() {
        this.$emit('custom-event', 'Data from child');
    },
},
```

```javascript [vue3]{2,11,13}
// 父组件
<child @custom-event="getChildValue" />
const getChildValue = (e) => {
  console.log('父组件接收到的内容:',e)
}


// 子组件
<button type="button" @click="clickFun">按钮</button>

const emit = defineEmits(['custom-event'])
const clickFun = () => {
    emit('custom-event','传过去的数据')
}
```
:::

