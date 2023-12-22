let x = new Set();

console.log(x);
x.add(1);
x.add(2);
x.add(3);
x.add(4);
console.log(x);
//forEach is used for itearating through the set or array etc.
x.forEach((i)=>{
    console.log(i);
});


x.delete(4);
console.log(x);

//Map
// ***data type used for accesing the ele using keys
let mapEle = new Map();
console.log(mapEle);
// here key and value matters.....
mapEle.set(1,"Hello");
mapEle.set(2,"Hai");
mapEle.set(3,"Hi");
console.log(mapEle.get(3));
mapEle.set(4,"coding ninjas");
console.log(mapEle);

//delete
mapEle.delete(4);
console.log(mapEle);
//all deleting
// mapEle.clear();
console.log(mapEle);
console.log(mapEle);
mapEle.forEach((a,b)=>{
    console.log(a,b);
});
mapEle.forEach((a)=>{
    console.log(a);
});









