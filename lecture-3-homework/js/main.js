// Функція №1 Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
function digitNumber(resultSelector){
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
    document.querySelector(resultSelector).innerHTML = `
        <p class='result_text'> Функція №1: Результат виконання - ${getMaxDigit(numberFuncOne)}</p>
    `
}

//Функція №2 Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function powNumber(resultSelector){
    const number = prompt('Введіть число яке необхідно підняти до степеня')
    const expon = prompt('Введіть степінь')
    function numberExpon(number, exp){
        let result = 1
        for (let i = 0; i < Math.abs(exp); i++) {
            result *= number
        }
        if (exp < 0){
            result = 1/result
        }
        return result
    }
    document.querySelector(resultSelector).innerHTML = `
    <p class='result_text'> Функція №2: Результат виконання : ${numberExpon(number,expon)}</p>
    `
}

//Функція №3 Створити функцію, яка форматує ім'я, роблячи першу букву великою.
function formatingName(resultSelector){
    const personName = prompt("Введіть своє ім'я")
    function fixName(name){
        const fixRegister = name.toLowerCase()
        return fixRegister[0].toUpperCase() + fixRegister.slice(1)
    }
    document.querySelector(resultSelector).innerHTML = `
    <p class='result_text'> Функція №3: Результат виконання - ${fixName(personName)}</p>
    `
}

// Функція №4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
function cashWithTax(resultSelector){
    const cashWithOutTax = prompt('Введіть Вашу заробітню плату')
    function cleanCash(cash){
        let tax = 18 + 1.5
        return cash - ((cash / 100) * tax)
    }
    document.querySelector(resultSelector).innerHTML = `
    <p class='result_text'> Функція №4: Результат виконання - ${cleanCash(cashWithOutTax)}</p>
    `
}

// Функція №5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
function randomIntegerNumber(resultSelector){
    let minValue = prompt('Введіть мінімальне значення для діапазону')
    let maxValue = prompt('Введіть максимальне значення діапазону')
    function getRandomNumber(min,max){
        return Math.round(Math.random() * (max - min +1) + min)
    }
    document.querySelector(resultSelector).innerHTML = `
    <p class='result_text'> Функція №5: Результат виконання - ${getRandomNumber(minValue,maxValue)}</p>
    `
}

// Функція №6 Створити функцію, яка рахує скільки разів певна буква повторюється в слові. 
function repeatLetterFromWord(resultSelector){
    let word = prompt('Введіть слово')
    let searchLetter = prompt('Введіть букву кількість яких необхідно знайти в слові')
    function countLetterInWord(word, letter){
        let lowerWord = word.toLowerCase()
        let lowerSearchLetter = letter.toLowerCase()
        let numLetters = []
        for (let i = 0; i <= lowerWord.length; i++) {
            if (lowerWord[i] == lowerSearchLetter){
                numLetters.push(word[i])
            }
        }
        return numLetters.length
    }
    document.querySelector(resultSelector).innerHTML = `
        <p class='result_text'> Функція №6: Результат виконання: кількість букв в слові = ${countLetterInWord(word,searchLetter)}</p>
        `
}

// Функція №7 та 8 Функція, яка конвертує долари в гривні та навпаки в залежності віднаявності символа $ або UAH в рядку.
function moneyConvert(resultSelector){
    let money = prompt('Введіть бажану суму та тип коштів для конвертації. УВАГА! Доступі валюти лише "$" та "UAH"')
    function convertMoney(money){
        let lowerMoney = money.toLowerCase()
        for (let i = 0; i < lowerMoney.length; i++) {
            if (lowerMoney[i] == '$'){
            result = (Number(lowerMoney.split('$').join('')) * 40) + "UAH"
            } else if (lowerMoney[i] == 'u' || lowerMoney[i] == 'a' || lowerMoney[i] == 'h') {
            result = (Number(lowerMoney.split('uah').join('')) / 40) + "$"
            } else {
            result = 'Введена валюта відсутня для конвертації, або відсутня'
            }
        }
        return result
    }
    document.querySelector(resultSelector).innerHTML = `
    <p class='result_text'> Функція №7: Результат виконання: кількість коштів після конвертації = ${convertMoney(money)}</p>
    `
}

// Функція № 9 Функція генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
function generationRandomPassword(resultSelector){
    let passLength = Number(prompt('Введіть бажану довжину випадкового паролю', 8))
    if (passLength == 0 || passLength == null || passLength == undefined ) {
        passLength = 8
    }
    function getRandomPassword(lenPass = 8) {

        const chars = "0123456789"; 
        let password = lenPass
        for (var i = 1; i < lenPass; i++) {
            var randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }
        return password
    }
    document.querySelector(resultSelector).innerHTML = `
    <p class='result_text'> Функція №7: Результат виконання: згенерований пароль = ${getRandomPassword(passLength)}</p>
    `
}

// Функція №11 Функція, яка видаляє всі букви з речення.
function deleteLettersFromText(resultSelector){
    let word = prompt('Введіть слово')
    let searchLetterForDeleting = prompt('Введіть літери які необхідно видалити зі слова')
    function countLetterDeleting(word, letter){
        let lowerWord = word.toLowerCase()
        let lowerLetterForDeleting = letter.toLowerCase()
        let result = lowerWord.split(lowerLetterForDeleting).join('')
        return result
    }
    document.querySelector(resultSelector).innerHTML = `
        <p class='result_text'> Функція №6: Результат виконання: ${countLetterDeleting(word,searchLetterForDeleting)}</p>
        `
}

// Функція №12 Функція, яка перевіряє, чи є слово паліндромом.
function checkWordForPalindrom(resultSelector){
    let word = prompt('Введіть слово для звірчи чи воно являється паліндромом')
    function checkPalindrom(word){
        let notReversed = word.toLowerCase().split("").filter(element => element != ' ').join('')
        let reverseWord = word.toLowerCase().split('').filter(element => element != ' ').reverse().join('')
        return (notReversed === reverseWord)
    }
    document.querySelector(resultSelector).innerHTML = `
    <p class='result_text'> Функція №6: Результат виконання: ${checkPalindrom(word)}</p>
    `
}
// Функції відпрацювання кнопок
document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.function_1').onclick = () => {
        digitNumber('.func_result')
    }
    document.querySelector('.function_2').onclick = () => {
        powNumber('.func_result')
    }
    document.querySelector('.function_3').onclick = () => {
        formatingName('.func_result')
    }
    document.querySelector('.function_4').onclick = () => {
        cashWithTax('.func_result')
    }
    document.querySelector('.function_5').onclick = () => {
        randomIntegerNumber('.func_result')
    }
    document.querySelector('.function_6').onclick = () =>{
        repeatLetterFromWord('.func_result')
    }
    document.querySelector('.function_7').onclick = () =>{
        moneyConvert('.func_result')
    }
    document.querySelector('.function_9').onclick = () =>{
        generationRandomPassword('.func_result')
    }
    document.querySelector('.function_11').onclick = () =>{
        deleteLettersFromText('.func_result')
    }
    document.querySelector('.function_12').onclick = () =>{
        checkWordForPalindrom('.func_result')
    }
})
module.exports = digitNumber