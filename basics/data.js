console.log("data types in JS");

// not typing consol.log because we are worling on a browser!

// Primitive Datatypes (total 7)
let x = 99.2;
let y = 0.8;

let z  = y+x;   // number

let name = "Parth";   // string

let u ;  // undefined


let istrue = true;  // boolean

let a = null;   // object (null)

let b = BigInt("999999999");  // bigint

let c  = Symbol("Dont move");   // symbol



/* non primitive data types :-

Objects - collection of values.
eg - arrays , lists etc.

*/


const student = {
    fullname : "Parth Joshi",
    age : 19,
    cgpa : 7.9,
    isPass : true,
}

student.fullname = "Virat Kholi";  // changing name of the variable