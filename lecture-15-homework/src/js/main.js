import '../styles/main.scss'
import planetPageInfo from "../../../lecture-12-homework/js/main" // Експорт з 12 ДЗ

// Імпорт елементів
document.addEventListener('DOMContentLoaded', function(){
    const resultBlock = document.querySelector('.result_block')
    const lessonOne = require('../../../lecture-1-homework/js/main')
    const lessonTwo = require('../../../lecture-2-homework/js/main')
    const lessonThree = require('../../../lecture-3-homework/js/main')
    const lessonFour = require('../../../lecture-4-homework/js/main')
    const lessonFive = require('../../../lecture-5-homework/js/main')
    const lessonSix = require('../../../lecture-6-homework/js/main')
    const lessonSeven = require('../../../lecture-7-homework/js/main')
    const lessonEight = require('../../../lecture-8-homework/js/main')
    const lessonNine = require('../../../lecture-9-homework/js/main')
    const lessonTen = require('../../../lecture-10-homework/js/main')
    const lessonEleven = require('../../../lecture-11-homework/js/main')
    const lessonThirteen = require('../../../lecture-13-homework/js/main')
    

    clearInterval(lessonSeven.interval) // Очищення інтервалу 7 функції
    // Виконання імпортованих елементів
    document.querySelector('.btn_lesson_1').onclick = () => {
        resultBlock.classList.remove('container')
        lessonOne()
    }
    document.querySelector('.btn_lesson_2').onclick = () => {
        resultBlock.classList.remove('container')
        lessonTwo('.result_block')
    }
    document.querySelector('.btn_lesson_3').onclick = () => {
        resultBlock.classList.remove('container')
        lessonThree('.result_block')
    }
    document.querySelector('.btn_lesson_4').onclick = () => {
        resultBlock.classList.remove('container')
        resultBlock.innerHTML = ''
        for(let pairs of lessonFour){
            resultBlock.innerHTML += `<p>${pairs}</p> <br>`
        }
    }
    document.querySelector('.btn_lesson_5').onclick = () => {
        resultBlock.classList.remove('container')
        resultBlock.innerHTML = `Заміна поганих слів: ${lessonFive('This man a fucking  piece of shit', 'fuck,shit')}`
    }
    document.querySelector('.btn_lesson_6').onclick = () => {
        resultBlock.classList.remove('container')
        resultBlock.innerHTML = ''
        for(let student of lessonSix.students){
            resultBlock.innerHTML += `<p>Імя студента ${student.name}, знаходиться на курсі ${student.course}, має предмети та оцінки по предметам, середній бал ${student.averageMark}</p><br>`
        }
    }
    document.querySelector('.btn_lesson_7').onclick = () => {
        resultBlock.classList.remove('container')
        lessonSeven.getMyTaxes.call(lessonSeven.ukraine,1000)
    }
    document.querySelector('.btn_lesson_8').onclick = () => {
        resultBlock.classList.remove('container')
        let person = new lessonEight('Київський НУХТ', 3, 'Шагієв Борис Анатолійович')
        resultBlock.innerHTML = person.getInfo()
    }
    document.querySelector('.btn_lesson_9').onclick = () => {
        resultBlock.classList.add('container')
        resultBlock.innerHTML = ''
        lessonNine()
    }
    document.querySelector('.btn_lesson_10').onclick = () => {
        resultBlock.classList.remove('container')
        resultBlock.innerHTML = ''
        lessonTen()
    }
    document.querySelector('.btn_lesson_11').onclick = () => {
        resultBlock.classList.remove('container')
        resultBlock.innerHTML = ''
        lessonEleven(6).then(value => {
            resultBlock.innerHTML = value
        })
    }
    document.querySelector('.btn_lesson_12').onclick = () => {
        resultBlock.classList.remove('container')
        planetPageInfo(2,resultBlock)
    }
    document.querySelector('.btn_lesson_13').onclick = () => {
        resultBlock.classList.remove('container')
        resultBlock.innerHTML = lessonThirteen().next().value
    }
})
