let second = 0;
let heightWidth= 40;
let caller = null;
let rightStop = null;
let leftStop = null;
let downStop = null;
let upStop = null;
let rightPos = 0;
let leftPos = 460;
let downPos = 0;
let upPos = 460;
let topPoint=0;
let rightPoint=0;

    // right move
function moveRight() {
    if (second===0) {
        startGame();
    }
    const element = document.getElementById("animate");   
    clearInterval(rightStop);
    clearInterval(leftStop);
    clearInterval(downStop);
    clearInterval(upStop);
    rightStop = setInterval(frame, 5);
    function frame() {
      if (rightPos === 460 || leftPos === 0) {
        clearInterval(rightStop);
      } else {
        leftPos--
        rightPos++; 
        element.style.left = rightPos + "px";
        element.style.right = leftPos + "px";
      }
    }
  }
    // left move
function moveLeft() {
    if (second===0) {
        startGame();
    }
    const element = document.getElementById("animate");   
    clearInterval(rightStop);
    clearInterval(leftStop);
    clearInterval(downStop);
    clearInterval(upStop);
    leftStop = setInterval(frame, 5);
    function frame() {
      if (rightPos === 0 || leftPos === 460) {
        clearInterval(leftStop);
      } else {
        leftPos++
        rightPos--; 
        element.style.left = rightPos + "px";
        element.style.right = leftPos + "px";
      }
    }
  }
    // down move
function moveDown() {
    if (second===0) {
        startGame();
    }
    const element = document.getElementById("animate");   
    clearInterval(rightStop);
    clearInterval(leftStop);
    clearInterval(downStop);
    clearInterval(upStop);
    downStop = setInterval(frame, 5);
    function frame() {
      if (downPos === 460 || upPos === 0) {
        clearInterval(downStop);
        console.log('stopped')
      } else {
        downPos++
        upPos--; 
        element.style.top = downPos + "px";
        element.style.bottom = upPos + "px";
      }
    }
  }
    //up move
function moveUp() {
    if (second===0) {
        startGame();
    }
    const element = document.getElementById("animate");   
    clearInterval(rightStop);
    clearInterval(leftStop);
    clearInterval(downStop);
    clearInterval(upStop);
    upStop = setInterval(frame, 5);
    function frame() {
      if (downPos === 0 || upPos === 460) {
        clearInterval(upStop);
      } else {
        downPos--
        upPos++; 
        element.style.top = downPos + "px";
        element.style.bottom = upPos + "px";
      }
    }
  }
    // random point generator
function pointGenerator(){
    topPoint = parseInt(Math.random()*460 +1);
    rightPoint = parseInt(Math.random()*460 +1);
    const element = document.getElementById("point");
    element.style.top =  topPoint + "px";
    element.style.left = rightPoint + "px";
}
// call the pointGenerator

pointGenerator();

function startGame(){
        caller =setInterval(function(){
        const time = document.getElementById('timer');
        second += 1 ;
        time.innerHTML = second;
        if (downPos-topPoint<=40 && downPos-topPoint>=-40 && rightPos-rightPoint<=40 && rightPos-rightPoint>=-40) {
            pointGenerator();
            const element = document.getElementById("animate");
            heightWidth += 2;
            element.style.width = heightWidth + "px"
            element.style.height = heightWidth + "px"
            element.style.borderRadius = heightWidth / 2  + "px"
        }
    },500);
}

function stopGame(){
    second = 0;
    clearInterval(caller);
}