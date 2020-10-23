x() //2

y() //not hoist due to two parse

log(1)  //1

function x (){
    log(2);
} // not log

log(3) //3

(function y (){
    log(4);
})() //4

setTimeout(log(5), 0)

log(6) //6

ajax(log(7), 0)

log(8) //8

promise(log(9), 0)

log(10) //10

let a = {key:value}

let b = a

b.name = moien
console.log(a) //{key:value,name:moien}
console.log(b) //{key:value,name:moien}