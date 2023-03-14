//  Arrays

// Arrays are variables which can hold more than one values.
// Arrays are created using square brackets.
// Arrays are zero-indexed, meaning the first element is at index 0.
// Arrays can be accessed using bracket notation.

// Example 1
// Create an array of strings

let names = ['John', 'Mark', 'Jane'];
console.log(names);

// Example 2
// Create an array of numbers

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// Example 3
// Create an array of mixed data types

let mixed = ['John', 1, 'Jane', 2, 'Mark', 3];
console.log(mixed);

// Example 4

// Write a program to create an array to print marks of class 12 students.
// The marks of 12 students are given below:

// 78, 89, 90, 67, null, false, Not Present

// Create an array to store the marks of 12 students.

let marks = [78, 89, 90, 67, null, false, "Not Present"];
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
console.log(marks[7]); // will be undefined because index 7 does not exist.

// Find the length of an array

console.log("The length of marks of class 12 students is",marks.length);

