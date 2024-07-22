const loadscript=(src)=>{
    return new Promise((resolve,reject)=>{
        let script =document.createElement("script");
        script.src=src;
        document.body.appendChild(script)
        script.onload=()=>{
            resolve(1)
        }
        script.onerror=()=>{
                reject(0)
        }


    })
}
let p1=loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
p1.then((value)=>{
    console.log(value)
    return loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
}).then((value)=>{
    console.log("second load script")
}).catch((error)=>{
    console.log("Error")
})