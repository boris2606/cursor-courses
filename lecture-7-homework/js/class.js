let salaryForFunc = Number(prompt('Введіть заробітню плату працівника',1000)) // Отримання значення заробітньої плати
while (isNaN(salaryForFunc)){
    salaryForFunc = Number(prompt('Введіть заробітню плату працівника',1000))
}
class FunctionsForHomwWork {
    constructor(tax,middleSalary,vacancies){ // Конструктор обєкту
        this.tax = tax,
        this.middleSalary = middleSalary,
        this.vacancies = vacancies
    }
    getMyTaxes(salary){ // Функція податку в країні з ІТ
        return Math.round(this.tax * salary)
    }
    getMiddleTaxes() { // Функція скільки податку в середньому платять ІТ спеціалісти в країнах
        return Math.round(this.tax * this.middleSalary)
    }
    getTotalTaxes() { // Функція скільки всього ІТ спеціалісти платять податку в країнах
        return Math.round((this.tax * this.middleSalary) * this.vacancies)
    }
    getMySalary() { // Формує обєкт для останньої функції
        const salary = Math.round(Math.random() * (2000 - 1500 + 1) + 1500)
        const taxes = +(this.tax * salary).toFixed(2)
        const profit = +(salary - taxes).toFixed(2)
        return {
            salary,
            taxes,
            profit
        }
    }
} 
// Створення обєктів країн через клас
const ukraine = new FunctionsForHomwWork (0.195, 1789, 11476)
const latvia = new FunctionsForHomwWork (0.25,1586,3921)
const litva = new FunctionsForHomwWork (0.15,1509,1114)
// ФУнкція визначення назви країни
const getCountryName = country => { country == ukraine ? nameOfCountry = 'Україні' : country == latvia ? nameOfCountry = 'Латвії' : nameOfCountry = 'Литві'
}
// Функція виводу та обрахунку податку в вказаній країні
function myCountryTax (country) {
    getCountryName(country)
    const myCountryTaxes = country.getMyTaxes.call(country,salaryForFunc)
    return console.log(`Плата податків як IT-спеціаліст в ${nameOfCountry} становить ${myCountryTaxes} при заробітній платні в ${salaryForFunc}`);
}
myCountryTax(ukraine)

function consoleWrite (...contries) {
    // Формування масивів
    const middleTaxesArr = []
    const allTaxesCountry = []

    for (const country of contries) { // Прохід по циклу обєктів країн
        getCountryName(country)// Отримання назви країни
        // Формування середнього податку в країнах та додавання до масиву
        let resultMiddleTaxes = ` 
Середній податок з ІТ-спеціаліста в ${nameOfCountry} становить ${country.getMiddleTaxes.call(country)}
        `
        middleTaxesArr.push(resultMiddleTaxes)
        // Формування всіх подітків зі спеціалістів та додавання до масиву
        let resultAllTaxes = ` 
Всього податків з ІТ-спеціалістів в ${nameOfCountry} становить ${country.getTotalTaxes.call(country)}
        `
        allTaxesCountry.push(resultAllTaxes)
    }
    // Вивід в консоль функцій
    console.log(...middleTaxesArr); 
    console.log(...allTaxesCountry);
}
consoleWrite(ukraine,latvia,litva)

// Формування масиву з обєктами 
function getMySalary (...countries){
    let arr = []
    countries.map((element) => {
        getCountryName(element)
        arr.push(element.getMySalary.call(element), 'В ' + nameOfCountry)
    })
    console.log(...arr);
}
// Виведення обєкту кожні 10 секундочок ) 
setInterval(() => {
    getMySalary(ukraine,latvia,litva)
}, 10000);