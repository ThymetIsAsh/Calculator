const firstNum = "";
const secondNum = "";
const oP="";
const oPtr = document.querySelectorAll(".opbtn");
const displayText = document.querySelector(".display");
const displayCont = document.querySelector(".otherbtn");
const button=document.querySelectorAll("#btn");
const backSpc = document.querySelector(".btnB");
const clearAll = document.querySelector(".btnC");
const eQual = document.querySelector(".submitbtn");

button.addEventListener("click",()=> {
    if (oP===""){
        firstNum=button.values; 
        display(firstNum);
    }else if(firstNum !=="" && oP!==""){
        secondNum=button.values;
        display(secondNum);
    }
    
} );

oPtr.addEventListener("click",()=>{
    return oP= oPtr.values;
});

eQual.addEventListener("click",()=> {
    if(firstNum==="" && secondNum==="" && oP==="") return alert("Empty.. Type Something");
    operator(firstNum,secondNum,oP);
});

clearAll.addEventListener("click",()=>{
    return displayText.textContent="";
});




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
            alert("Something went Wrong");
    }

}

function display(num) {
    displayText.textContent="";
    displayText.textContent = num; 
    displayCont.appendChild(displayText);
}