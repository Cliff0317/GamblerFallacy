function rand(max) {
    return Math.floor(Math.random() * Math.floor(max))
}

window.onload = function() {
    document.getElementById("output").innerHTML += "<p style='background-color: cyan; width: 100px; font-size: 35%;'>嘿，你猜啥？😜</p>"
}

let round = 1;
let check = false;
let guess = 1;
let defaultScore = 5;
let score = defaultScore;
var output = document.getElementById("output")
let stat = false;

function hide() {
    output.style.display = "none";
    stat = false;
}
function show() {
    output.style.display = "block";
    stat = true;
}

function toggle() {
    if (stat == false) {
        show()
    } else {
        hide()
    }
    window.scrollTo(0,document.body.scrollHeight);
}

function see() {
    var res = "<p style='background-color: #c9c2c1; width: 260px; position: absolute; right: 0; font-size: 35%;'>我猜測" + (guess ? ("股價將上漲") : ("股價將下跌")) + "。</p><br><p style='background-color: cyan; width: 260px; font-size: 35%;'>" + (check ? ("正確！😊你超棒！") : ("錯了...😒真可惜啊！")) + "</p>"
    output.innerHTML += res
    if (stat == false) {
        document.getElementById("instructions").textContent = " <- 請立即單擊此按鈕以查看您的歷史記錄。"
    }
    if (round > 10) {
        if (score == 0) {
            document.getElementById("output").innerHTML += "<p style='background-color: cyan; width: 100px; font-size: 35%;'>Jake 已解除好友</p>"
            document.getElementById("score").textContent = "您投資了" + round + "輪。但是，我們將解僱您，並找到一個更聰明的老闆...祝您好運！"
            document.getElementById("restart").href = "index.htm";
            swal("遊戲結束", "遊戲結束。請將" + round + "輪報告給教授，當作分數。");
            return
        }
        if (check) {
            score += 1
            document.getElementById("score").textContent = "公司本年收入：NT$" + score + "，您工作了" + round + "天。"
            round += 1
        } else {
            score -= 1
            document.getElementById("score").textContent = "公司本年收入：NT$" + score + "，您工作了" + round + "天。"
            round += 1
        }
    } else {
        if (round == 10) {
            score = defaultScore;
            round += 1
            return
        }
        if (check) {
            score += 1
            document.getElementById("score").textContent = "模擬公司本年收入：NT$" + score + "，您投資了" + round + "輪。"
            round += 1
        } else {
            score -= 1
            document.getElementById("score").textContent = "模擬公司本年收入：NT$" + score + "，您投資了" + round + "輪。"
            round += 1
        }
    }
}
function rise() {
    guess = 1;
    let ans = rand(2);
    if (ans == 1) {
        check = true;
    } else if (ans == 0) {
        check = false;
    }
    see()
}
function fall() {
    guess = 0;
    let ans = rand(2);
    if (ans == 0) {
        check = true;
    } else if (ans == 1) {
        check = false;
    }
    see()
}