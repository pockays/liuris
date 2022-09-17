export default  function debounce(fn ,delay){
    var timer=null  //定义一个timer 为null
    return function(){
        //如果timer 存在就把它清除掉
        if(timer){
            clearTimeout(timer)
        }
        //如果这个timer 不存在就去执行这个函数
        timer=setTimeout(fn,delay)
    }
   }
   