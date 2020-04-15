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

【其他语言中】在其他语言比较 C++ 中，传统的 array 是定长的、数据类型一致的存储结构，比如 
```c++
//表示长度为 3 ，数据类型为 int 的 array。
std::array<int, 3> a = {1,2,3};
```


【js】中，`JSArray` 继承自 `JSObject`
```c++
class JSArray : public JSObject{
    // 此为 C++ 中 public 式继承的写法
}
```

## Array 如何分类
开门见山，array 的数组大致上可分为 2 类，快数组和慢数组。快数组是一段固定长度的连续的内存，与传统 array 类似（FixedArray），而慢数组是哈希表（HashTable）

- 快数组（Fast Elements）
  - 快数组长度可变，分 2 种情况：
    - 扩容 
    - 收缩 `判断条件 old_capacity >= length * 2 + 16`
- 慢数组（Dictionary Elements）



## 优劣
>快数组就是以空间换时间的方式，申请了大块连续内存，提高效率。 慢数组以时间换空间，不必申请连续的空间，节省了内存，但需要付出效率变差的代价。  
>-----引用自[链接](https://juejin.im/post/5d80919b51882538036fc87d#heading-9)