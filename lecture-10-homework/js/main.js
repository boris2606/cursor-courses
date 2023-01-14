const blockArr = Array.from(document.querySelectorAll("div"))
const audio = document.querySelectorAll("audio")

document.addEventListener("keydown", element => { // Слідкування за натисканням на клавіатуру
    blockArr.map(buttonBlock => { 
        audio.forEach(audio => { // Перебір всіх аудио файлів
            if (element.code === audio.id){ // Звірка чи код кнопки співпадає з ІД аудио
                if (element.code === buttonBlock.id){ // Грання з наявністю класу
                    buttonBlock.classList.add('active')
                } else {
                    buttonBlock.classList.remove('active')
                }
                audio.pause() // Ставим на паузу при повторному натисканні попередню
                audio.play().then(function(){ // Запускаємо, і якщо було попереднє запущено робимо знову (уникає помилки промісу)
                    audio.currentTime = 0; // Ставим початок аудіо на 0
                    audio.play() // Запускаємо аудіо
                })
            } else {
                audio.pause() 
            }
        })
    })
})
blockArr.map(buttonBlock => { // Перебераю всі елементи
    audio.forEach(audio => { // Перебираю всі аудіо
        buttonBlock.addEventListener('click', () => { // Встановлюю схулач на натиснутий елемент
            for(let block of blockArr){ // Грання з наявністю класу
                if(block.classList.contains('active')) {
                    block.classList.remove('active')
                } 
                buttonBlock.classList.add('active')
            }
            audio.currentTime = 0; // Обнуляю запис , початок з 0
            if (buttonBlock.id === audio.id){ // Звірка чи ІД елементу співпадає з ІД звуку
                audio.pause()
                audio.play()
            } else {
                audio.pause()
            }
        })
    })
})

