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
const secondary_display=document.querySelector('.secondary_display');
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
    if(num2===0){
        secondary_display.textContent=num1+operator;
    }
    if(num2!==0){
        secondary_display.textContent=num1+operator+num2;
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
const equal=document.querySelector('.equal');
equal.addEventListener('click',calculate);
function calculate() {
  let result = operate(num1, num2, operator);
  result=cutDecimals(result,15);
  display.textContent = result;
  secondary_display.textContent=num1+operator+num2+"=";
  // reset the values of num1, num2, and operator
  num1 = result;
  num2 = 0;
  operator = "";
}
const clear=document.querySelector('.clear');
clear.addEventListener('click',fun_clear);
function fun_clear(){
    num1=num2=0;
    operator="";
    display.textContent=0;
    secondary_display.textContent="";
}
const backspace=document.querySelector('.backspace');
backspace.addEventListener('click',fun_backspace);
function fun_backspace() {
    display.textContent = display.textContent.substring(0, display.textContent.length - 1);

    if (display.textContent.length === 0) {
        display.textContent = 0;
        if (operator !== "" && num2 !== "") {
            num2 = num2.toString().substring(0, num2.toString().length - 1);
            display.textContent = num1 + operator + num2;
        }
        else if(operate!=="" && num2===""){
            operator="";
            display.textContent=num1;
        }
         else {
            num1 = num1.toString().substring(0, num1.toString().length - 1);
            display.textContent = num1;
        }
    } else if (operator !== "") {
        num2 = display.textContent.substring(num1.toString().length + 1);
    } else {
        num1 = Number(display.textContent);
    }
}
const decimal=document.querySelector('.decimal');
decimal.addEventListener('click',addDecimal);
function addDecimal(){
    if(operator!==""){
        if(!num2.toString().includes(".")){
            num2+=".";
        }
        display.textContent=num2;
    }
    else{
        if(!num1.toString().includes(".")){
            num1+=".";
        }
        display.textContent=num1;
    }
}
function cutDecimals(number,decimals){
    return number.toLocaleString('fullwide', {maximumFractionDigits:decimals})
  }