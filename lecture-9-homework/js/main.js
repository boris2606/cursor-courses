console.log();
function generateBlocks() {
    for (let box=0; box<25; box++){
        const createBox = document.createElement('div')
        createBox.className = 'box'
        createBox.style.background = `#${Math.round(Math.random() * (999999 - 000000 +1) + 000000)}`
        document.querySelector('.container').append(createBox)
    }
}
generateBlocks()
document.querySelector('.btn_anim').onclick = () => {
    generateBlocksInterval()
}
function generateBlocksInterval(){
    setInterval(() => {
        document.querySelector('.container').style.animation = `shadow 1s infinite`
        const allBoxes = document.querySelectorAll('div')
        allBoxes.forEach((box)=> {
            box.style.background = `#${Math.round(Math.random() * (999999 - 000000 +1) + 000000)}`
        })
    }, 1000);
}
