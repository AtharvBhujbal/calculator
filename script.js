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
button.forEach(button=>button.addEventListener('click',handleClick));
function handleClick(e){
    let clickedButton= e.target;
    if(isNaN(clickedButton.textContent)) {
        operator=clickedButton.textContent;
    }
    else{
        if(operator===""){
            num1=parseInt(clickedButton.textContent);
        }
        else{
            num2=parseInt(clickedButton.textContent);
        }
    }
}
function operate(num1,num2,operator){
    return operator(num1,num2);
}