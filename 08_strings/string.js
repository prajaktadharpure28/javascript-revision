// String

// String are used to store and manipulate text. 
// A string is a series of characters like "John Doe".

// String are created with double or single quotes:
var carName1 = "Volvo XC60"; // Using double quotes
var carName2 = 'Volvo XC60'; // Using single quotes

// You can use the length property to return the length of a string:
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length);

// The indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string:

let str = "Please locate where 'locate' occurs!"
let pos = str.indexOf("locate");
console.log(pos);

// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:

let str1 = "Please locate where 'locate' occurs!"
let pos1 = str1.lastIndexOf("locate");
console.log(pos1);

// Template Literals

// Template literals use backtics instead of quotes to define a string.
// Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}).
// The expressions in the placeholders and the text between the backticks (` `) get passed to a function.
// The default function just joins the parts into a single string.

// Example

// The following example uses a template literal to create a string from two variables:

let firstName = "John";
let lastName = "Doe";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);

// Escape Sequence Characters

// An escape sequence is a combination of characters that represents a single character.
// The backslash (\) is used to escape characters that otherwise have a special meaning, like newline or backslash itself.
// The backslash is also used to escape other backslashes.

// Example

// The following example uses an escape sequence to insert a double quote inside a string:

let txt1 = "Hello \"Everyone!\" How are you?";
console.log(txt1);

