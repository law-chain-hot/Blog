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