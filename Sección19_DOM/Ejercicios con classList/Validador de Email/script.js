const email=document.getElementById("email");
const boton=document.getElementById("boton");

boton.addEventListener("click",()=>{
    if(email.value===""){
        email.classList.add("error");
        
    }

});