const canvas = document.getElementById("game-board");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const highScoreEl = document.getElementById("high-score");
const restartBtn = document.getElementById("restart-btn");
const colorPicker = document.getElementById("snake-color");
const eatSound = document.getElementById("eat-sound");
const gameOverSound = document.getElementById("gameover-sound");

const box = 20; // grid size
canvas.width = 400;
canvas.height = 400;

let score = 0;
let highScore = localStorage.getItem("highScore") || 0;
let snakeColor = localStorage.getItem("snakeColor") || "#00ff99";
let snake = [];
let food = {};
let direction = null;
let gameInterval = null;

colorPicker.value = snakeColor;

document.addEventListener("keydown", changeDirection);
restartBtn.addEventListener("click", startGame);
colorPicker.addEventListener("input", changeColor);

function changeColor(e){
  snakeColor = e.target.value;
  localStorage.setItem("snakeColor", snakeColor);
}

function startGame(){
  snake = [{ x: 200, y: 200 }];
  direction = null;
  score = 0;
  scoreEl.textContent = score;
  highScoreEl.textContent = highScore;
  food = randomFood();

  if(gameInterval) clearInterval(gameInterval);
  gameInterval = setInterval(draw, 120);
}

function draw(){
  ctx.fillStyle = "#111";
  ctx.fillRect(0,0,canvas.width,canvas.height);

  snake.forEach((segment,index)=>{
    ctx.fillStyle = index===0 ? snakeColor : lightenColor(snakeColor,0.2);
    ctx.fillRect(segment.x,segment.y,box,box);
    ctx.strokeStyle = "#111";
    ctx.strokeRect(segment.x,segment.y,box,box);
  });

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(food.x+box/2, food.y+box/2, box/2-2,0, Math.PI*2);
  ctx.fill();

  if(!direction) return;

  let head = {...snake[0]};
  if(direction==="LEFT") head.x -= box;
  if(direction==="RIGHT") head.x += box;
  if(direction==="UP") head.y -= box;
  if(direction==="DOWN") head.y += box;

  // Wrap-around
  if(head.x<0) head.x=canvas.width-box;
  else if(head.x>=canvas.width) head.x=0;
  if(head.y<0) head.y=canvas.height-box;
  else if(head.y>=canvas.height) head.y=0;

  // Self collision
  if(snake.some(seg=>seg.x===head.x && seg.y===head.y)){
    clearInterval(gameInterval);

    gameOverSound.currentTime = 0;
    gameOverSound.play();

    alert("💀 Game Over! Your score: "+score);
    updateHighScore();
    return;
  }

  // Eat food
  if(head.x===food.x && head.y===food.y){
    score++;
    scoreEl.textContent = score;
    food = randomFood();
    eatSound.currentTime=0;
    eatSound.play();

    if(score>highScore){
      highScore = score;
      localStorage.setItem("highScore", highScore);
      highScoreEl.textContent = highScore;
    }
  } else {
    snake.pop();
  }

  snake.unshift(head);
}

function changeDirection(e){
  const key = e.keyCode;
  if([37,38,39,40].includes(key)) e.preventDefault();
  if(key===37 && direction!=="RIGHT") direction="LEFT";
  if(key===38 && direction!=="DOWN") direction="UP";
  if(key===39 && direction!=="LEFT") direction="RIGHT";
  if(key===40 && direction!=="UP") direction="DOWN";
}

function randomFood(){
  let foodX = Math.floor(Math.random()* (canvas.width/box)) * box;
  let foodY = Math.floor(Math.random()* (canvas.height/box)) * box;

  if(snake.some(seg=>seg.x===foodX && seg.y===foodY)) return randomFood();
  return { x: foodX, y: foodY };
}

function updateHighScore(){
  if(score>highScore){
    highScore=score;
    localStorage.setItem("highScore",highScore);
  }
  highScoreEl.textContent = highScore;
}

function lightenColor(color,percent){
  let num=parseInt(color.replace("#",""),16),
      amt=Math.round(2.55*percent*100),
      R=(num>>16)+amt,
      G=((num>>8)&0x00ff)+amt,
      B=(num&0x0000ff)+amt;
  return "#"+(0x1000000+(R<255?R<1?0:R:255)*0x10000+(G<255?G<1?0:G:255)*0x100+(B<255?B<1?0:B:255)).toString(16).slice(1);
}

startGame();
