let num=10;
testOne(4);
testOne("New");

let a = testTwo(num);
console.log(a);

let b= "Hello";
testThree(b);

function testThree(str){
    let b= "New";
    console.log(b+" World");
}

function testTwo(arg){
    return arg  * arg;
}




/*

let num=0;

testOne(4);
testOne("New");
let ret=testOne('WOW');
console.log(ret);
*/

function testOne(val){
    console.log(val);
    let hello=val+" Hello World"
    num++;
    console.log(hello+" "+num);
return hello;
}

