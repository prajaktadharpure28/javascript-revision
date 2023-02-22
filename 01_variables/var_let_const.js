// var is globally scoped 
// var can be updated & re-declared within its scope
// var is function scoped

var a = 22;
// var b = "Praju";
// var c = true;
// var d = null;
// var e = undefined;
{
    var a = "Praju";
    console.log(a);
}

console.log(a);

// let

// let is block scoped
// let can be updated but not re-declared
// let is not hoisted

let b = "Yogesh";
let c = null;
let d = undefined;
let e = true;
{
    let b = "Prajakta";
    console.log(b);
}

console.log(b);

// const

// const is block scoped
// const can neither be updated nor re-declared
// const is not hoisted

const f = "Prajuu";
// f = "Praju"; 
// throws an error because constant cannot be changed
console.log(f);

// const is used to declare variables whose values are not going to change

