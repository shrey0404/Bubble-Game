var timer = 60;
var score = 0;
var newvalue;
function setscore() {
    score += 10;
    document.querySelector("#updtscore").textContent = score;
}
 
function builtbubble() {
    var clutter = "";

    for (var i = 1; i <= 112; i++) {
        var value = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${value}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;

}

function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
        }
    }, 1000);
}

function getsethit() {
    newvalue = Math.floor(Math.random()*10);
    document.querySelector("#sethit").textContent = newvalue;
}

document.querySelector("#pbtm")
.addEventListener("click",function(details){
    var newscore = Number(details.target.textContent);
    if(newvalue === newscore){
       setscore(); 
       getsethit();
       runtimer();
       builtbubble();
    }
    else {
        getsethit();
        runtimer();
        setscore();
    }
})


getsethit()
runtimer()
builtbubble()