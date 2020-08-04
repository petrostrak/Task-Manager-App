// Async return a Promise fullfilled with what the function returns
// Async - Await is a syntactical improvement to Promise chaining
// With Async - Await we have all values under one scope
const add = (a, b) => {
    return new Promise((resolve, reject) => {
        if(a < 0 || b < 0){
            return reject('Numbers must be non-negative')
        }
        setTimeout(() => {
            resolve(a + b)
        }, 2000)
    })
}

// add(1, 1).then((sum) => {
//     console.log(sum);
//     return add(sum, 4)
// }).then((sum2) => {
//     console.log(sum2);
// }).catch((e) =>{
//     console.log(e);
// })

const doWork = async () => {
    const sum = await add(1, 99)
    const sum2 = await add(sum, 50)
    const sum3 = await add(sum2, -3)
    return sum3
}

doWork().then((result) => { // the result is whatever value the doWork returns
    console.log('Result :', result);
}).catch((e) => {
    console.log('Error', e);
})