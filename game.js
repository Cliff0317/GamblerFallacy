function rand(max) {
    return Math.floor(Math.random() * Math.floor(max))
}
let round = 1;
let check = false;
let score = 1;
function see() {
    if (score == 0) {
        document.getElementById("result").textContent = "Jake：您已經失去了員工的信任！ 那我為什麼要相信你？"
        document.getElementById("score").textContent = "Jake：您投資了" + round + "輪。但是，我們將解僱您，並找到一個更聰明的老闆...祝您好運！Bye！"
        location.href = "https://cliff0317.github.io/GamblerFallacy/gameover.htm"
    }
    if (check) {
        document.getElementById("result").textContent = "Jake：對！您的話是對的！"
        score += 1
        document.getElementById("score").textContent = "員工信任度：" + score + "，您投資了" + round + "輪。"
        round += 1
    } else {
        document.getElementById("result").textContent = "Jake：不！您的話似乎不正確！下一次，請稍微調整一下猜測！"
        score -= 1
        document.getElementById("score").textContent = "員工信任度：" + score + "，您投資了" + round + "輪。"
        round += 1
    }
}
function rise() {
    let ans = rand(2);
    if (ans == 1) {
        check = true;
    } else if (ans == 0) {
        check = false;
    }
    see()
}
function fall() {
    let ans = rand(2);
    if (ans == 0) {
        check = true;
    } else if (ans == 1) {
        check = false;
    }
    see()
}