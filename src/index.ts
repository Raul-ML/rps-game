let counter =0
const interval = setInterval(()=>{
    counter ++;
    console.log("hola", counter);
    if (counter>3){
        clearInterval(interval)
    }
    
},1000);