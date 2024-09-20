console.log("Welcome to tic tac toe game")
let turn = "X";
let isgameover = false;

// to change turn
const changeTurn = () =>{
    return turn === "X"?"0":"X"
}

// to check win
const checkwin =()=>{
    boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
             document.querySelector('.info2').innerText = boxtext[e[0]].innerText + "won"
            isgameover = true;
        }
    })

}

//logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',(e) =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info2")[0].innerText = "Turn for" + turn;
            }
           
        }
    })
})

// listener to reset button
reset.addEventListener('click',() =>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    
    document.getElementsByClassName("info2")[0].innerText = "Turn for" + turn;
})