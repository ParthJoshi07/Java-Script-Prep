console.log("Operators");

// Airthmatic Operstors :-

let a = 9;
let b = 2;

// basic operators
console.log("a = ", a , "  b = ", b);
console.log(" a+b = ", a+b);
console.log(" a-b = ", a-b);
console.log(" a*b = ", a*b);
console.log(" a/b = ", a/b);
console.log(" a%b = ", a%b);
console.log(" a**b = ", a**b);

// unary operator
a++;
console.log(" a++ ", a);

b--;
console.log(" b-- ",b);


//Assignment Operators

a -= 2;
console.log(" a = ", a);

b +=  4;
console.log(" b = ", b);


//Comparsion Operator 


c = (a == b );  // False

d = (a!=b);  //True

e = (a>=b); //True


// Logical Operators



let cond1 = d;
let cond2 = e ;
let cond3 = c

f = (cond1 && cond2);   // True
g = (cond3 && cond2);   // False
g = (cond3 || cond2);  // true

h = !g;  // false

// Conditional statement


let age = 34;

if (age >= 18){
    console.log("you can vote");
}
else{
    console.log("you can't vote");
}


let r = age>18?"adult":"not adult";

