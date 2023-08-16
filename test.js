function debounce(fun,delay){
    let timer
    return function(){
        clearTimeout(timer)
        let args=arguments
        timer=setTimeout(() => {
           fun.apply(this,args)
        }, delay);
    }
}
function jieliu(fun,time){
    let start=0
    return function(){
        let end=new Date()
        let args=arguments
        if(end-start>time){
            fun.apply(this,args)
            start=end
        }
    }
}
let biu = function () {
    console.log('biu biu biu')
}

let boom = function () {
    console.log('boom boom boom')
}

// setInterval(debounce(biu,0),1000)
setInterval(debounce(boom,500),200)