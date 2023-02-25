// Example 1
// Wap to print 1 to 10 numbers using for loop.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Example 2
// Wap to print 10 to 1 numbers using for loop.

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Example 3

for (let i = 1, j = 0; i <= 10 && j <= 10; i++, j++) 
{
    console.log(i, j);
}

// Example 4

for (let i = 1, j = 0; i <= 10 || j <= 10; i++, j++)
{
    console.log(i, j);
}

// Example 5

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// Example 6

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Example 7
//Program to add first n natural numbers

let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(sum);


