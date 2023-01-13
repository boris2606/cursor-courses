import {
    addMoreMarkBudget,addMoreMark,newMarkAddBudget,addMarkBtnBudget,recoverBtnBudget,dismissBtnBudget,averageBtnBudget,inputs,removeButton,createButtonStudent,createButtonBudgetStudent,valUnivers,valCourse,valName,resultBlock,wrapperBtn,wrapperBtnBudget,getMarksBtn,addMarkBtn,newMarkAdd,averageBtn,dismissBtn,recoverBtn,scholarshipPopup,defaultValues
} from "./variables.js"
class Student {
    constructor(university,course,fullName){
        this.university = university
        this.course = course
        this.fullName = fullName
    }
    getInfo(){
        return `<p class="student_result">Інформація про студента: Студент ${this.course}-го курсу, навчальний заклад: ${this.university} , повне імя студента: ${this.fullName}</p>`
    }
    getAverageMark(){
        const sum = this.marks.reduce((acc, number) => acc + number, 0)
        return (sum / this.marks.length).toFixed(1)
    }
    dismiss(){
        this.studentStatus = 'dismiss'
        const copyMarks = this.marks.slice()
        this.copyMarks = copyMarks
        this.marks = null
    }
    recover(){
        this.studentStatus = 'recover'
        this.marks = this.copyMarks
        delete this.copyMarks
    }
    set setMarks(value){
        this.marks = value
    }
    set setMark(value){
        this.marks.push(value)
    }
    get getMarks(){
        if (this.studentStatus !== 'dismiss'){
            return `Оцінки студента [${this.marks}]`
        } else {
            return `Неможливо отримати оцінки студента, так як студент відрахований`      
        }
    }

}
// Формування класу бюджетника
class BudgetStudent extends Student{
    constructor(university,course,fullName){
        super(university,course,fullName)
        !Object.values(this).includes('') ? this.interval = setInterval(() => this.getInterval(), 30000) : undefined
    }
    getInterval(){
        if (this.studentStatus == 'dismiss') {
            alert('Наразі студент відрахований (o_o), нарахування стипендії зупинено (O_O), для продовження необхідно його відновити')
        } else if (this.getAverageMark() >= 4){
            this.setScholarship = 1400
            scholarshipPopup.style.right = '20px'
            scholarshipPopup.innerHTML = `Ви отримали ${this.getScholarship()} стипендії!`
            setTimeout(() => {
                scholarshipPopup.innerHTML = ``
                scholarshipPopup.style.right = '-20px'
            }, 4000);
        } else if (this.getAverageMark() <= 4){
            alert(`Нажаль стипендію не буде нараховано, так як середній бал нижче за 4`)
        }
    }
    set setScholarship(value){
        this.scholarship = value
    }
    getScholarship(){
        return this.scholarship
    }
    deleteInterval(){
        delete this.interval
    }
}
defaultValues.onclick = () => {
    setDefaultValues()
}
let student = {}
let budgetStudent = {}
function createAndChekPerson(person,nameOfClass){ // Створення та перевірка студента на поля
    person = new nameOfClass(valUnivers.value, valCourse.value,valName.value)
    if (Object.values(person).includes('')){
        alert("Не всі поля заповнені, заповніть будь ласка поля");
        return undefined
    } else if (nameOfClass === Student) {
        resultBlock.innerHTML = `${person.getInfo()}`
        createButtonHideWithFields()
        removeButton.style.display = 'block'
        wrapperBtn.style.display = 'block'
        person.setMarks = [5,4,4,5]
    } else if (nameOfClass === BudgetStudent){
        resultBlock.innerHTML = `${person.getInfo()}`
        removeButton.style.display = 'block'
        wrapperBtnBudget.style.display = 'block'
        createButtonHideWithFields()
        person.setMarks = [5,4,4,5]
    }
    defaultValues.style.display = 'none'
    return person
}
createButtonStudent.onclick = () =>{ // Створення студенту через конструктор
    student = createAndChekPerson(student,Student)
}
createButtonBudgetStudent.onclick = () =>{ // Створення бюджетного студенту через конструктор
    budgetStudent = createAndChekPerson(student,BudgetStudent)
}

// Отримання оцінок
getMarksBtn.onclick = () => { // Отримання оцінок студента
    resultBlock.innerHTML += `<p class="student_result">${student.getMarks}</p>`
}

