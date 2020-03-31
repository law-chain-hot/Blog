
// console.time('xx')
// console.time('yy')



// setTimeout(() => {
//     console.timeEnd('yy')

// }, 1000)

// setTimeout(() => {
// console.timeEnd('xx')

//     console.time('out')
//     setTimeout(() => {
//         console.timeEnd()
//         console.log('test')
//     }, 1000)
//     setTimeout(() => {
//         console.log('test')
//     }, 1000)
//     setTimeout(() => {
//         console.log('test')
//     }, 1000)
//     console.log('out')

// }, 500)

// let p = new Promise((resolve) => {resolve('promise')}).then((data)=>console.log(data))




setTimeout(() => {
    let p = new Promise((resolve) => {
        console.log('p1');
        resolve('promise1')
    }).then((data) => console.log(data))


    process.nextTick(function () {
        console.log('nextTick1');
    })

}, 0)


setTimeout(() => {
    let p = new Promise((resolve) => {
        console.log('p2');
        resolve('promise2')
    }).then((data) => console.log(data))


    process.nextTick(function () {
        console.log('nextTick2');
    })
}, 0)




