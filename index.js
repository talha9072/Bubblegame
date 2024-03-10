var resultfromhit = gethitval();
var resultgethit = getnewhit();
var randomhit = 0;
var clikednum = 0;

var obj = {};

var input = prompt(`enter your name`);

function getname() {
    document.querySelector(".yourname").innerHTML = input;
}

getname();

function createbubble() {
    var bubbles = '';
    var bubblesLength = 88;

    for (var i = 1; i <= bubblesLength; i++) {
        var randomnum = Math.floor(Math.random() * 10);
        bubbles += `<div class="bubble">${randomnum}</div>`;
    }

    document.querySelector(".panelbottom").innerHTML = bubbles;
}

function timerstart() {
    var timer = 15;
    function updateTimer() {
        document.querySelector(".boxtimer").textContent = timer;
        timer--;
        if (timer < 0) {
            clearInterval(timerInterval);
            alert("time expired");
            alert(`your final score is = ${score}`);
        }
    }
    updateTimer(); // Initial display
    var timerInterval = setInterval(updateTimer, 1000);
}

function getnewhit() {
    randomhit = Math.floor(Math.random() * 5);
    document.querySelector(".hit").innerHTML = randomhit;
    return randomhit;
}

var score = 0;

function increasescore() {
    score += 10;
}

function givescore() {
    document.querySelector(".myscore").innerHTML = score;
    if (clikednum === randomhit) {
        increasescore();
        getnewhit(); // Reset randomhit after increasing the score
    }
}

function gethitval() {
    document.querySelector(".panelbottom").addEventListener('click', function (dets) {
        var detsval = dets.target.textContent;
        clikednum = Number(detsval);
        givescore();
        createbubble();
    });
}

gethitval();
createbubble();
timerstart();

console.log("script working");
