const firstNum = 0;
const secondNum = 0;
const oPtr = "";
const displayText = document.querySelector(".display");
const displayCont = document.querySelector(".otherbtn");


function operator(fNum, sNum, oP) {
    let result, a;

    if (fNum === "" && sNum === "") return alert("type something to begin");

    if (oP === "+") {
        a = 1;
    } else if (oP === "-") {
        a = 2;
    } else if (oP === "x") {
        a = 3;
    } else if (oP === "/") {
        a = 4;
    } else {
        a = 5;
    }

    switch (a) {
        case 1:
            return result = fNum + sNum;
            break;
        case 2:
            return result = fNum - sNum;
            break;
        case 3:
            return result = fNum * sNum;
            break;
        case 4:
            return result = fNum / sNum;
            break;
        default:
            alert("Somthing went Wrong");
    }

}

function display(num) {
    displayText.textContent="";
    displayText.textContent = num; 
    displayCont.appendChild(displayText);
}