let boxes=document.querySelectorAll('.box');
let turnX=true;
const winnerpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
      console.log("bocx clicked");
      if(turnX){
        box.innerText="X"
        turnX=false;
      }
      else{
        box.innerText="O";
        turnX=true;
      }
      box.disabled = true;
});    
});

