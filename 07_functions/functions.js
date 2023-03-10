// Functions

// A function is a block of code designed to perform a particular task.

// A function is executed when "something" invokes it (calls it).

// Example 1

function onePlusAvg(x,y){
    return 1 + (x + y) / 2
}

let a = 1;
let b = 2;
let c = 3;

console.log(onePlusAvg(a,b));
console.log(onePlusAvg(a,c));
console.log(onePlusAvg(b,c));

// Example 2

// wap to print the numbers from 1 to 10 using a function.

function printNumbers(){
    let i = 1;
    while (i <= 10){
        console.log(i);
        i++;
    }
}

printNumbers();

// Example 3

// wap to print the numbers from 10 to 1 using a function.

function printNumbers(){
    let i = 10;
    while (i >= 1){
        console.log(i);
        i--;
    }
}   

printNumbers(); 

// Example 4

// wap to print sum of two numbers using arrow functions.

const sum = (p,q)=>{
    return p + q;
}

console.log(sum(1,9));

// Example 5

const hello = ()=>{
    console.log("Hello World");
    return "Hi"
}

// console.log(hello());
// hello();

let v = hello();
console.log(v);