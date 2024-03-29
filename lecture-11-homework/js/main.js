
async function getRandomChinese(length) {
    let result = ''
    let i = 0
    while( i < length){
        const date = Date.now()
        const sign = String(date) % 100000
        result += String.fromCharCode(sign)
        await delay(50)
        i++
    }
    return result
}
let delay = ms => {return new Promise(resolve => setTimeout(()=>resolve(),ms))}

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.btn_start').onclick = () => { 
        let lenghtWord = Number(prompt('Введіть довжину слова з символів', 4))
        while (!lenghtWord){
            lenghtWord = Number(prompt('Введіть довжину слова з символів'))
        }
        getRandomChinese(lenghtWord).then(value => {
            document.querySelector('main').innerHTML = value;
        });
    }
})

module.exports = getRandomChinese