//function is a block of code that can be reusable for performing some tasks

// function funname(){
//     console.log("this is function");
// }
// funname();

// function product(a,b){
//     return a*b;
// }
// let x = product(10,20);
// console.log(x);

function funName(){
    console.log("this is a function bro");
}
funName();

function funName2(a,b){
    console.log(a+b);
}
funName2(2,3);

function funName3(a,b){
    return a+b;
}
let x = funName3(2,3);
let y = funName3(3,2);
console.log(x);
console.log(y);
console.log(x+y);

let funName4 = function(){
    console.log(20);
};
funName4();

let arrowFunction = (a,b) =>{
    return a+b;
};
console.log(arrowFunction(1,2));

let sum = (a,b) => a+b;//{ return are not written }
console.log(2,3);
console.log(2-3);
console.log(2+3);


