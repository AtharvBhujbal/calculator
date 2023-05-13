let num1=0,num2=0,operator="";
function add(num1,num2){
    return num1+num2;
};
function subtract(num1,num2){
    return num1-num2;
};
function multiply(num1,num2){
    return num1*num2;
};
function divide(num1,num2){
    return num1/num2;
};
let display=document.querySelector('.Display');
let buttons=document.querySelectorAll('.button');
buttons.forEach(button=>button.addEventListener('click', handleClick));
function handleClick(e){
    let clickedButton=e.target;
    if (isNaN(clickedButton.textContent)) {
        operator=clickedButton.textContent;
        display.textContent+=operator;
    } else {
        if (operator==="") {
            num1=""+num1+clickedButton.textContent;
            num1=Number(num1);
            display.textContent=num1;
        } else {
            num2=""+num2+clickedButton.textContent;
            num2=Number(num2);
            display.textContent=num2;
        }
    }
}
function operate(num1,num2,operator){
    switch (operator) {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}