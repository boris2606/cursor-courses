// import planets from './planets.json' assert {type: 'json'}; // Імпорт даних по планетам
// import actors from './actors.json' assert {type: 'json'}; // Імпорт даних по акторам
import { planets } from "./planets.js";
import { actors } from "./actors.js";

const BASE_URL_SWAPI = 'https://swapi.dev/api/',
    backToStart = document.querySelector('.link_start'),
    btnPlanet = document.querySelector('.wrapper_buttons_planet'),
    btnNext = document.querySelector('#next'),
    btnPrev = document.querySelector('#prev'),
    wrapperActors = document.querySelector('.wrapper_actors'),
    wrapperPlanets = document.querySelector('.wrapper_planets'),
    titTxtPlanets = document.querySelector('.wrapper_title_txt_planets'),
    actorsForm = document.querySelector('.actors_form'),
    aboutEpisod = document.createElement('p'),
    inputEpizode = document.querySelector('.input_epizode'),
    btnInfo = document.querySelector('.btn_info'),
    wrapperLink = document.querySelector('.wraper_choice'),
    btnActorsLink = document.querySelector('.actors_link'),
    btnPlanetLink = document.querySelector('.planet_link')

// Робота з домом при переході до акторів
btnActorsLink.addEventListener('click',()=>{
    wrapperLink.style.display = 'none'
    btnPlanet.style.display = 'none'
    wrapperPlanets.style.display = 'none'
    titTxtPlanets.style.display = 'none'
    actorsForm.style.display = 'block'
    backToStart.style.display = 'block'
})
// Робота з домом при переході до планет
btnPlanetLink.addEventListener('click',()=>{
    wrapperActors.style.display = 'none'
    wrapperLink.style.display = 'none'
    backToStart.style.display = 'block'
    titTxtPlanets.style.display = 'block'
    btnPlanet.style.display = 'block'
    getAllPlanets()
})

// Робота з акторами
async function takeInformationActor(user){ // Функція отримання інформації про акторів
    const requestActor = await fetch(user)
    const dataActor = await requestActor.json()

    const correctYear = (dataActor.birth_year.substring(0, dataActor.birth_year.length-3) + ' ' + dataActor.birth_year.substr(-3)) // Отримання коректної дати 
    // Формування іконки статі
    const maleIcon = new Image(25,25);  // Створення іконок
    const femaleIcon = new Image(25,25);   
    maleIcon.src = '../assets/img/male1.png'; // Шлях до іконок
    femaleIcon.src = '../assets/img/female1.png';
    // Формування фото актора
    let actorImg = new Image(70,70);  // Створення іконок
    for (const [key, value] of Object.entries(actors)) { // Відбираю значення обєкту розділяючи масив на ключ та значення
        if (key == dataActor.name){ // Звірка імя планети та надання URL картинці
            actorImg.src = value.url;
            actorImg.classList.add('actor_style')
        };
    }
    // Формування блоку інформації про актора
    const boxActor = document.createElement('div')
    boxActor.classList.add('box_actor')
    const actorInfo =  `${actorImg.outerHTML}
                        <p class="actor_name">${dataActor.name}</p>
                        <p class="actor_age">Вік: ${correctYear == 'unknown' || correctYear.includes('unk') ? 'Невідомий' :  correctYear}</p>
                        <div class="gender_wrapper">
                            <p class="gender">Стать: </p>${dataActor.gender == 'male' ? maleIcon.outerHTML : dataActor.gender == 'female' ? femaleIcon.outerHTML : 'Невідома' }
                        </div>`
    boxActor.innerHTML = actorInfo
    wrapperActors.append(boxActor)
}
// Отримання значення інпуту по епізодам
let epizodeValue = ''
inputEpizode.addEventListener('input', e => {
    epizodeValue = e.target.value
})
async function getAllActorsFromMove(){ // Відбір всіх акторів з епізоду фільму
    const request = await fetch(`${BASE_URL_SWAPI}films/${epizodeValue}`)
    const data = await request.json();
    // Додавання інформації про епізод
    aboutEpisod.classList.add('about_episod') // Додавання класу до створеного обєкту
    aboutEpisod.innerHTML = `<span class='span_about_episod'>Про сюжет: </span> ${data.opening_crawl}` // Наповнення інформацією
    actorsForm.append(aboutEpisod)
    
    const arrActors = await data.characters
    await arrActors.forEach(takeInformationActor); // Перехід до функції перебору акторів та отримання інформації про них
}
btnInfo.addEventListener('click', () => {
    wrapperActors.innerHTML = ''
    getAllActorsFromMove()
})
// Завершення роботи з акторами


// Робота з планетами
function createPlanets (planet){
    // Формування блоку інформації про планету
    // Створення картинки для планети
    let planetImg = new Image(70,70);  // Створення іконок
    for (const [key, value] of Object.entries(planets)) { // Відбираю значення обєкту розділяючи масив на ключ та значення
        if (key == planet.name){ // Звірка імя планети та надання URL картинці
            planetImg.src = value.url;
            planetImg.classList.add('planet_style')
        };
    }

    const boxPlanet = document.createElement('div')
    boxPlanet.classList.add('box_planet')
    const planetInfo = `${planetImg.outerHTML}
                        <p class="planet_name">${planet.name == 'unknown' ? planet.name = 'Невідома' : planet.name}</p>
                        <p class="planet_population">Населення: ${planet.population == 'unknown' ? planet.population = 'невідомо' : planet.population}</p>
                        <p class="planet_diameter">Діаметр: ${planet.diameter == 'unknown' ? planet.diameter = 'невідомо' : planet.diameter} км.</p>`
    boxPlanet.innerHTML += planetInfo
    wrapperPlanets.append(boxPlanet)
}
let page = 1 // Початкова сторінка
async function getAllPlanets(page = 1){ // Отримання по АРІ всіх планет
    const request = await fetch(`${BASE_URL_SWAPI}planets/?page=${page}`)
    const data = await request.json();
    const arrPlanets = await data.results // Планети у вигляді масиву обєктів 
    await arrPlanets.forEach(createPlanets)
    planetPageInfo(page)
}
// Кнопки керування сторінками
btnNext.addEventListener('click', ()=>{
    nextPage()
})
btnPrev.addEventListener('click', ()=>{
    prevPage()
})
// Функції керування сторінками
function nextPage(){
    page == 6 ? page = 1 : page++
    wrapperPlanets.innerHTML = ''
    getAllPlanets(page)
}
function prevPage(){
    page == 1 ? page = 6 : page--
    wrapperPlanets.innerHTML = ''
    getAllPlanets(page)
}
// Функція отримання інформації яка сторінка 
function planetPageInfo(page){
    titTxtPlanets.innerHTML = `<p class="tit_text_planet">Наразі перегляд сторінки з планетами № ${page}</p>`
}
