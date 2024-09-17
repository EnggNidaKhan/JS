/*
- Promises are special JS Object
- The proper comm between procedure & consumer also called as consummer.
- procedure will generate the promises.
- consumer will consume the promises.
- procedure will create the promises using "promise" class
- consumer consumes in two ways
- 1) then()
- 2) async & await
*/

// let promise1=new Promise((resolve, reject) => {
//     resolve("Tomorrow we will discuss DOM")
// });

// promise1.then((posres)=>{
//     console.log(posres)
// },
//   (eroorres)=>{
//         console.log(eroorres);
//   })

// let promise1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("we will discuss sql")
//     }, 5000);
// })

// promise1.then((posres)=>{
//      console.log(posres)
// }, (errorres)=>{
//     console.log(errorres)
// })

// let promise1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Hello I am Nida")
//     },500);
// })

// let promise2=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("I am from Maharashtra")
//     },1000);
// })

// let promise3=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("i am  java developer")
//     },1200);
// })

// promise1.then((posres)=>{
//     console.log(posres)
// }, (errorres)=>{
//     console.log(errorres)
// })

// promise2.then((posres)=>{
//     console.log(posres)
// }, (errorres)=>{
//     console.log(errorres)
// })

// promise3.then((posres)=>{
//     console.log(posres)
// }, (errorres)=>{
//     console.log(errorres)
// })

//Promise.all(): It is used to consume all promises at a time
// Promise.all([promise1,promise2,promise3]).then((posres)=>{
//     console.log(posres)
// }, (errorres)=>{
//     console.log(errorres)
// })                           //[ 'Hello I am Nida', 'I am from Maharashtra', 'i am  java developer' ]

//promise.race(): It is used to find which promise will execute first.

// Promise.race([promise1,promise2,promise3]).then((posres)=>{
//     console.log(posres)
// }, (errorres)=>{
//     console.log(errorres)
// })                                  //Hello I am Nida - it will execute first
                                    //[ 'Hello I am Nida', 'I am from Maharashtra', 'i am  java developer' ]


let promise1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("I am nida")
      },300);
})

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error")
    }, 500);
})

// Promise.all([promise1,promise2]).then((posres)=>{
//     console.log(posres)
// }, (errorres)=>{
//     console.log(errorres)
// })          
                              //error

//Promise.allSettled(): It will give all the resolve promise & also give reject promise

Promise.allSettled([promise1,promise2]).then((posres)=>{
    console.log(posres)
}, (errorres)=>{
    console.log(errorres)
})                                              //[  { status: 'fulfilled', value: 'I am nida' },
                                                 //  { status: 'rejected', reason: 'error' } ]



