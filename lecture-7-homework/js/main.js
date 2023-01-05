let salaryForFunc = Number(prompt('Введіть заробітню плату працівника',1000))// Отримання значення заробітньої плати
while (isNaN(salaryForFunc)){
    salaryForFunc = Number(prompt('Введіть заробітню плату працівника',1000))
}
function createCountryObj (tax, middleSalary, vacancies){// Функція формування обєктів
    return {
        tax,
        middleSalary,
        vacancies
    }
}
// ФУнкція визначення назви країни
const getCountryName = country => { country == ukraine ? nameOfCountry = 'Україні' : country == latvia ? nameOfCountry = 'Латвії' : nameOfCountry = 'Литві'
}
// Створення обєктів
const ukraine = createCountryObj(0.195,1789,11476)
const latvia = createCountryObj(0.25,1586,3921)
const litva = createCountryObj(0.15,1509,1114)
// Оплата податків в 1 з країн
function getMyTaxes(salary) {
    console.log();
    getCountryName(this)
    const myCountryTaxes = (this.tax * salary).toFixed(2)
    return console.log(`Плата податків як IT-спеціаліст в ${nameOfCountry} становить ${myCountryTaxes} при заробітній платні в ${salaryForFunc}`);
}
getMyTaxes.call(ukraine,salaryForFunc)

//скільки у середньому податків платять IT-спеціалісти у кожній країні.
function getMiddleTaxes (country) {
    getCountryName(this)
    const result =  Math.round(this.tax * this.middleSalary).toFixed(2)
    return console.log(`В ${nameOfCountry} становить ${result}`)
}
console.group('Середній податок з ІТ-спеціаліста')
getMiddleTaxes.call(ukraine)
getMiddleTaxes.call(latvia)
getMiddleTaxes.call(litva)
console.groupEnd()

// скільки всього податків платять IT-спеціалісти у кожній країні.
function getTotalTaxes (country) {
    getCountryName(this)
    const result =  Math.round((this.tax * this.middleSalary) * this.vacancies)
    return console.log(`В ${nameOfCountry} становить ${result}`)
}
console.group('Всього податків з ІТ-спеціалістів')
getTotalTaxes.call(ukraine)
getTotalTaxes.call(latvia)
getTotalTaxes.call(litva)
console.groupEnd()

// Формування обєктів для останньої функції
function getMySalaryObj(country) {
    const salary = Math.round(Math.random() * (2000 - 1500 + 1) + 1500)
    const taxes = +(this.tax * salary).toFixed(2)
    const profit = +(salary - taxes).toFixed(2)
    return {
        salary,
        taxes,
        profit
    }
}
// яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number }
function getMySalary (...countries){
    let arr = []
    countries.map((element) => {
        getCountryName(element)
        arr.push(getMySalaryObj.call(element), 'В ' + nameOfCountry)
    })
    console.log(...arr);
}
// Виведення обєкту кожні 10 секундочок ) 
setInterval(() => {
    getMySalary(ukraine,latvia,litva)
}, 10000);