// Додавання оцінок
addMarkBtn.onclick = () => { // Поставити оцінку студенту
    addMarkPerson(student)
}
addMarkBtnBudget.onclick = () => { // Поставити оцінку студенту бютжетнику
    addMarkPerson(budgetStudent)
}
addMoreMark.onclick = () => { // Відкриття полів додаткової оцінки
    openAddMoreMarkStudent()
}
addMoreMarkBudget.onclick = () => {// Відкриття полів додаткової оцінки бюджетнику
    openAddMoreMarkBudget()
}
function addMarkPerson(person){
    if (person.studentStatus !== 'dismiss'){
        if (+newMarkAdd.value > 0 || +newMarkAddBudget.value > 0){
            if (person == student) {
                person.setMark = +newMarkAdd.value  
                newMarkAdd.disabled = true
                addMarkBtn.disabled = true
            }
            if (person == budgetStudent) {
                person.setMark = +newMarkAddBudget.value
                newMarkAddBudget.disabled = true
                addMarkBtnBudget.disabled = true
            }
            resultBlock.innerHTML += `<p class="student_result">${person.getMarks} після додавання</p>`
        } else {
            alert('Необхідно вказати оцінку більше 0')
            newMarkAdd.disabled = false
        }
    } else {
        alert('Студент відрахований, можливість поставити оцінку відсутня')
    }
}

// Середній бал студентів
averageBtn.onclick = () => { // Отримання середнбого балу студента
    averagePerson(student)
}
averageBtnBudget.onclick = () => { // Отримання середнбого балу студента
    averagePerson(budgetStudent)
}
function averagePerson(person){
    person.marks !== null ? resultBlock.innerHTML += `<p class="student_result">Середній бал студента ${person.getAverageMark()}</p>` : alert('Студент відрахований, необхідно відновити для отримання середнього балу')
}

// Виключення бюджетоного студента
dismissBtn.onclick = () => { // Виключення студента
    dismissPerson(student)
}
dismissBtnBudget.onclick = () => { // Виключення студента бюджетника
    dismissPerson(budgetStudent)
}
function dismissPerson(person){
    recoverBtn.style.display = 'block'
    recoverBtnBudget.style.display = 'block'
    person.dismiss()
    dismissBtn.disabled = true
    recoverBtn.disabled = false
    dismissBtnBudget.disabled = true
    recoverBtnBudget.disabled = false
}

// Поновлення студента
recoverBtn.onclick = () => { // Поновлення студента
    recoverPerson(student)
}
recoverBtnBudget.onclick = () => { // Поновлення студента бюджетника
    recoverPerson(budgetStudent)
}
function recoverPerson(person){
    person.recover()
    dismissBtn.disabled = false
    recoverBtn.disabled = true
    dismissBtnBudget.disabled = false
    recoverBtnBudget.disabled = true
}

// Редагування полів та кнопок 
removeButton.onclick = () => { // Відкриття полів для створення студенту та видалення попереднього
    enableInputs(inputs)
}
function disableInputAfterCreation (arrInput){ // Закриття полів для вооду пісоя створення студенту
    for (let input of arrInput){
        input.setAttribute('value','')
        input.disabled = true
    }
}
function enableInputs (arrInput){ // Відкриття полів для вводу нового студента
    let createdStudent = document.querySelectorAll('.student_result')
    for (let input of arrInput){
        input.disabled = false
    }
    if (createdStudent !== null) {
        for (let element of createdStudent){
            element.remove()
            recoverBtn.style.display = 'none'
        }
    }
    defaultValues.style.display = 'block'
    openAddMoreMarkStudent()
    removeButton.style.display = 'none'
    wrapperBtn.style.display = 'none'
    dismissBtn.disabled = false
    createButtonshow()
    if (budgetStudent) {
        clearInterval(budgetStudent.interval)
        openAddMoreMarkBudget()
        wrapperBtnBudget.style.display = 'none'
        dismissBtnBudget.disabled = false
        recoverBtnBudget.style.display = 'none'
    } 
}
function createButtonHideWithFields(){ // Приховання кнопок створення студентів
    createButtonStudent.style.display = 'none'
    createButtonBudgetStudent.style.display = 'none'
    disableInputAfterCreation(inputs) // Закриття полів
}
function createButtonshow(){ // Показ кнопок створення студентів
    createButtonStudent.style.display = 'block'
    createButtonBudgetStudent.style.display = 'block'
}
function openAddMoreMarkStudent (){ // Функція Відкриття полів додаткової оцінки
    newMarkAdd.disabled = false
    newMarkAdd.value = ''
    addMarkBtn.disabled = false
}
function openAddMoreMarkBudget (){ // Функція Відкриття полів додаткової оцінки
    newMarkAddBudget.disabled = false
    newMarkAddBudget.value = ''
    addMarkBtnBudget.disabled = false
}

// Значення за замовчуванням 
function setDefaultValues(){
    valUnivers.setAttribute("value", "Київський національний університет харчових технологій")
    valCourse.setAttribute('value', 4)
    valName.setAttribute('value','Шагієв Борис Анатолійович')
}