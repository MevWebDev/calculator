let first= '';
let second = '';
let operation = ' ';
let result = 0
let operatorClicked = false
let numberButtons = document.querySelectorAll(".numberButton")
let display = document.querySelector("#display")
let equalsButton = document.querySelector("#equalsButton")
numberButtons.forEach((numberButton) => {
    
    numberButton.addEventListener('click', () => { 
        if (display.textContent === '0' || display.textContent === '*' || display.textContent === '/' || display.textContent === '+' || display.textContent === '-'){
            display.textContent = " "
        }  
        if (operatorClicked === true){
            
            display.textContent +=  numberButton.textContent ; 
            second += numberButton.textContent
            
        }
        else if (operatorClicked === false){
            
            display.textContent +=  numberButton.textContent ; 
            first += numberButton.textContent;
            
        
        }
        
        
        
        
        
    });
});
let operationButtons = document.querySelectorAll(".operationButton");

operationButtons.forEach((operationButton) => {
    operationButton.addEventListener('click', () => {
        console.log(operationButton.textContent)
        operatorClicked = true;
        display.textContent = operationButton.textContent;
        operation = operationButton.textContent
    });
});

equalsButton.addEventListener('click', () => {
    a = parseFloat(first)
    b = parseFloat(second)
    result = operate(a,operation,b)
    display.textContent = result
    first = result
    second = 0
    operatorClicked = false;

    
})
function operate(a,operation,b){
    
    if (operation === '+'){
        console.log("adding")
        return a+b
    }
    else if (operation === '-'){
        return a-b
    }
    else if (operation === '*'){
        return a*b
    }
    else if (operation === '/'){
        return a/b
    }
}
