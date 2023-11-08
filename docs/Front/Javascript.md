# 常用 JavaScript
## Object.assign()
原始对象source的嵌套对象受到影响，因为他们`共享相同的引用`
::: details 例子
```javascript
const source = {
    a: 1,
    b: {
        c: 2
    }
};

const target = Object.assign({}, source);
target.a = 3;
target.b.c = 4

console.log(source.a); // 输出 1，原始对象的属性没有受到影响
console.log(source.b.c); // 输出 4，因为嵌套对象引用相同，所以原始对象的属性也被修改
```
:::

## 深拷贝
嵌套对象之间不共享引用需要进行深拷贝
