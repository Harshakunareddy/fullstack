//Asynchronous

// console.log(" I ");

// console.log(" eat ");

// setTimeout(()=>{
//     console.log(" Ice cream ");

// },4000);

// console.log(" with a ");

// console.log(" spoon ");



//let funName = (arguments) => {}





//callBack functions
// function one(call_two){
//     call_two();

//     console.log("step-1 completed please call step-2");
// }

// function two(){
//     console.log("step-2");
// }

// one(two);



/*
let stocks = {
    Fruits : ["strawberries","grapes","banana","apple"],
    liquids : ["water","ice"],
    topplings : ["chocolates","peanuts"],
    holder : ["cone","cup","peanuts"]
}

// console.log(stocks.Fruits[2]);



let order = (Fruit_name,call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.Fruits[Fruit_name]} are selected`)
        call_production();

    },2000);
}


let production = ()=>{
    // console.log("started");
    setTimeout(()=>{
        console.log("production has started");


        setTimeout(()=>{
            console.log("food has been chopped");

            setTimeout(() => {
                console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} are added`);
            
                
                setTimeout(() => {
                    console.log("machine has been started");
                    
                    setTimeout(() => {
                        console.log(`${stocks.holder[0]} is choosen for placing ice cream`)
                        
                        setTimeout(() => {
                            console.log(`${stocks.topplings[0]} is choosen as a toppling`);
                        
                            setTimeout(() => {
                                console.log("serve icecream");
                            }, 2000);
                        
                        }, 3000);
                    
                    }, 2000);


                }, 1000);


            }, 1000);


            

        },2000)

    },0);
};

order(0,production);

*/



//promises

//make a relationship between work and time
//promises chaining
//error handling 
//.finally handler
//over

//promises
/*
let stocks = {
    Fruits : ["strawberries","grapes","banana","apple"],
    liquids : ["water","ice"],
    topplings : ["chocolates","peanuts"],
    holder : ["cone","cup","peanuts"]
};


let is_shop_open =  true;

let order = (time,work)=>{


    return new Promise((resolve,reject)=>{
        if(is_shop_open){
        //putting relationship btw time and work

            setTimeout(() => {
                resolve(work());
            }, time);
        }

        else{
            reject(console.log("no stocks are present so we closed the shop"));
        }
    });
};


//promise chaining


order( 2000,()=>console.log(`${stocks.Fruits[0]} are seleced`)
).then(()=>{
    return order(0,()=>console.log("production has started"));
    
}).then(()=>{
    return order(2000,()=>console.log("the fruit is chopped"));

}).then(()=>{
    return order(1000,()=>{
        console.log(`${stocks.liquids[0]} is taken as a liquid`);
    });

}).then(()=>{
    return order(1000,()=>console.log("starting the machine"));

}).then(()=>{
    return order(2000,()=>{
        console.log(`${stocks.holder[0]} ice cream is placed on the handler`)
    });

}).then(()=>{
    return order(3000,()=>{
        console.log(`${stocks.topplings[0]} is taken as a toppling`)
    });

}).then(()=>{
    return order(1000,()=>{
        console.log('ice cream is served');
    })
}).catch(()=>{
    console.log("customer left");
}).finally(()=>{
    console.log("day ended shop is closed");
})





*/



//Async and Await
//1->time(ms)
//2->if lopala setTime(resolve,ms)
//3->async function kitchen(){
    // try{
        // ...,,,,,await time(2000)
        // .....,,,,,console.log("hfxdxcv¿")
        //}
// }
//call the kitchen after caatch and finally





let stocks = {
    Fruits : ["strawberries","grapes","banana","apple"],
    liquids : ["water","ice"],
    topplings : ["chocolates","peanuts"],
    holder : ["cone","cup","peanuts"]
};


let is_shop_open =  false;


function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop is closed"));


        }
    })
}




async function kitchen(){
    try{

        await time(2000);
        console.log(`${stocks.Fruits[0]}`);
        await time(0);
        console.log("start the production");
        await time(2000);
        console.log("cut the fruit");

        await time(1000);
        console.log(`${stocks.liquids[0]} and ${stocks.liquids[1]} are added `);

        await time(1000);
        console.log("machine is started")

        await time(2000);
        console.log(`${stocks.holder[1]} is choosen`);

        await time(3000);
        console.log(`${stocks.topplings[1]} is choosen`)

        await time(2000);
        console.log("serve ice cream");


    }
    catch(error){
        console.log("customer left");
    }
    finally{
        console.log("day ended shop is closed");
    }
}
kitchen();


























// let topplings_choice = ()=>{
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {
//             resolve(console.log("what u want?"));            
//         }, 3000);
//     })
// }



// async function kitchen(){
//     console.log("A")
//     console.log("B")
//     console.log("C")


//     await topplings_choice();
//     console.log("D")
//     console.log("E")
// }

// kitchen()

// console.log("doing the dishes");
// console.log("cleaning the tables");
// console.log("taking others orders");



























// // let order = ()=>{
// //     return new Promise((resolve,reject)=>{
// //         if(true){
// //             resolve()
// //         }
// //         else{
// //             reject()
// //         }
// //     })
// // }


// // order().then()
// // .then()
// // .then()
// // .then()
// // .then()



// async function order2(){
//     try{

//         await abc;

//     }
//     catch(error){
//         console.log("abc deoesnot exist",error);
//     }

//     finally{
//         console.log("run code anyway");
//     }
// }




// order2().then(()=>{
//     console.log("qwert");
// })

















