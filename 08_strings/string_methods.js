// String Methods

// Length

// The length property returns the length of a string:

let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length);

// toUpperCase

// The toUpperCase() method converts a string to uppercase letters:

let txt1 = "Hello World!";
console.log(txt1.toUpperCase());

// toLowerCase

// The toLowerCase() method converts a string to lowercase letters:

let txt2 = "Hello World!";
console.log(txt2.toLowerCase());

// slice

// The slice() method extracts a part of a string and returns the extracted part in a new string.

// The method takes 2 parameters: the start position, and the end position (end not included).

// This example slices out a portion of a string from position 7 to position 13:

// Example

// Extract parts of a string:

let str = "Apple, Banana, Kiwi";
let res = str.slice(7, 13);
console.log(res);

// Example

let name = "harry";
console.log(name.slice(2,4))

// Example

console.log(name.slice(2))

// Example

console.log(name.slice(-2))

// The slice() method can take negative indexes.

// Negative indexes can also be used to specify the position, counting from the end of the string.

// This example slices out a portion of a string from position -12 to position -6:

// Example

let str1 = "Apple, Banana, Kiwi";
let res1 = str1.slice(-12, -6);
console.log(res1);

// Replace

// The replace() method replaces a specified value with another value in a string:

// Example

// Replace "Microsoft" with "W3Schools":

let txt3 = "Please visit Microsoft!";
let n = txt3.replace("Microsoft", "W3Schools");
console.log(n);

// Example

let txt4 = "Please visit Microsoft and Microsoft!";
let n1 = txt4.replace(/Microsoft/g, "W3Schools");
console.log(n1);

// The replace() method does not change the string it is called on. It returns a new string.

// To change the original string, you have to assign the new string to the original variable:

