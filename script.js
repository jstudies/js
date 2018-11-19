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





/*let lastone=myArray.pop();
console.log(lastone);  */

/*
let myObj={first:"Dmitry",last:"Melnikov"};
var shopping=['bread','milk','cheese']

myObj.first="John";

console.log(myObj);

let myChair={color:"blue",wheels:4,material:"crap",age:"old"
            }

myObj['second']="second";
let holder=1;
myObj['a'+holder]="a123";
console.log(myObj);
*/
