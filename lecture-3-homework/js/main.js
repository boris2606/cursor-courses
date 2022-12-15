// Функція №1 Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.

document.querySelector(".func_1").onclick = () => {
    const numberFuncOne = prompt('Введіть будь-яке число щоб отримати найбильшу цифру в цьому числі')
    function getMaxDigit(number){
        if (number){
            let filteredArr = number.split('')
                                    .filter(errElem => errElem !== '.' && errElem !== ',')
                                    .map(Number)
                                    .filter(Boolean)
            return Math.max(...filteredArr);
        }
    }
    console.log(`Функція №1: ${getMaxDigit(numberFuncOne)}`); 
}


/* //Функція №2 Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
const number = prompt('Введіть число яке необхідно підняти до степеня')
const expon = prompt('Введіть степінь')
function nuberExpon(number, exp){
    let result = 1
    for (let i = 0; i < exp; i++) {
        result *= number
    }
    return result
}
console.log(`Функція №2: ${nuberExpon(number,expon)}`); 

//Функція №3 Створити функцію, яка форматує ім'я, роблячи першу букву великою.
const personName = prompt("Введіть своє ім'я")
function fixName(name){
    const fixRegister = name.toLowerCase()
    return fixRegister[0].toUpperCase() + fixRegister.slice(1)
}
console.log(`Функція №3: ${fixName(personName)}`); 

// Функція №4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
const cashWithOutTax = prompt('Введіть Вашу заробітню плату')
function cleanCash(cash){
    let tax = 18 + 1.5
    return cash - ((cash / 100) * tax)
}
console.log(`Функція №4: ${cleanCash(cashWithOutTax)}`); 

// Функція №5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
let minValue = prompt('Введіть мінімальне значення для діапазону')
let maxValue = prompt('Введіть максимальне значення діапазону')
function getRandomNumber(min,max){
    return Math.round(Math.random() * (max - min +1) + min)
}
console.log(`Функція №5: ${getRandomNumber(minValue,maxValue)}`);

// Функція №6 Створити функцію, яка рахує скільки разів певна буква повторюється в слові. */