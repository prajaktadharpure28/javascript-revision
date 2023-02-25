// for in loops

// for in loops are used to iterate over the properties of an object

// for in loops are not used to iterate over arrays

// for in loops are used to iterate over objects

// Example 1

// wap to print name, age and city using for in loop.

let person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person) {
    console.log(key, person[key]);
}

// Example 2

// wap to print the properties of an object using for in loop.

let person1 = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person1) {
    console.log(key);
}

// Example 3

// wap to print the values of an object using for in loop.

let person2 = {
    name: "John",
    age: 30,
    city: "New York"
};

for (let key in person2) {
    console.log(person2[key]);
}