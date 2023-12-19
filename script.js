let first= '0';
let second = '';
let operation = ' ';
let result = 0;
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
let clearButton = document.querySelector("#clearButton")
clearButton.addEventListener('click', () =>{
    console.log('jd')
    first = '0'
    second = ''
    operation = ''
    operatorClicked = false
    display.textContent ='0'


})

let plusMinusButton = document.querySelector("#plusMinusButton")
plusMinusButton.addEventListener('click', () => {
   
    
    if (operatorClicked === false) {
        
        first = (parseFloat(first) * -1).toString();
        display.textContent = first;
    }

    if (operatorClicked === true) {
        
        second = (parseFloat(second) * -1).toString();
        display.textContent = second;
    }
});

let backButton = document.querySelector("#backButton");

backButton.addEventListener('click', () => {
    console.log(display.textContent.length)
    if (display.textContent.length > 2) {
        display.textContent = display.textContent.slice(0, -1);
        if (operatorClicked) {
            second = second.slice(0, -1);
        } else {
            first = first.slice(0, -1);
        }
    } 
    else if(display.textContent.length === 2){
        display.textContent = '0';
        if (operatorClicked) {
            second = '';
        } else {
            first = '0';
        }
    }
    
    
    
    
    else {
        display.textContent = '0';
        if (operatorClicked) {
            second = '';
        } else {
            first = '0';
        }
    }
});