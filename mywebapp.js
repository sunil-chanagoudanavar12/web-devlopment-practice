let btn=document.getElementById("onclick");
let userinput=document.querySelector(".con-input input");
let outputbox=document.querySelector(".dyna-msg");

btn.addEventListener("click",function(){
    let usertext=userinput.value.trim();
    if(usertext==""){
       outputbox.innerText="please enter your name...!";
       outputbox.style.color="red";

    }else{
        outputbox.innerText=`hello ${usertext}, welcome to our website...!`;
        outputbox.style.color="green";
    }
   
});