let firstNum = "";
let secondNum = "";
let oP="";
const oPtr = document.querySelectorAll(".opbtn");
const displayText = document.querySelector(".display");
const displayCont = document.querySelector(".otherbtn");
const button=document.querySelectorAll("#btn");
const backSpc = document.querySelector(".btnB");
const clearAll = document.querySelector(".btnC");
const eQual = document.querySelector(".submitbtn");

button.forEach(btn => {
    btn.addEventListener("click", () => {
        if (oP === "") {
            firstNum += btn.textContent; 
            display(firstNum);
        } else if (firstNum !== "" && oP !== "") {
            secondNum += btn.textContent; 
            display(secondNum);
        }
    });
});

oPtr.forEach(op => {
    op.addEventListener("click", () => {
        oP = op.textContent; 
    });
});

eQual.addEventListener("click", () => {
    if (firstNum === "" || secondNum === "" || oP === "") {
        return alert("Empty.. Type Something");
    }
    operator(Number(firstNum), Number(secondNum), oP); 
});

clearAll.addEventListener("click", () => {
    displayText.textContent = "";
    firstNum = "";
    secondNum = "";
    oP = "";
});

function operator(fNum, sNum, oP) {
    let result;
    switch (oP) {
        case "+":
            result = fNum + sNum;
            break;
        case "-":
            result = fNum - sNum;
            break;
        case "x":
            result = fNum * sNum;
            break;
        case "/":
            result = fNum / sNum;
            break;
        default:
            alert("Something went wrong");
            return;
    }

    display(result); // show result on the display
    firstNum = result; // use result as the first number for the next operation
    secondNum = "";
    oP = "";
}

function display(num) {
    displayText.textContent="";
    displayText.textContent = num; 
    displayCont.appendChild(displayText);
}