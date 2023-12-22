const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit",(e)=>{
    // e.preventDefault();

    let messages = [];
    if(name.value === "" || name.value ==null){
        messages.push("name is must");
    }
    if(password.value.length <= 6){
        messages.push("password must be greater than 6 letters");
    }
    if(password.value.length >= 20){
        messages.push("password must be less than than 20 letters");
    }
    if(messages.length > 0){
        e.preventDefault();
        errorElement.innerText = messages.join(",");
    }
    
})
