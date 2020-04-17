
![image](https://user-images.githubusercontent.com/57960778/79297404-a4ed3700-7ea3-11ea-84b0-96aed0ec6c4c.png)

# V8 中的 Array 底层实现以及优化

>不得不说，我有点飘了，居然也敢看 V8 的东西

其实没有，我只是梳理下 V8 中的 Array 是什么东西，今天看完了各个大佬的文章，做个整理，理下思路，以便来日再看。

## 背景
地球人都知道，js 的 array 里面什么都能装，number，string，object，甚至 function 都不在话下。

那么可以思考2个问题。

第一，那在 google v8 的底层 C++ 是如何实现的呢？  
第二，v8 的效率大家都说好，那 array 这个奇怪的东西，google大佬做什么优化呢？

虽然我抛出了 2 个很大的问题，但是我并不准备回答他（因为水平还不够），所以我会记录关键的信息，然后带着这 2 个问题去回看这个文章，那就能有收获了

## Array 在 js 中是什么
开门见山，`array` 在 js 中是 `object`

「其他语言中」在其他语言比较 C++ 中，传统的 array 是定长的、数据类型一致的存储结构，比如 
```c++
//表示长度为 3 ，数据类型为 int 的 array。
std::array<int, 3> a = {1,2,3};
```


「js」中，`JSArray` 继承自 `JSObject`
```c++
class JSArray : public JSObject{
    // 此为 C++ 中 public 式继承的写法
}
```

## Array 结构
开门见山，array 的数组大致上可分为 2 类，快数组和慢数组。快数组是一段固定长度的连续的内存，与传统 array 类似（FixedArray），而慢数组是哈希表（HashTable）

- 快数组（Fast Elements）
- 慢数组（Dictionary Elements）

快数组长度可变，分 2 种情况：扩容 和 收缩 `判断条件 old_capacity >= length * 2 + 16`

优劣比较
>快数组就是以空间换时间的方式，申请了大块连续内存，提高效率。 慢数组以时间换空间，不必申请连续的空间，节省了内存，但需要付出效率变差的代价。  
>-----引用自[链接](https://juejin.im/post/5d80919b51882538036fc87d#heading-9)

### Array 结构如何转换

都是由内部空洞的数量决定

【快 --> 慢】
- 新容量 >= 3 * 扩容后的容量 * 2 ，会转变为慢数组。
- 当加入的 index- 当前capacity >= kMaxGap（1024） 时（也就是至少有了 1024 个空洞），会转变为慢数组。

【慢 --> 快】
- 当慢数组的元素可存放在快数组中且长度在 smi 之间且仅节省了50%的空间,则会转变为快数组


具体情况就不列了，可参考[这里](https://juejin.im/post/5d80919b51882538036fc87d#heading-9)



## Array 元素类型
按照元素类型分有 3 种：
- SMI_ELEMENT：小整数，又称 Smi
- DOUBLE_ELEMENT：双精度浮点数或大整数，Double
- ELEMENT：常规元素，不能表示为 Smi 或 Double 的值

按照模式类型分有 2 种：
- holey arrays： 密集数组 dense
- packed arrays： 稀疏数组 sparse

啰嗦一句 HOLEY ARRAY 是在你没有给 array 的空位赋值时出现，下面是 V8 官网例子
```js
const array = [1, 2, 3, 4.56, 'x'];
// elements kind: PACKED_ELEMENTS
array.length; // 5
array[9] = 1; // array[5] until array[8] are now holes
// elements kind: HOLEY_ELEMENTS
```

他们的转换方式，从左上 --> 到右下，不能回头，要么向下转换，要么向右转换。
### 元素类型模式具体如何转换 「一图胜千言」
![image](https://user-images.githubusercontent.com/57960778/79297385-93a42a80-7ea3-11ea-9b47-740e3cee7abe.png)


## 参考材料
- [探究JS V8引擎下的“数组”底层实现](https://juejin.im/post/5d80919b51882538036fc87d)
- [从Chrome源码看JS Array的实现](https://zhuanlan.zhihu.com/p/26388217)
- [JavaScript 在 V8 中的元素种类及性能优化](https://zhuanlan.zhihu.com/p/29638866)
- [Elements kinds in V8](https://v8.dev/blog/elements-kinds)

最后说一句 v8.dev 的官方网站，这样的极简风格，非常喜欢，有种厚重感