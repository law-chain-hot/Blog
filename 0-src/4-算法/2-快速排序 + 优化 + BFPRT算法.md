# 快速排序 + 优化 + BFPRT算法

# 2020.03.28更新
- 看了 **BFPRT 算法原理**：
  - 将时间复杂度降低到：**O(n * log n) ---> O(n)**
  - 它是由Blum、Floyd、Pratt、Rivest、Tarjan提出。
  - 该算法的思想是修改快速选择算法的主元选取方法，提高算法在最坏情况下的时间复杂度。

1. Select the pivot(approximate median)
   1.1 Divide the numbers into n/5 groups, with 5 numbers in each group
   1.2 Find the median of each group
   1.3 For the medians in step 1.2, call the BFPRT algorithm to find the median of medians, as the pivot

2. Split the numbers with the pivot in step 2, put the elements larger than pivot on the left side, and those smaller on the right side

3. According to the rank of pivot and k, choose the left part or right part to continue finding the Kth largest element.

## 步骤
- 对此时的arr，随机选择一个数，小于这个数的放左边，大于的右边 `如何选择这个数，可以优化`
- 递归，直到此时的arr长度为1
- 时间复杂度 **`n * log n`**

## 优化
- 选取 middle
  1. 固定位置
  2. 随机选择
  3. 中间值
- 其他方法
  1. 当待排序序列的长度分割到一定大小后，使用`插入排序`。`因为插入排序在arr长度小时，效果好`
  2. 在一次分割结束后，可以把与Key相等的元素聚在一起，继续下次分割时，不用再对与key相等元素分割
  3. 优化递归操作 `尾递归`



## 快速排序
```js
let quickSort = (arr) => {
    // step1: if arr.length is bigger than 1
    let length = arr.length;

    // base case
    if (length < 2)
        return arr;


    // step2:get the middle value
    let middle = length >> 1; // Math.floor(length / 2)
    let middleValue = arr.splice(middle - 1, 1)[0]
    let left = []
    let right = []
    for (let item of arr) {
        if (item < middleValue) {
            left.push(item)
        } else {
            right.push(item)
        }
    }

    // recursive part 
    let arrSorted = quickSort(left).concat(middleValue, quickSort(right));

    return arrSorted
}

// test part
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log("快速排序（Quick Sort)")
console.log(quickSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

```

## 附赠：插入排序
```js
// 3. Insertion Sort
function insertionSort(array) {
    if (Array.isArray(array)) {
        console.time('插入排序耗时：');
        for (var i = 1; i < array.length; i++) {
            var key = array[i];
            var j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        console.timeEnd('插入排序耗时：');
        return array;
    } else {
        return 'array is not an Array!';
    }
}
var arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48];
console.log(insertionSort(arr));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
```