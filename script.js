let myArray=["Hello","World",50,false];
console.log(myArray[0]+" "+myArray[1]);

myArray[myArray.length+1]="New Item";
myArray.push("At the end");
let firstone=myArray.shift();
console.log(firstone);

myArray.unshift("New one at the start");

myArray[5]="smth";
delete myArray[3];

let rep=myArray.splice(3,2,"One","Two")
console.log(rep);

let res=myArray.slice(3); /* new instance */
console.log(res);
let myStr= myArray.toString();
let myArray2=myStr.split(','); /* splits CSV */
let myArray3=myArray.join('-');
console.log(myStr);
console.log(myArray2);
console.log(myArray3);


