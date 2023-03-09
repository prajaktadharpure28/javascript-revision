// Practice Set

// 1. Write a program to print the marks of a student in an object using for loop

let marks = {
    harry: 90,
    shubham: 45,
    rohan: 34,
    rahul: 80
}
for(let i=0;i<Object.keys(marks).length;i++){
    console.log("Marks of "+Object.keys(marks)[i]+" are "+Object.values(marks)[i])
}


// 2. Write a program to print the marks of a student in an object using for in loop

for(let i in marks){
    console.log("Marks of "+i+" are "+marks[i])
}

// 3. Write a program to print the marks of a student in an object using for of loop

for(let i of Object.keys(marks)){
    console.log("Marks of "+i+" are "+marks[i])
}