let square = [];
for (let i = 1; i < 10; i++) square[i] = document.getElementById('canvas'+i);

let ctx = []
for (let i = 1; i < 10; i++) ctx[i] = square[i].getContext("2d");

let squareDisabled = [];
for (let i = 1; i < 10; i++) squareDisabled[i] = false;

let result = false;
let content = [];

function loop (x) {

  if(!squareDisabled[x]){

    squareDisabled[x] = true;
    content[x] = 'X';

    setTimeout(function drawX(){
      ctx[x].lineWidth = 5;
      ctx[x].strokeStyle = 'white';
      ctx[x].beginPath();
      ctx[x].moveTo(15, 15);
      ctx[x].lineTo(145, 145);
      ctx[x].moveTo(145, 15);
      ctx[x].lineTo(15, 145)
      ctx[x].stroke();
      ctx[x].closePath();

      turnCom();
    }, 150);
  }
  setTimeout(theWinnerIs, 500);
}

function turnCom () {
  let r = Math.random();

  if ((content [2] == 'X' && content[3] == 'X' && !squareDisabled[1])||
      (content [5] == 'X' && content[9] == 'X' && !squareDisabled[1])||
      (content [4] == 'X' && content[7] == 'X' && !squareDisabled[1])){
        drawO(1);
      }
  else if ((content [1] == 'X' && content[3] == 'X' && !squareDisabled[2])||
           (content [5] == 'X' && content[8] == 'X' && !squareDisabled[2])){
             drawO(2);
           }
  else if ((content [1] == 'X' && content[2] == 'X' && !squareDisabled[3])||
           (content [5] == 'X' && content[7] == 'X' && !squareDisabled[3])||
           (content [6] == 'X' && content[9] == 'X' && !squareDisabled[3])){
             drawO(3);
           }
  else if ((content [1] == 'X' && content[7] == 'X' && !squareDisabled[4])||
           (content [5] == 'X' && content[6] == 'X' && !squareDisabled[4])){
             drawO(4);
           }
  else if ((content [1] == 'X' && content[9] == 'X' && !squareDisabled[5])||
           (content [3] == 'X' && content[7] == 'X' && !squareDisabled[5])||
           (content [4] == 'X' && content[6] == 'X' && !squareDisabled[5])||
           (content [2] == 'X' && content[8] == 'X' && !squareDisabled[5])){
             drawO(5);
           }
  else if ((content [4] == 'X' && content[5] == 'X' && !squareDisabled[6])||
           (content [3] == 'X' && content[9] == 'X' && !squareDisabled[6])){
             drawO(6);
           }
  else if ((content [1] == 'X' && content[4] == 'X' && !squareDisabled[7])||
           (content [3] == 'X' && content[5] == 'X' && !squareDisabled[7])||
           (content [8] == 'X' && content[9] == 'X' && !squareDisabled[7])){
             drawO(7);
           }
  else if ((content [2] == 'X' && content[4] == 'X' && !squareDisabled[8])||
           (content [7] == 'X' && content[9] == 'X' && !squareDisabled[8])){
             drawO(8);
           }
  else if ((content [1] == 'X' && content[5] == 'X' && !squareDisabled[9])||
           (content [3] == 'X' && content[6] == 'X' && !squareDisabled[9])||
           (content [7] == 'X' && content[8] == 'X' && !squareDisabled[9])){
             drawO(9);
           }
  else if (r < 0.1 && !squareDisabled[1]) drawO(1);
  else if (r < 0.2 && !squareDisabled[2]) drawO(2);
  else if (r < 0.3 && !squareDisabled[3]) drawO(3);
  else if (r < 0.4 && !squareDisabled[4]) drawO(4);
  else if (r < 0.5 && !squareDisabled[5]) drawO(5);
  else if (r < 0.6 && !squareDisabled[6]) drawO(6);
  else if (r < 0.7 && !squareDisabled[7]) drawO(7);
  else if (r < 0.8 && !squareDisabled[8]) drawO(8);
  else if (r < 0.1 && !squareDisabled[9]) drawO(9);
  else turnCom();

}
function drawO (x) {

  squareDisabled[x] = true;
  content[x]  = 'O';

  setTimeout(function draw () {
    ctx[x].beginPath();
    ctx[x].lineWidth = 5;
    ctx[x].strokeStyle = 'white';
    ctx[x].arc(77, 77, 70, 0, Math.PI*2, false);
    ctx[x].stroke();
    ctx[x].closePath();
  }, 300);

}
function theWinnerIs () {
  if (!result) {
    //If yoy win the game
    if ((content[1] == 'X' && content[2] == 'X' && content[3] =='X') ||
        (content[1] == 'X' && content[4] == 'X' && content[7] =='X') ||
        (content[1] == 'X' && content[5] == 'X' && content[9] =='X') ||
        (content[2] == 'X' && content[5] == 'X' && content[8] =='X') ||
        (content[3] == 'X' && content[6] == 'X' && content[9] =='X') ||
        (content[4] == 'X' && content[5] == 'X' && content[6] =='X') ||
        (content[7] == 'X' && content[8] == 'X' && content[9] =='X') ||
        (content[3] == 'X' && content[5] == 'X' && content[7] =='X')){
          winner();
        }
    //If you lose de game
    else if  ((content[1] == 'O' && content[2] == 'O' && content[3] =='O') ||
              (content[1] == 'O' && content[4] == 'O' && content[7] =='O') ||
              (content[1] == 'O' && content[5] == 'O' && content[9] =='O') ||
              (content[2] == 'O' && content[5] == 'O' && content[8] =='O') ||
              (content[3] == 'O' && content[6] == 'O' && content[9] =='O') ||
              (content[4] == 'O' && content[5] == 'O' && content[6] =='O') ||
              (content[7] == 'O' && content[8] == 'O' && content[9] =='O') ||
              (content[3] == 'O' && content[5] == 'O' && content[7] =='O')){
                loser();
              }
    //If the game is draw
    else if  ((content[1] == 'X' ||content[1] == 'O') &&
              (content[2] == 'X' ||content[2] == 'O') &&
              (content[3] == 'X' ||content[3] == 'O') &&
              (content[4] == 'X' ||content[4] == 'O') &&
              (content[5] == 'X' ||content[5] == 'O') &&
              (content[6] == 'X' ||content[6] == 'O') &&
              (content[7] == 'X' ||content[7] == 'O') &&
              (content[8] == 'X' ||content[8] == 'O') &&
              (content[9] == 'X' ||content[9] == 'O')){
                drawGame();
              }
  }
}
function winner (win) {
  win = result;
  result = true;
  if (win == result){
    return swal({
      title: 'YOU WIN!',
      type: 'SUCCESS',
    })
  }
  swal({
    title:'<a style="color:#ff6347; font-size:40px">YOU WIN!</a>',
    text: '<b><a href="./index.html" style="text-decoration:none; color:#009688; font-size:30px">AGAIN?</a></b>',
    html: true,
    showConfirmButton: false,
    closeOnConfirm: true
  })
}
function loser (lose) {
  lose = result;
  result = true;
  if (lose == result){
    return swal({
      title: 'YOU LOSE!',
      type: 'error',
    })
  }
  swal({
    title:'<a style="color:#ff6347; font-size:40px">YOU LOSE!</a>',
    text: '<b><a href="./index.html" style="text-decoration:none; color:#009688; font-size:30px">AGAIN</a></b>',
    html: true,
    showConfirmButton: false,
    closeOnConfirm: false
  })
}
function drawGame (draw) {
  draw = result;
  result = true;
  if (draw == result){
    return swal({
      title: 'DRAW!',
      type: 'warning',
    })
  }
  swal({
    title:'<a style="color:#ff6347; font-size:40px">DRAW!</a>',
    text: '<b><a href="./index.html" style="text-decoration:none; color:#009688; font-size:30px">AGAIN</a></b>',
    html: true,
    showConfirmButton: false,
    closeOnConfirm: true
  })
}
