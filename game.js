function rand(max) {
    return Math.floor(Math.random() * Math.floor(max))
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
        document.getElementById("instructions").textContent = " <- 查看後，請按按鈕關閉此面板。"
        show()
    } else {
        hide()
        document.getElementById("instructions").textContent = ""
    }
    window.scrollTo(0,document.body.scrollHeight);
}

function see() {
    var res = "第" + round + "次嘗試，結果" + (check ? ("正確") : ("錯誤")) + "，猜測" + (guess ? ("股價上漲") : ("股價下跌")) + "。<br>"
    output.innerHTML += res
    if (stat == false) {
        document.getElementById("instructions").textContent = " <- 請立即單擊此按鈕以查看您的歷史記錄。"
    }
    if (round > 10) {
        if (score == 0) {
            document.getElementById("result").textContent = "您已經失去了員工的信任！ 那我為什麼要相信你？"
            document.getElementById("score").textContent = "您投資了" + round + "輪。但是，我們將解僱您，並找到一個更聰明的老闆...祝您好運！"
            document.getElementById("restart").href = "index.htm";
            swal("遊戲結束", "遊戲結束。請把分數報告給教授。");
            return
        }
        if (check) {
            document.getElementById("result").textContent = "對！您的話是對的！"
            score += 1
            document.getElementById("score").textContent = "員工信任度：" + score + "，您投資了" + round + "輪。"
            round += 1
        } else {
            document.getElementById("result").textContent = "不！您的話似乎不正確！下一次，請稍微調整一下猜測！"
            score -= 1
            document.getElementById("score").textContent = "員工信任度：" + score + "，您投資了" + round + "輪。"
            round += 1
        }
    } else {
        if (round == 10) {
            document.getElementById("result").textContent = "現在，您即將在我們公司工作！我覺得您是“得分王”！"
            score = defaultScore;
            round += 1
            return
        }
        if (check) {
            document.getElementById("result").textContent = "對！您的話是對的！"
            score += 1
            document.getElementById("score").textContent = "員工信任度：" + score + "，您投資了" + round + "輪。"
            round += 1
        } else {
            document.getElementById("result").textContent = "不！您的話似乎不正確！下一次，請稍微調整一下猜測！"
            score -= 1
            document.getElementById("score").textContent = "員工信任度：" + score + "，您投資了" + round + "輪。"
            round += 1
        }
    }
    window.scrollTo(0,document.body.scrollHeight);
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