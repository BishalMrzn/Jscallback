let a= new Promise((resolve,reject)=>{
    console.log("Promise computing")
    setTimeout(() => {
        alert("This is a timeout")
        // resolve(true)
        reject(new Error(""))
    }, 2000);
})
a.then((value)=>{
    console.log(56)
})
.catch((error)=>{
    console.log("error",error.message)
})
