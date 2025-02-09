let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGamebtn = document.querySelector("#newGamebtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;  // playeO and playerX
const winPatterns = [   // by this 2D array pattern we will decide the winner .
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click" , () =>{
        // console.log("box was clicked!");
        if(turnO === true){   // if the turn of player O . then innerText = O .
            box.innerText = "O";
            turnO = false;

        }
        else{        // if the turn of player X . then innerText = X .
            box.innerText ="X";
            turnO = true;
        }
        box.disabled = true ;

        checkWinner();
    });
});


const disableBoxes = ()=> {      // This funtion is used to disable the boxes one of the player is win the game .
    for(let box of boxes){
        box.disabled = true ;
    }
}

const enableBoxes = ()=> {      // This funtion is used to endable the boxes to restart the game .
    for(let box of boxes){
        box.disabled = false  ;
        box.innerText ="";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide"); 
    disableBoxes();       // calling disable function
}


const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){  
            if(pos1 === pos2 && pos2 === pos3){
                // console.log("winner" , pos1);
                showWinner(pos1);    // here calling showWinner function .
            }
        }
    }
}


newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click" , resetGame);