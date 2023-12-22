// //object is a standalone entity,with properties and type

// let pen = {
//     type:'ballpoint',
//     color:'black',
//     cost:10
// };

// //obj accessing->> obj.propertyname or obj['propertyname']

// console.log(pen.cost); 

// let emily = {
//     age:16,
//     school:"DPS",
//     class:"10th standard",
//     subjects:['physics','chemistry','biology','maths']
// };

// console.log(emily.subjects[2]);




let person = {
    a:10,
    b:"tiger"
}
person.age = 21;
console.log(person.age);
console.log(person.a);
console.log(person.b);

let qwerty = {
    a:['1','2','3','tiger','lion'],
    b:"loremIpsum"
}
console.log(qwerty.a[0]);
console.log(qwerty.a[1]);
console.log(qwerty.a[2]);
console.log(qwerty.a[3]);
console.log(qwerty.a[4]);

let fun = {
    x:()=>{return 100},
}
console.log(fun.x());



//VVVVVV imp {...objectName } for copying everything from an object teather then copy and pasting
let funCopying = { ...fun };


console.log(fun);
console.log(fun.x());

//another way of duplicating an object is :
let duplicate = Object.assign({},person);
console.log(duplicate);






















