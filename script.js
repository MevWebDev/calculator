let first = '';
let second = '';
let operation = ' ';
let result = 0;
let memory = []
let i = 0
let checker = 0
let pressedKey = ''
let dotted = false
let placeholder = '0'
let operationFinished = false
let operatorClicked = false
let numberButtons = document.querySelectorAll(".numberButton")
let display = document.querySelector("#display")
let equalsButton = document.querySelector("#equalsButton")
display.textContent = placeholder
numberButtons.forEach((numberButton) => {

    numberButton.addEventListener('click', () => {
        
        console.log(display.textContent)
        if (checker === 1 || display.textContent === '0' || display.textContent === '*' || display.textContent === '/' || display.textContent === '+' || display.textContent === '-') {

            display.textContent = " "




        }
        checker = 0
       
        if (numberButton.textContent !== ".") {
            if (operatorClicked === true) {
                if (numberButton.textContent === '0' && second === '0') {
                    return; // prevent appending another '0'
                } else if (second === '0') {
                    second = numberButton.textContent; // replace leading '0'
                    display.textContent = second;
                } else {
                    second += numberButton.textContent;
                    display.textContent += numberButton.textContent;
                }
            } else if (operatorClicked === false) {
                if (numberButton.textContent === '0' && first === '0') {
                    return; // prevent appending another '0'
                } else if (first === '0') {
                    first = numberButton.textContent; // replace leading '0'
                    display.textContent = first;
                } else {
                    first += numberButton.textContent;
                    display.textContent += numberButton.textContent;
                }
            }

            if (placeholder === '0') {
                placeholder = false
            }
        }




    });
});
let operationButtons = document.querySelectorAll(".operationButton");

operationButtons.forEach((operationButton) => {
    operationButton.addEventListener('click', () => {
        dotted = false
        if (operatorClicked && second !== '') {
            a = parseFloat(first)
            b = parseFloat(second)

            result = operate(a, operation, b)
            operation = operationButton.textContent
            spoilerButton.textContent = result + " " + operation + ' '
            display.textContent = result
            operatorClicked = true
            operationFinished = true
            checker = 1
            first = result
            second = ''
            firstAppend = false;

        } else {
            operatorClicked = true;
            spoilerButton.textContent = first + " " + operationButton.textContent + " "
            operation = operationButton.textContent
        }
        checker = 1

    });

});

equalsButton.addEventListener('click', () => {
    if (second) {
        a = parseFloat(first)
        b = parseFloat(second)
        result = operate(a, operation, b)
        spoilerButton.textContent += second + ' = '
        display.textContent = result
        operatorClicked = false;
        operationFinished = true
        checker = 1
        first = result
        second = ''

    }

})

function operate(a, operation, b) {

    if (operation === '+') {

        sum = (a + b)
        memory.push(sum)
        i = 0
        operatorClicked = false
        operationFinished = true


        return sum

    } else if (operation === '-') {
        min = (a - b)
        memory.push(min)
        i = 0
        operatorClicked = false
        operationFinished = true


        return min
    } else if (operation === '*') {
        multi = (a * b)
        memory.push(multi)
        i = 0
        operatorClicked = false
        operationFinished = true


        return multi
    } else if (operation === '/') {
        if (b === 0) {

            return "Can't do that :/"
        } else {
            divide = (a / b)
            memory.push(divide)
            i = 0
            operatorClicked = false
            operationFinished = true


            return divide
        }

    }



}
let clearButton = document.querySelector("#clearButton")
clearButton.addEventListener('click', () => {

    first = ''
    second = ''
    operation = ''
    operatorClicked = false
    placeholder = '0'
    spoilerButton.textContent = ''
    display.textContent = placeholder
    memory = []
    i = 0


})

let plusMinusButton = document.querySelector("#plusMinusButton")
plusMinusButton.addEventListener('click', () => {

    if(first!==''){
        if (operatorClicked === false) {

            first = (parseFloat(first) * -1).toString();
            display.textContent = first;
        }
    
        if (operatorClicked === true) {
    
            second = (parseFloat(second) * -1).toString();
            display.textContent = second;
        }
    }
    
});

let backButton = document.querySelector("#backButton");

