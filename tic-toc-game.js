let boxes=document.querySelectorAll("box");
let reset=document.querySelector('reset');
let turn0=true;

const winnerpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3.4,5],
    [6,7,8],
    [1,4,5],
    [2,5,8],
    [2,4,6],
];
function checkwinner(){
    for(let patterns of winners){
         let pos1=boxes[pattern[0]].innertext;
         let pos2=boxes[pattern[1]].innertext;
         let pos3=boxes[pattern[2]].innertext;
         if(pos1!="",pos2!="",pos3!=""){
             if (pos1===pos2 && pos2===pos3){
             console.log("winner");
         }
         }
      
    }
   
}
boxes.forEach((box) => {
    console.log("box was clicked");
    if (turn0){
        box.innertext="O";
        turn0==false;
    }
    else{
        box.innertext="X";
        turn0==true;
        checkwinner();
    }
});
  
