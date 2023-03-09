// 1. Write a program to print "try again" until the user enters the correct number

let num = 5;
let guess = 0;

while (guess != num) {
    guess = prompt("Enter a number")
}
console.log("You have entered a correct number")
