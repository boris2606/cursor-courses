function summOfNumbers(selector){
  let startNumber = checkNumber(Number(prompt('Введіть початкове значення')))
  let lastNumber = checkNumber(Number(prompt('Введіть кінцеве значення')))

  // Перевірка на цілісність числа
  function checkNumber(number) {
    let value = Number(number);//приводим до числа те що прийшло на вхід
    while(!Number.isInteger(value)){//якщо не число повторюєм цикл
      value = Number(prompt('Введіть число')); //вводимо значення і приводим то цілого числа
    }
    return value; //повертаєм
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
  document.querySelector(selector).innerHTML = `Сума чисал становить <span class="colored">${sumNum}</span> при обранні початкового значення: <span class="colored">${startNumber}</span> кінцевого значення: <span class="colored">${lastNumber}</span> (Статус пропуску парних чисел <span class="colored">"${confirmRequest}</span>")`
}

document.addEventListener('DOMContentLoaded',function(){
  document.querySelector('.btn_take_less2').onclick = () => { 
    summOfNumbers('.result_sum')
  }
})


module.exports = summOfNumbers