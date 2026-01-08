let boxes=document.querySelectorAll('.box');
let resetBtn = document.querySelector(".reset");
let newGameBtn = document.querySelector(".newgame");

let turnX=true;
const winnerPatterns=[
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
      checkWinner();
});    
});
const checkWinner = () => {
  for (let pattern of winnerPatterns) {

    let val1 = boxes[pattern[0]].innerText;
    let val2 = boxes[pattern[1]].innerText;
    let val3 = boxes[pattern[2]].innerText;

    if (val1 !== "" && val1 === val2 && val2 === val3) {
      alert("Winner is " + val1);
    }

  }
};
const resetGame = () => {
    turnX = true;

    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
};


resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
