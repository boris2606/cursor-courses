function $(name){
    return document.querySelector(name)
}
const audio = $('audio')
const startText = $('.text_for_change')
const currentSize = $('.current_size')
const currentStep = $('.current_step')
const infiniteBtn = $('.infinite_count')
const sizeUpBtn = $('.size_up')
const sizeDownBtn = $('.size_down')

// Створений бескінечний генератор
function* createIdGenerator(){
        let number = 1;
        while(true){
            yield number++;
        }
}
const idGenerator = createIdGenerator()

// Створення генератору зміни шрифту
const iteratorFontSize = {
    gen(n){
        let i = n
        return {
            next(move){
                if (move === 'up') {
                    return {value: i+=2, done: false}
                }
                if (move === 'down') {
                    return {value: i-=2, done: false}
                }
                if (!move){
                    return {value: i, done: true}
                }
            }
        }
    }
}
let fontGenerator = iteratorFontSize.gen(14)

// Функції для роботи з даними 
document.addEventListener('DOMContentLoaded',function(){
    infiniteBtn.onclick = () => {
        audio.currentTime = 0
        audio.pause()
        audio.play()
        currentStep.innerHTML = idGenerator.next().value
    }
    sizeUpBtn.onclick = () => {
        startText.style.fontSize = fontGenerator.next('up').value
        currentSize.innerHTML = `Поточний розмір шрифта:  ${startText.style.fontSize}`
    }
    sizeDownBtn.onclick = () => {
        startText.style.fontSize = fontGenerator.next('down').value
        currentSize.innerHTML = `Поточний розмір шрифта:  ${startText.style.fontSize}`
    }
})

module.exports = createIdGenerator