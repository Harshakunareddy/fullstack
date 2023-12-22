// // // console.log(document);
// // // console.log(document.head);
// // // console.log(document.body);
// // const body = document.querySelector("body");
// // const head = document.querySelector("head");
// // const button = document.querySelector("button");
// // console.log(body);
// // console.log(body.childNodes);
// // console.log(head);
// // console.log(body.children);
// // console.log(body.children[0].children);
// // console.log(body.children[1].children);
// // //selecting the divs
// // const div = document.querySelector("div");
// // console.log(div);
// // const div2 = document.querySelectorAll("div");
// // console.log(div2);
// // console.log(button);

// // //classes 
// // // const a = document.getElementsByClassName("a");
// // // const a1 = document.getElementById("a");
// // // console.log(a);
// // // console.log(a1);

// // //alternative method for the id and classnames
// // const a = document.querySelector(".a");
// // const b = document.querySelector(".b");
// // const c = document.querySelector(".c");
// // console.log(a);
// // console.log(b);
// // console.log(c);

// // //manipulating process

// // console.log(b.textContent);

// // b.textContent = "hey";

// // console.log(b.textContent);


// // //adding tags of html

// // b.innerHTML = "<h1>welcome</h1>";
// // console.log(b.textContent);

// // b.innerHTML = "<h1><div>Hey</div>welcome</h1>";

// // //adding new elements into our document man!!!!!!!!

// // const h1 = document.createElement("h1");
// // const h2 = document.createElement("h2");
// // console.log(h1);
// // h1.textContent = "hey this is a heading mannn";
// // h2.textContent = "hey this is a heading  h2 mannn";
// // // b.append(h1); //from bottom
// // b.prepend(h1,h2);//from top



// // //b.appendChild property
// // b.appendChild(h1,h2); // only one element at a time can appnd not more than one element mannnnN!

// // let h3;
// // b.appendChild(h1).textContent = "this is a h3 element";


// // //insertAdjacentHTML ........
// // b.insertAdjacentHTML("afterbegin","<h1>//Tiger-afterbegin</h1>");
// // b.insertAdjacentHTML("afterend","<h1>//Tiger-afterend</h1>");
// // b.insertAdjacentHTML("beforebegin","<h1>//Tiger-beforebegin</h1>");
// // b.insertAdjacentHTML("beforeend","<h1>//Tiger-beforeend</h1>");

// const buttonforB = document.querySelector(".tar-b");
// const buttonforC = document.querySelector(".tar-c");

// console.log(buttonforB);
// console.log(buttonforC);

// function clickHandler(){
//     console.log("clicked");
// }//no need to call the function..
// // buttonforB.addEventListener('click',clickHandler);
// // buttonforB.addEventListener('scroll',clickHandler);

// document.addEventListener("keydown",clickHandler);

// // function btnDownHandler(e){
// //     console.log(e);
// //     console.log("button id down");
// // }

// // document.addEventListener("keydown",btnDownHandler);



// function clickHandler2(e){
//     console.log(e.target);
    
// }

// function btnDownHandler2(e){
//     console.log(e.target);
// }
// document.addEventListener("click",clickHandler2);
// document.addEventListener("keydown",btnDownHandler2);

console.log(a.attributes);


// after the - symbol any letter we need to write in camelCase
// a.style.backgroundColor = "Black";
console.log(a.classList);
// a.classList.remove("bg-red");
// a.clasList.add("bg-blue");

console.log(a.classList.contains("bg-blue"));//true or false
a.classList.toggle("bg-red");//removed 
a.classList.toggle("bg-red");//added
a.classList.toggle("bg-red");//removed 
a.classList.toggle("bg-red");//added






