backButton.addEventListener('click', () => {

    if (display.textContent.length > 2) {
        display.textContent = display.textContent.slice(0, -1);
        if (operatorClicked) {
            second = second.slice(0, -1);
        } else {
            first = first.slice(0, -1);
        }
    } else if (display.textContent.length === 2) {
        display.textContent = '0';
        if (operatorClicked) {
            second = '';
        } else {
            first = '0';
        }
    } else {
        display.textContent = '0';
        if (operatorClicked) {
            second = '';
        } else {
            first = '0';
        }
    }
});
let memoryButton = document.querySelector("#memoryButton")
memoryButton.addEventListener('click', () => {
    if (i < memory.length) {
        if (operatorClicked === false) {
            first = memory[i]
        } else if (operatorClicked === true) {
            second = memory[i]
        }
        display.textContent = memory[i]


        i = i + 1
    }


})
memoryButton.addEventListener('contextmenu', (event) => {
    memory = []
    i = 0

    event.preventDefault();
})
let spoilerButton = document.querySelector("#spoiler")
let dotButton = document.querySelector("#dotButton")
dotButton.addEventListener('click', () => {
    if (operatorClicked === false && dotted === false) {
        first += '.'
        display.textContent += '.'
    } else if (operatorClicked === true && dotted === false) {
        second += '.'
        display.textContent += '.'
    }
    dotted = true
})

document.addEventListener('keydown', (event) =>{
    if (/^\d$/.test(event.key) || event.key==='.'){
        console.log(event.key)
        if (checker === 1 || placeholder === '0' || display.textContent === '*' || display.textContent === '/' || display.textContent === '+' || display.textContent === '-') {

            display.textContent = " "




        }
        checker = 0
        if (event.key !== ".") {
            if (operatorClicked === true) {
                if (event.key=== '0' && second === '0') {
                    return; // prevent appending another '0'
                } else if (second === '0') {
                    second = event.key; // replace leading '0'
                    display.textContent = second;
                } else {
                    second += event.key;
                    display.textContent += event.key;
                }
            } else if (operatorClicked === false) {
                if (event.key === '0' && first === '0') {
                    return; // prevent appending another '0'
                } else if (first === '0') {
                    first = event.key; // replace leading '0'
                    display.textContent = first;
                } else {
                    first += event.key;
                    display.textContent += event.key;
                }
            }

            if (placeholder === '0') {
                placeholder = false
            }
        }

    }
    if(event.key === '*' || event.key === '+' || event.key === '-' || event.key === '/' || event.key === 'Enter'){
        dotted = false
        if (operatorClicked && second !== '') {
            a = parseFloat(first)
            b = parseFloat(second)

            result = operate(a, operation, b)
            if (event.key==='Enter'){
                operation = '='
            }
            else{
                operation = event.key
            }
            
            spoilerButton.textContent = result + " " + operation + ' '
            display.textContent = result
            operatorClicked = true
            operationFinished = true
            checker = 1
            first = result
            second = ''
            firstAppend = false;

        } else {
            operatorClicked = true;
            spoilerButton.textContent = first + " " + event.key + " "
            operation = event.key
        }
        checker = 1
    }
    if (event.key==='Escape'){
        first = ''
        second = ''
        operation = ''
        operatorClicked = false
        placeholder = '0'
        spoilerButton.textContent = ''
        display.textContent = placeholder
        memory = []
        i = 0
        

    }
    if(event.key==="Backspace"){
        if (display.textContent.length > 2) {
            display.textContent = display.textContent.slice(0, -1);
            if (operatorClicked) {
                second = second.slice(0, -1);
            } else {
                first = first.slice(0, -1);
            }
        } else if (display.textContent.length === 2) {
            display.textContent = '0';
            if (operatorClicked) {
                second = '';
            } else {
                first = '0';
            }
        } else {
            display.textContent = '0';
            if (operatorClicked) {
                second = '';
            } else {
                first = '0';
            }
        }

    }
    if(event.key==="Alt"){
        if (first!=='' ){
            if (operatorClicked === false) {

                first = (parseFloat(first) * -1).toString();
                display.textContent = first;
            }
        
            if (operatorClicked === true) {
        
                second = (parseFloat(second) * -1).toString();
                display.textContent = second;
            }
        }
    }
    if(event.key==='m'){
        if (i < memory.length) {
            if (operatorClicked === false) {
                first = memory[i]
            } else if (operatorClicked === true) {
                second = memory[i]
            }
            display.textContent = memory[i]
    
    
            i = i + 1
        }
    }






})


    
    
    

