let numberClicks = 0;
let winner = 0;

let  x0board = [" ", " ", " ",
                " ", " ", " ",
                " ", " ", " ",];
let gameBoard0; 



function newBoard() {
    
  let newX0board = document.createElement('div');

  newX0board.classList.add("gameBoard");
  
  return newX0board;
   
}

function newSquare(squareNumber){
  let winner = 0;
  
  const cell = document.createElement('div');
  
  cell.classList.add("square");

  for(let i = 0; i < 9; ++i){
    x0board[i] = 1000;
  }

  cell.addEventListener('click', event =>{
    const {target} = event;
    ++numberClicks;
    if(numberClicks <= 9){
      if(numberClicks % 2 === 0){
        target.innerText = '0';
        x0board[squareNumber] = 0;
      }else{
        target.innerText = 'X';
        x0board[squareNumber] = 1;
        
      }
    }
    for (let i = 0; i < 9; i+=3){
      if((x0board[i] + x0board[i + 1] + x0board[i + 2]) === 0) {
        theWinner(0);
        winner = 1;
      }
      if((x0board[i] + x0board[i + 1] + x0board[i + 2]) === 3){
        theWinner(3);
        winner = 1;
      }
    }
    for(let i = 0; i < 3; ++i){
      if((x0board[i + 0] + x0board[i + 3] + x0board[i + 6]) === 0) {
        theWinner(0);
        winner = 1;
      } 
      if((x0board[i + 0] + x0board[i + 3] + x0board[i + 6]) === 3){
        theWinner(3);
        winner = 1;
      }
    }  
    
    if((x0board[0] + x0board[4] + x0board[8]) === 0){
      theWinner(0);
      winner = 1;
    }
    if((x0board[0] + x0board[4] + x0board[8]) === 3){
      theWinner(3);
      winner = 1;
    }
    if((x0board[2] + x0board[4] + x0board[6]) === 0){
      theWinner(0);
      winner = 1;
    }
    if((x0board[2] + x0board[4] + x0board[6]) === 3){
      theWinner(3);
      winner = 1;
    }
     if(numberClicks === 9 && winner === 0){
      theWinner(100);
     }
    
  })
  return cell;
}  

function newGame() {
  
  gameBoard0 = newBoard();
  numberClicks = 0;
  
  for (let i = 0; i < 9; ++i) { 
    gameBoard0.appendChild(newSquare(i));
  }
  
  document.body.appendChild(gameBoard0);
  document.getElementById("x0board").innerHTML = "X SI ZERO";
}

function theWinner(sum){
  
  if(sum === 3){
    document.getElementById("x0board").innerHTML = "X wins"
  } 
  if(sum === 0){
    document.getElementById("x0board").innerHTML = "0 wins"
  } 
  if(sum === 100){
    document.getElementById("x0board").innerHTML = "it's a TIE"
  }
}

function clearPage(){

  document.body.removeChild(gameBoard0);
  numberClicks = 0;
  winner = 0;  
  document.getElementById("x0board").innerHTML = "X SI ZERO";
}
 
