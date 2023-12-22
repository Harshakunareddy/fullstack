const r = new XMLHttpRequest();
r.open("GET","");
r.send();

r.addEventListener("load",()=>{
    console.log(r.responseText);
    const data = JSON.parse(r.responseText);
    console.log(data);
});