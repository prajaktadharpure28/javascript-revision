// Array Methods

// Array Methods are functions that are built into JavaScript and can be used on arrays.

// The most common array methods are:

// 1. toString() - Converts an array to a string of (comma separated) array values.

// Example

let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// Example

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num.toString());

// 2. join() - Joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator.

// Example

let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.join(" * "));

// Example

let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(num1.join(" - "));
console.log(num1.join(""));

// 3. pop() - Removes the last element from an array.

// Example

let fruits2 = ["Banana", "Orange", "Apple", "Mango"];
let a = fruits2.pop()
console.log(fruits2, a);

// Example

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = num2.pop()
console.log(num2, b);

// 4. push() - Adds a new element to an array (at the end).

// Example

let fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let c = fruits3.push("Kiwi")
console.log(fruits3);
console.log(c);

// Example

let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let d = num3.push(11)
console.log(num3);
console.log(d);

// 5. shift() - Removes the first array element and "shifts" all other elements to a lower index.

// Example

let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let e = fruits4.shift()
console.log(fruits4);
console.log(e);

// Example

let num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let f = num4.shift()
console.log(num4);
console.log(f);

// 6. unshift() - Adds a new element to an array (at the beginning), and "unshifts" older elements.

// Example

let fruits5 = ["Banana", "Orange", "Apple", "Mango"];
let g = fruits5.unshift("Lemon")
console.log(fruits5);
console.log(g);

// Example

let num5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let h = num5.unshift(0)
console.log(num5);
console.log(h);

// 7. delete() - Array elements can be deleted by using the JavaScript operator delete.

// Example

let fruits6 = ["Banana", "Orange", "Apple", "Mango"];
delete fruits6[0];
console.log(fruits6);

// Example

let num6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
delete num6[0];
console.log(num6);



