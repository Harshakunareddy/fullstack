
function timer(x){
    setTimeout(()=>{
        console.log("Timeout");
    },1000 * x);
}


async function getData(){
    console.log("1");
    const res = await fetch("");
    const data = await res.json();
    console.log("2");
    await timer(3);
    console.log(res);
    console.log(data);
    console.log("3");
}

getData();