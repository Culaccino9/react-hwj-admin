export function debounce (fn, delay) {
    let timerId = null 		//防抖
    return function () {
        let self = this;		//this指向事件本身
        let args = arguments;		//传递事件参数event
        timerId && clearTimeout(timerId);
        timerId = setTimeout(function () {
            fn.apply(self, args)		//执行函数，this指向本身，可以有event
        }, delay || 500)
    }
}


export function debounce_j(fn,delay) {
    let timerId = null 		//防抖
    let flag = true //节流标杆
    return function(){
        if(!flag)return; 	//节流判断
        flag = false;	//节流标杆
        let self = this;		//this指向事件本身
        let args = arguments;		//传递事件参数event
        timerId && clearTimeout(timerId);
        timerId = setTimeout(function(){
            flag = true //节流标杆
            fn.apply(self,args)		//执行函数，this指向本身，可以有event
        },delay||500)
    }
}