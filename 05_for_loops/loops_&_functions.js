// Types of for loops
// 1. for loop
// 2. for in loop
// 3. for of loop
// 4. for each loop

// for loop

// for (initialization; condition; increment/decrement) {   
//     // code block to be executed
// }

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// for in loop

// for (variable in object) {
//     // code block to be executed
// }

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key);
}

// for of loop

// for (variable of object) {
//     // code block to be executed
// }

let colors = ["red", "green", "blue"];

for (let color of colors) {
    console.log(color);
}
