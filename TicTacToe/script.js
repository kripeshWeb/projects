const boxes = document.getElementsByClassName("boxes");
const reset = document.getElementById("reset")
const input = document.getElementById("input")
isGameOver = false;
turns = 0


// console.log(boxes.length);
// It convert classes to array
// console.log(Array.from(boxes))
function checkWin(){
    let txtBox = document.getElementsByClassName("txtBox")
    let wins = [
                [0,1,2],
                [0,3,6],
                [6,7,8],
                [2,5,8],
                [3,4,5],
                [1,4,7],
                [0,4,8],
                [2,4,6]
            ]
        wins.forEach((elem) =>{
            if((txtBox[elem[0]].innerHTML === txtBox[elem[1]].innerHTML) && (txtBox[elem[2]].innerHTML === txtBox[elem[1]].innerHTML) && (txtBox[elem[0]].innerHTML !== "")){
                isGameOver = true;

            }
            
        })

}

Array.from(boxes).forEach(e =>{
    function res(){
        e.childNodes[0].innerHTML = "";
        turns = 0;
        isGameOver = false;
        input.value = "";
    }
    reset.addEventListener('click',res)
    // console.log(e.childNodes[0].innerHTML);
    
    e.addEventListener('click',()=>{
        // console.log(e.childNodes[0].innerHTML);
        
        if(e.childNodes[0].innerHTML != "O" && e.childNodes[0].innerHTML != "X" && !isGameOver){
            if(turns<9){
                if(turns%2 == 0){
                    player = "O";
                    turn = "X"
                    
                }else{                    
                    player = "X";
                    turn = "O"
                }
                e.childNodes[0].innerHTML = player
                // console.log(e.childNodes[0]);
                
                checkWin();
                if(!isGameOver){
                    if(turns == 8){
                        input.value = ("Draw!");
                    }else{
                        input.value = ("Turns for " + turn);
                    }
                    
                }else{
                    input.value= (player + " won");
                }
                


            }        
            turns++
            
        }
    })
})


