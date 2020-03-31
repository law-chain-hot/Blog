function getHCF(a, b) {
    // Step1: if b is bigger than a, swap them, always make a > b
    if (b > a) {
        [a, b] = [b, a]
    }

    // Step2: Euclidean algorithm 辗转相除法
    while (b) {
        [a, b] = [b, a % b]
    }

    // Step3: return the HCF or GCD
    return a
}

console.log(getHCF(20, 11))





//请写出输出内容
async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}

console.log('script start');

setTimeout(function () {
    console.log('setTimeout');
}, 0)

async1();

new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});
console.log('script end');



