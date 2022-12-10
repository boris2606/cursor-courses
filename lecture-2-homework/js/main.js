let startNumber = checkNumber(Number(prompt('Введіть початкове значення')))
let lastNumber = checkNumber(Number(prompt('Введіть кінцеве значення')))

// Перевірка на цілісність числа
function checkNumber(number){
    if (Number.isInteger(number)) {
        return number = number
    } else if (!Number.isInteger(number)) {
        integerNumber = Number(prompt('Введіть ціле число'))
        if (!Number.isInteger(integerNumber)){
            const confirmQuestion = confirm('Введене значення знову не являється цілим, бажаєте здійснити округлення?')
            if (confirmQuestion){
                return number = Math.round(integerNumber)
            }
        }
    }
}
const confirmRequest = confirm("Бажаєте пропускати парні числа ?")
let sumNum = 0
for (let i = startNumber; i <= lastNumber; i++) {
    if (confirmRequest){
        if (i % 2){
            sumNum = sumNum + i
        }
    } else {
        sumNum = sumNum + i
    }
}
document.querySelector('.result_sum').innerHTML = `Сума чисал становить <span class="colored">${sumNum}</span> при обранні початкового значення: <span class="colored">${startNumber}</span> кінцевого значення: <span class="colored">${lastNumber}</span> (врахування парних чисел <span class="colored">"${confirmRequest}</span>")`
