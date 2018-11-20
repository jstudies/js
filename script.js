let num=10;
//testOne(4);
//testOne("New");

//let a = testTwo(num);
//console.log(a);

let b= "Hello";
//testThree(b);
console.log(testFour(5));
console.log(testFour(5,8));

console.log(test5(5));
console.log(test5(5,8));

function test5(x,y){
//    y=(typeof y !=='undefined')?y:10;
    y=y ||20;
    return x*y;
}


function testFour(x,y){
    console.log(x);
    console.log(y);
    return x*y;
}


function testThree(str){
    let b= "New";
//    console.log(b+" World");
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
//    console.log(val);
    let hello=val+" Hello World"
    num++;
//    console.log(hello+" "+num);
return hello;
}

