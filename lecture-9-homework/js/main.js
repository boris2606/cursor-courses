function generateBlocks() {
    for (let box=0; box<25; box++){
        const createBox = document.createElement('div')
        createBox.className = 'box'
        createBox.style.background = `#${Math.round(Math.random() * (999999 - 0 +1) + 0)}`
        document.querySelector('.container').append(createBox)
    }
}

function generateBlocksInterval(){
    setInterval(() => {
        document.querySelector('.container').style.animation = `shadow 1s infinite`
        const allBoxes = document.querySelectorAll('div')
        allBoxes.forEach((box)=> {
            box.style.background = `#${Math.round(Math.random() * (999999 - 0 +1) + 0)}`
        })
    }, 1000);
}

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.btn_anim').onclick = () => {
        generateBlocksInterval()
    }
    document.querySelector('.btn_create').onclick = () => {
        document.querySelector('.container').innerHTML = ''
        generateBlocks()
    }
})

module.exports = generateBlocks