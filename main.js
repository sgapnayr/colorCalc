const display = document.querySelector('.top-half')
const numbers = document.querySelectorAll('.number')
const operations = document.querySelectorAll('.operation')
const resultDisplay = document.querySelector('.result-display')
const clearAll = document.querySelector('.clear-all')
const clearLast = document.querySelector('.clear-last')
const equals = document.querySelector('.equals')
const buttons = document.querySelectorAll('.button')

let currentNumber = ''
let lastNumber = ''
let hasDecimal = false

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        if (e.target.innerText === '.' && !hasDecimal) {
            hasDecimal = true
        } else if (e.target.innerText === '.' && hasDecimal) {
            return
        }
        currentNumber += e.target.innerText
        display.innerText = currentNumber
    })
})

operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if (!currentNumber) { return }
        else {
            lastNumber = currentNumber
            currentNumber = ''
            display.innerText = currentNumber
            resultDisplay.innerText = `${lastNumber} ${operation.innerText}`
        }
    })
})

function calculate() {
    if (!lastNumber || !currentNumber) { return }
    else {
        if (operation === '+') {
            return parseInt(lastNumber) + parseInt(currentNumber)
        } else if (operation === '-') {
            return parseInt(lastNumber) - parseInt(currentNumber)
        } else if (operation === 'X') {
            return parseInt(lastNumber) * parseInt(currentNumber)
        } else if (operation === '/') {
            return parseInt(lastNumber) / parseInt(currentNumber)
        } else if (operation === '%') {
            return parseInt(lastNumber) % parseInt(currentNumber)
        }
    }
}

equals.addEventListener('click', () => {
    if (!lastNumber || !currentNumber) { return }
    for (let i = 0; i < resultDisplay.innerText.length; i++) {
        if (resultDisplay.innerText[i] === '+' || resultDisplay.innerText[i] === '-' || resultDisplay.innerText[i] === 'X' || resultDisplay.innerText[i] === '/' || resultDisplay.innerText[i] === '%') {
            operation = resultDisplay.innerText[i]
            resultDisplay.innerText = calculate(lastNumber, currentNumber, operation)
        }
        display.innerText = ''
    }
})

clearAll.addEventListener('click', () => {
    display.innerText = ''
    resultDisplay.innerText = ''
    currentNumber = ''
    lastNumber = ''
})

clearLast.addEventListener('click', () => {
    currentNumber = currentNumber.slice(0, -1)
    display.innerText = currentNumber
})

/* Css Js */
buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.add('playing')
        setTimeout(() => {
            button.classList.remove('playing')
        }, 120)
    })
})

