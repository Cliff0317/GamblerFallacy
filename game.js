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
    if (round > 10) {
        if (score == 0) {
            document.getElementById("output").innerHTML += "<p style='background-color: cyan; width: 100px; font-size: 35%;'>Jake 已解除好友</p>"
            document.getElementById("score").textContent = "您投資了" + round + "天。但是，我們將解僱您，並找到一個更聰明的老闆...祝您好運！"
            document.getElementById("restart").href = "index.htm";
            Swal.fire({
                title: "遊戲結束",
                html: "遊戲結束。請將網頁上所顯示之分數當作分數，謝謝！",
                icon: "info"
            })
            return
        }
        if (check) {
            score += 1
            document.getElementById("score").textContent = "公司收入：NT$" + score * 100 + "，您工作了" + round + "天。"
            round += 1
        } else {
            score -= 1
            document.getElementById("score").textContent = "公司收入：NT$" + score * 100 + "，您工作了" + round + "天。"
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
            document.getElementById("score").textContent = "模擬公司收入：NT$" + score * 100 + "，您模擬了" + round + "輪。"
            round += 1
        } else {
            score -= 1
            document.getElementById("score").textContent = "模擬公司收入：NT$" + score * 100 + "，您模擬了" + round + "輪。"
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