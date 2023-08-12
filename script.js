var timer = 15;
var score = 0;
var hitRand;

function increaseScore(){
    score = score+10;
    document.getElementById("scoreValue").textContent = score;
}

function getNewHit(){
    hitRand = Math.floor(Math.random()*30);
    document.getElementById("hitValue").textContent = hitRand;
}

function runTimer(){
    var time = setInterval(() => {
        if(timer>0){
            timer--
            document.getElementById("timerValue").textContent = timer;
        }
        else{
            clearInterval(time);
            document.getElementById("pbottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);

}

function makeBubble(){
var clutter = "";
for(var i = 1;i<=160;i++){
    var random = Math.floor(Math.random()*160);
    clutter += `<div class="bubble">
    ${random}</div>`
}
document.querySelector("#pbottom").innerHTML = clutter;
}

document.getElementById("pbottom").addEventListener("click",function(details){
        var clickedNum = Number(details.target.textContent);
        if (clickedNum === hitRand){
            increaseScore();
            makeBubble();
            getNewHit();
        }

    });





runTimer();
makeBubble();
getNewHit();







