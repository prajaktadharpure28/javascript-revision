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

// 8. concat() - cocat used to join arrays to the given array

// Example

let fruits7 = ["Banana", "Orange", "Apple", "Mango"];
let fruits8 = ["Banana", "Orange", "Apple", "Mango"];
let fruits9 = fruits7.concat(fruits8);
console.log(fruits9);

// Example

let num7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num8 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let num9 = num7.concat(num8);
console.log(num9);

// 9. sort() - The sort() method sorts arrays alphabetically.

// Example

let fruits10 = ["Banana", "Orange", "Apple", "Mango"];
let fruits11 = fruits10.sort();
console.log(fruits11);

// Example

let arr = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];
let arr1 = arr.sort();
console.log(arr1);

// Example

let num10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num11 = num10.sort();
console.log(num11);

// compare function

// Example

let points = [40, 100, 1, 5, 25, 10];
let compare = (a,b)=>{
    return a - b;
}
let points1 = points.sort(compare);
console.log(points1);

// Example  

let points2 = [40, 100, 1, 5, 25, 10];
let compare1 = (a,b)=>{
    return b - a;
}
let points3 = points2.sort(compare1);
console.log(points3);

// 10. reverse() - The reverse() method reverses the elements in an array.

// Example

let fruits12 = ["Banana", "Orange", "Apple", "Mango"];
let fruits13 = fruits12.reverse();
console.log(fruits13);

// Example

let num12 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num13 = num12.reverse();
console.log(num13);

// 11. splice() - The splice() method can be used to add new items to an array.

// Example

let fruits14 = ["Banana", "Orange", "Apple", "Mango"];
let fruits15 = fruits14.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits14);

// Example

let num14 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let num15 = num14.splice(4, 0, 11, 12);
console.log(num14);