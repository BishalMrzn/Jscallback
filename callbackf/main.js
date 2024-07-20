function calling(src,callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload=function(){
        console.log("Your script is"+src)
        callback()
    }
    script.onerror=function(){
      console.error("Yu are error")
      // alert(error.Message)
    }
    document.body.appendChild(script)
  }
  const hello=()=>{
    alert("Hello")
  }
  const goodmorning=()=>{
    alert("Goodmorning")
  }
  calling(
    "https://cdn.jsdselivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",goodmorning
  );