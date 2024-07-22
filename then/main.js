let promise=new Promise(function(resolve,reject){
    console.log("Promise is being fulfilled")
    setTimeout(() =>{
        alert("this is something")
        resolve(true)
        // reject(new Error("I am error"))
    },3000)
})
let promise2=new Promise(function(resolve,reject){
    console.log("Promise is being fulfilled")
    setTimeout(() =>{
        alert("this is something")
        // resolve(true)
        reject(new Error("I am error"))
    },3000)
})
promise.then((value)=>{
    console.log("This is then")
})
promise2.catch((error)=>{
    console.log("This is error")
})
console.log(promise)