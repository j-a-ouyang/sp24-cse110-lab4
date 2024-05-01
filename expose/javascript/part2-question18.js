function print(){
    let d =  new Date();
        var time = d.toLocaleTimeString();
        console.log(time);
    }
    setInterval(print, 1000);