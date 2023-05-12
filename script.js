let num1,num2,operator;
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
let button=document.querySelectorAll('button');
button.forEach(button=>button.addEventListener('click',getclass));
function getclass(e){
    if(isNaN(button.classList)) {
        operator=button.classList;
    }
    else{
        num1=""+button.classList ;
    }
}
function operate(num1,num2,operator){
    return operator(num1,num2);
}