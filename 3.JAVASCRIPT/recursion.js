// //i want to print numbers from 1 to 5
// function three(n){
//     if(n===0) return;
//     console.log(n);
// }

// function two(n){
//     if (n===0 ) return;
//     console.log(n);
//     three(n-1);

// }

// function one(n){
//     if (n===0) return;
//     console.log(n);
//     one(n-1);
// }
// one(3);

// let x = prompt();
// function abc(i,n){
//     if(i>n) return;
//     console.log(i);
//     abc(i+1,n);
// }
// abc(1,x);


function fibo(i,n,last,sLast){
    if (i>n) return;
    console.log(last + sLast);
    fibo(i+1,n,last+sLast,last);
}
fibo(1,5,1,1);