let firstNum = "";
let secondNum = "";
let oP = "";
let aNs;
const oPtr = document.querySelectorAll(".opbtn");
const displayText = document.querySelector(".display");
const displayCont = document.querySelector(".otherbtn");
const button = document.querySelectorAll("button:not(.opbtn, .decimalbtn, .submitbtn, .clearbtn, .backpcbtn)");
const backSpc = document.querySelector(".backpcbtn");
const clearAll = document.querySelector(".clearbtn");
const eQual = document.querySelector(".submitbtn");
const decimalBtn = document.querySelector(".decimalbtn");

button.forEach(btn => {
    btn.addEventListener("click", () => {
        // if (firstNum === aNs.toString()) {
        //     firstNum = ""; // Reset firstNum to start fresh
        //     aNs="";
        // }
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
        if (firstNum !== "" && secondNum !== "") {
            // If firstNum, secondNum, and an operator are already present, calculate the result
            operator(Number(firstNum), Number(secondNum), oP); 
        }
        if (firstNum !== "" && oP === "") {
            oP = op.textContent; // store the operator
        } else if (oP !== "") {
            alert("Operator already selected!"); // Optional alert or just ignore
        }
    });
});

decimalBtn.addEventListener("click", () => {
    if (oP === "") {
        if (!firstNum.includes(".")) {
            firstNum += ".";
            display(firstNum);
            decimalBtn.disabled = true; // Disable decimal button after adding it
        }
    } else if (firstNum !== "" && oP !== "") {
        if (!secondNum.includes(".")) {
            secondNum += ".";
            display(secondNum);
            decimalBtn.disabled = true; // Disable decimal button after adding it
        }
    }
});

eQual.addEventListener("click", () => {
    if (firstNum === "" || secondNum === "" || oP === "") {
        return alert("Empty.. Type Something");
    }
    if (oP === "/" && secondNum === "0") { // Checking if dividing by zero
        return alert("Sorry, you can't divide by zero!");
    }
    operator(Number(firstNum), Number(secondNum), oP);
    decimalBtn.disabled = false; // Enable decimal after the result
});

backSpc.addEventListener("click", () => {
    if (oP === "") {
        firstNum = firstNum.slice(0, -1); // Remove last digit from firstNum
        display(firstNum);
    } else if (oP !== "" && secondNum !== "") {
        secondNum = secondNum.slice(0, -1); // Remove last digit from secondNum
        display(secondNum);
    }
});


clearAll.addEventListener("click", () => {
    displayText.textContent = "";
    firstNum = "";
    secondNum = "";
    oP = "";
    decimalBtn.disabled = false; // Enable decimal again when clearing
});

function operator(fNum, sNum, oP) {
    let result;
    switch (oP) {
        case "+":
            result = fNum + sNum;
            aNs=result;
            break;
        case "-":
            result = fNum - sNum;
            aNs=result;
            break;
        case "x":
            result = fNum * sNum;
            aNs=result;
            break;
        case "/":
            if (sNum === 0) {
                alert("Cannot divide by zero!");
                return; // exit without doing the calculation
            }
            result = fNum / sNum;
            aNs=result;
            break;
        default:
            alert("Something went wrong");
            return;
    }

    // If the result has long decimals, round it
    if (result % 1 !== 0) {
        result = result.toFixed(2); // Round to 2 decimal places (adjust as needed)
    }

   display(result); 
    firstNum = result.toString(); // Convert result to string for further use
    secondNum = "";
    oP = "";
}

function display(num) {
    displayText.textContent = "";
    displayText.textContent = num;
}

