// https://api.coinore.net/api/tickers/

// const res = fetch("https://api.coinlore.net/api/tickers/");

// console.log(res);

// const res = fetch("https://api.coinlore.net/api/tickers/")//promise
//     .then((r)=>{
//         console.log(r);
//         return r.json();//promise
//     }).then((r)=>{
//         console.log(r);
//     });

// console.log(res);


// destructuring for getting particularly one data
// const res = fetch("https://api.coinlore.net/api/tickers/")//promise
//     .then((r)=>{

//         return r.json();//promise

//     }).then((r)=>{

//         const { data } = r;

//         console.log(data);
//         return data[50];

//     }).then((r)=>{
//         console.log(r);
//     });

// console.log(res);



//error while fetching data due to any kind of error
const res = fetch("https://api.coinlore.net/api/tickers/dfg")//promise
    .then((r)=>{

        return r.json();//promise

    }).then((r)=>{

        const { data } = r;

        console.log(data);
        return data[50];

    }).then((r)=>{
        console.log(r);
    
    
    }).catch((err)=>{
        console.log(err);
        console.error(err);
        console.log("please refresh");
    
    
    }).finally(()=>{//even though we have successfull fetch we get this finally block.
        console.log("wee are here,no matter what happens");
    });

console.log(res);










