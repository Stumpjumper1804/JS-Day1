//Advanced Exercise 1
let a = 7;
let b = 14;
let c = "21";
let d = '36';
let e = 42;

//let sum = a + b + parseInt(c) + parseInt(d) + e;
let sum = a + b + Number(c) + Number(d) + e;
console.log("Sum: " + sum);
//document.write(sum);

let f = '1';
let g = 15;
let h = 8;
let i = "1";

let product = parseInt(f) * g * h * parseInt(i);
console.log("Produkt: " + product);
//document.write(product);


document.write(sum/product);

//Advanced exercise 2
let people = ["Greg", "Mary", "Devon", "James"];

// //remove Greg
// people.splice(0,1);
// console.log(people);

// //add Matt
// people.unshift("Matt");
// console.log(people);

// //remove James
// people.pop();
// console.log(people);

// //add my name
// people.push("Albert");
// console.log(people);

// //copy the last 2 elements
// let people2 = people.slice(2,4);
// console.log(people);
// console.log(people2);

// //where is Mary?
// console.log(people.indexOf("Mary"));

// //where is Foo?
// console.log(people.indexOf("Foo"));

//after resetting the array
people.splice(2,1);
console.log(people);

people.push("Elizabeth", "Anna");
console.log(people);

//Advanced exercise 3
let multiArray = [ 
    [1, 2, 1, 24], 
    [8, 11, 9, 4], 
    [7, 0, 7, 27], 
    [7, 4, 28, 14], 
    [3, 10, 25, 7], 
    [21, 4, 6, 17],
    [3, 5, 26, 3] 
];

let idx25 = multiArray [4] [2];
console.log(idx25);

let idx11 = multiArray [1] [1];
console.log(idx11);


//Challenge
let str = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its$HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$callback$functions$that$do$modify$valus.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up."

// let newStr = str.replaceAll("$", " ");
// console.log(newStr);

let newStr = str.split("$");
let str2 = newStr.join(" ");
console.log(str2);



