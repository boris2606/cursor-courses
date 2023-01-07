// Перевірка на цілісність числа
function chekNumberIsInteger(numbers){
    return numbers.filter(number => Number.isInteger(number))
}
// Завдання№ 1 Генерація масиву з випадковими числами
let arrLength = Number(prompt('Введіть бажану довжину масиву'))
let arrMinNumber = Number(prompt('Введіть мінімальне значення масиву'))
let arrMaxNumber = Number(prompt('Введіть максимальне значення масиву'))

const randomArray = genArray(arrLength,arrMinNumber,arrMaxNumber)
function genArray (length, min , max){
    let randomArr = []
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.round(Math.random() * (max - min +1) + min)
        randomArr.push(randomNumber)
    }
    return randomArr
}
console.log(`Згенерований випадковий масив довжиною ${arrLength} в діапазонві від ${arrMinNumber} по ${arrMaxNumber}: [${[randomArray]}]`);

// Завдання №2 Вирахування моди всіх переданих значень
function getModa(...numbers){
    const fillteredArray = chekNumberIsInteger(numbers)
    const arrModaValues = []
    const countItems = {}; // збереження проміжкового результату
    for (const item of fillteredArray) {
        countItems[item] = countItems[item] ? countItems[item] + 1 : 1; // Формую обєкт ключ (число), значення (кількість повторів)
    }
    const maxReplNumber = (Math.max(...Object.values(countItems))); // Відбираю максимальну кількість повторів з обєкту
    for (const [key, value] of Object.entries(countItems)) { // Відбираю значення обєкту в якому кількість повторів відповідає максимальному значенню повторів обєкта
        if (value == maxReplNumber){
            arrModaValues.push(key) // Додаю співпадіння в масив
        }
    }
    return arrModaValues.join(' та ') // повертаю значення 
}
console.log(`Мода переданих аргументів ${randomArray} являється: ${getModa(...randomArray)} `);

// Завдання №3 Середнє арифметичне всіх переданих значень
function getAverage(...numbers){
    const fillteredArray = chekNumberIsInteger(numbers)
    const sum = fillteredArray.reduce((acc, number) => acc + number, 0);
    return (sum / fillteredArray.length).toFixed(2);
}
console.log(`Середнє арифметичне всіх переданих значень ${getAverage(...randomArray)}`);

// Завдання №4 Вирахування медіану переданих чисел
function getMedian(...numbers){
    const fillteredArray = chekNumberIsInteger(numbers)
    fillteredArray.sort((a, b) => a - b);
    if (fillteredArray.length % 2) {
        return fillteredArray[Math.floor(fillteredArray.length / 2)];
    } else {
        return (fillteredArray[fillteredArray.length / 2] + fillteredArray[fillteredArray.length / 2 - 1]) / 2;
    }
}
console.log(`Медіана переданих значень ${getMedian(...randomArray)}`);

// Завдання №5 Фільтрація парних чисел
function filterEvenNumbers(...numbers){
    const fillteredArray = chekNumberIsInteger(numbers)
    return fillteredArray.filter((num) => num % 2 !== 0)
}
console.log(`Фільтрація всіх парних переданих значень ${filterEvenNumbers(...randomArray)}`);

// Завдання №6 Вивід кількості чисел більше 0
function positiveNumer(...numbers){
    const positiveArr = []
    numbers.filter(number => {
        if (number > 0 && number !== true){
            positiveArr.push(number)
        }
    })
    return positiveArr.length
}
console.log(`Кількість чисел більших 0: ${positiveNumer(1,-2,3,-4,-5,6,true)}, при вокристанні наступних чисел "1,-2,3,-4,-5,6,true"`);

// Завдання №7 Фільтрування всіх елементів масиву що діляться на 5
function getDividedByFive(...numbers){
    return numbers.filter((num) => num % 5 == 0)
}
console.log(`Фільтрація всіх значень що діляться на 5:  ${getDividedByFive(...randomArray)}`);

// Завдання №8 Заміна поганих слів shit/fuck

function replaceBadWords(someTxt,word) {
    if (word == '' || word == undefined){
        word = 'shit,fuck,moron'
    }
    const arrTxt = someTxt.toLowerCase().split(' ');
    const badWords = new RegExp (`${word.split(',').join('|')}`,'gi')
    const replaceArr = arrTxt.map((word) => {
        if (badWords.test(word)) {
            word = word.replace(badWords, '*@#$!');
        }
        return word;
    });
    return replaceArr.join(' ');
}
console.log(replaceBadWords('This man a fucking  piece of shit', 'fuck,shit'));


