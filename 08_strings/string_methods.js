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

// Concat

// The concat() method is used to join two or more strings:

// Example

// Join two strings:

let text1 = "Hello";

let text2 = "World";

let text3 = text1.concat(" ", text2);

console.log(text3);

// Trim

// The trim() method removes whitespace from both sides of a string:

// Example

// Remove whitespace from both sides of a string:

let str2 = "       Hello World!        ";

console.log(str2.trim());

// CharAt

// The charAt() method returns the character at a specified index (position) in a string:

// Example

// Return the character at index 0 (the first character):

let str3 = "HELLO WORLD";
console.log(str3.charAt(0));

// Example

// Return the character at index 1 (the second character):

let str4 = "HELLO WORLD";
console.log(str4.charAt(1));

// CharCodeAt

// The charCodeAt() method returns the unicode of the character at a specified index in a string:

// Example

// Return the unicode of the character at index 0 (the first character):

let str5 = "A";
console.log(str5.charCodeAt(0));

// Example

// Return the unicode of the character at index 1 (the second character):

let str6 = "AB";
console.log(str6.charCodeAt(1));

// Example

// Return the unicode of the character at index 2 (the third character):

let str7 = "ABC";
console.log(str7.charCodeAt(2));

// Example

// Return the unicode of the character at index 3 (the fourth character):

let str8 = "ABCD";
console.log(str8.charCodeAt(3));