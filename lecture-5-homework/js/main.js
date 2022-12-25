//Початкві масиви для деяких завдань
let arrModa = [1,3,3,4,5,6,7,8,8,1]

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
    return duplicates = numbers.filter((number, index, array) => {
        return array.indexOf(number) !== index;
    });
}
console.log(`Мода переданих аргументів масиву [${randomArray}] являється: ${getModa(...randomArray)} `);

// Завдання №3 Середнє арифметичне всіх переданих значень
function getAverage(...numbers){
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    return sum / numbers.length;
}
console.log(`Середнє арифметичне всіх переданих значень ${getAverage(...randomArray)}`);

// Завдання №4 Вирахування медіану переданих чисел
function getMedian(...numbers){
    const halfOfArr = numbers.length / 2
    const sortedArr = numbers.sort((a,b) => a - b)
    return (sortedArr[halfOfArr] + sortedArr[halfOfArr - 1]) / 2
}
console.log(`Медіана переданих значень ${getMedian(...randomArray)}`);

// Завдання №5 Фільтрація парних чисел
function filterEvenNumbers(...numbers){
    const numPar = []
    numbers.filter((num) => {
        if (num % 2 !== 0){
            numPar.push(num)
        }
    })
    return numPar
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
    const numDivFive = []
    numbers.filter((num) => {
        if (num % 5 === 0){
            numDivFive.push(num)
        }
    })
    return numDivFive
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
console.log(replaceBadWords('You\'re a fucking moron'));