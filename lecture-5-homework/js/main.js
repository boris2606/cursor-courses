// Завдання№ 1 Генерація масиву з випадковими числами
let arrLength = Number(prompt('Введіть бажану довжину масиву'))
let arrMinNumber = Number(prompt('Введіть мінімальне значення масиву'))
let arrMaxNumber = Number(prompt('Введіть максимальне значення масиву'))
const randomArray = []
const genArray =  (length, min , max) => {
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.round(Math.random() * (max - min +1) + min)
        randomArray.push(randomNumber)
    }
}
genArray(arrLength,arrMinNumber,arrMaxNumber)
console.log(`Згенерований випадковий масив довжиною ${arrLength} в діапазонві від ${arrMinNumber} по ${arrMaxNumber}: [${[randomArray]}]`);

// Завдання №2 Вирахування моди всіх переданих значень
function getModa(...numbers){
    const arrModaValues = []
    const countItems = {}; // збереження проміжкового результату
    for (const item of numbers) {
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
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    return (sum / numbers.length).toFixed(2);
}
console.log(`Середнє арифметичне всіх переданих значень ${getAverage(...randomArray)}`);

// Завдання №4 Вирахування медіану переданих чисел
function getMedian(...numbers){
        numbers.sort((a, b) => a - b);
        if (numbers.length % 2) {
            return numbers[Math.floor(numbers.length / 2)];
        } else {
            return (numbers[numbers.length / 2] + numbers[numbers.length / 2 - 1]) / 2;
        }
}
console.log(`Медіана переданих значень ${getMedian(...randomArray)}`);

// Завдання №5 Фільтрація парних чисел
function filterEvenNumbers(...numbers){
    return numbers.filter((num) => num % 2 !== 0)
}
console.log(`Фільтрація всіх парних переданих значень ${filterEvenNumbers(...randomArray)}`);

// Завдання №6 Вивід кількості чисел більше 0
function positiveNumer(...numbers){
    const positiveArr = []
    numbers.filter(number => {
        if (number > 0){
            positiveArr.push(number)
        }
    })
    return positiveArr.length
}
console.log(`Кількість чисел більших 0: ${positiveNumer(1,-2,3,-4,-5,6)}, при вокристанні наступних чисел "1,-2,3,-4,-5,6"`);

// Завдання №7 Фільтрування всіх елементів масиву що діляться на 5
function getDividedByFive(...numbers){
    return numbers.filter((num) => num % 5 == 0)
}
console.log(`Фільтрація всіх значень що діляться на 5:  ${getDividedByFive(...randomArray)}`);

// Завдання №8 Заміна поганих слів shit/fuck

function replaceBadWords(someTxt) {
    const arrTxt = someTxt.toLowerCase().split(' ');
    const badWords = /(shit|fuck|moron|idiot)/gi;
    const replaceArr = arrTxt.map((word) => {
        if (badWords.test(word)) {
            word = word.replace(badWords, '*@#$!');
        }
        return word;
    });
    return replaceArr.join(' ');
}
console.log(replaceBadWords('This man a fucking moron'));


