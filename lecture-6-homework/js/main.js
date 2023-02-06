const students = [
    {
        name: "Tanya",
        course: 3,
        subjects: {
            math: [4, 4, 3, 4],
            algorithms: [3, 3, 3, 4, 4, 4],
            data_science: [5, 5, 3, 4]
        }
    }, 
    {
        name: "Victor",
        course: 4,
        subjects: {
            physics: [5, 5, 5, 3],
            economics: [2, 3, 3, 3, 3, 5],
            geometry: [5, 5, 2, 3, 5]
        }
    }, 
    {
        name: "Anton",
        course: 2,
        subjects: {
            statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
            english: [5, 3],
            cosmology: [5, 5, 5, 5]
        }
    }
];
// Вибір студента
let studentNumber
while (studentNumber > 2){
    studentNumber = prompt('Введіть номер необхідного студента для перевірки. Де 0 - Тетяна, 1 - Віктор, 2 - Антон')
}

// Завдання №1 Повернення списку предменів конкретного студента (перша буква велика, заміна "_")
function getSubjects(student){
    const subjectsOfStudent = Object.keys(student.subjects)
    return subjectsOfStudent.map( subject => {
        return subject.substring(0,1).toUpperCase() + subject.slice(1).toLowerCase().replace('_',' ')
    })
}

// Завдання №2 Повернення середньої оцінки по всім предметам обраного студента
function getAverageMark(student){
    let arrMarks = []
    const allMarksArrays = Object.values(student.subjects); // Отримання значень
    for (let arr of allMarksArrays) { // Формування масиву зі всіз масивів предметів
        arrMarks.push(...arr) 
    }
    return getAverage(...arrMarks).toFixed(2) // Отримання середнього арифметичного
}
function getAverage(...numbers){ // Функція обрахування середнього арифметичного
    const sum = numbers.reduce((acc, number) => acc + number, 0);
    return sum / numbers.length;
}

// Завдання №3 Повернення інформації по студенту
function getStudentInfo(student){
    student.averageMark = getAverageMark(student)
    let {course, name, averageMark} = student
    return `курс: ${course}, ім'я: ${name}, середня оцінка: ${averageMark}`
}

// Завдання №4 Повернення імен студентів в алфавітному порядку
function getStudentsNames(students) {
    const studentsNames = []
    for (let member of students){
        studentsNames.push(member.name);
    }
    return studentsNames.sort()
}

// Завдання №5  Поверненя кращого студента по середній оцінці
const averageMarkForAllStudents = (student) => { // Додавання всім на курсі середньої оцінки
    for (let member of student){
        member.averageMark = getAverageMark(member)
    }
}
averageMarkForAllStudents(students)

function getBestStudent(students) {
    const allMarksOfMembers = []
    for (let member of students){ // Відбираю значення всіх оцінок
        allMarksOfMembers.push(member.averageMark) 
    }
    const higestMark = Math.max(...allMarksOfMembers) // Знаходжу найбільше значення серед них
    let memberWithHigestMark = students.find(member => { // Шукаю студента в якого дорівнює найбільше значення
        return member.averageMark == higestMark
    })
    return memberWithHigestMark.name // Повертаю імя студента з найбільшим показником середнбої оцінки
}

// Завдання №6 Повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
let wordForCountLetters
function countLetterInWord(word){
    let lowerWord = word.toLowerCase().split('')
    let objLetters = {}
    for (let letter of lowerWord) {
        objLetters[letter] = objLetters[letter] ? objLetters[letter] + 1 : 1;
    }
    return objLetters
}
function resultFunction(){
    console.log(`Список предметів студента: ${getSubjects(students[studentNumber])}`);
    console.log(`Визначення середньої оцінки по всім редметам обраного студента: ${getAverageMark(students[studentNumber])}`);
    console.log(`Перегляд інформації по обраному студенту: ${getStudentInfo(students[studentNumber])}`);
    console.log(`Сортування імен студентів курсу за алфавітом: ${getStudentsNames(students)}`);
    console.log(`Найклащим студентом курсу являється: ${getBestStudent(students)}`);
    console.log(`Введее слово "${wordForCountLetters}" підрахунок кількості літер: ${JSON.stringify(countLetterInWord(wordForCountLetters))}`);

}
document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.btn_start').onclick = () => { 
        studentNumber =  Number(prompt('Введіть номер необхідного студента для перевірки. Де 0 - Тетяна, 1 - Віктор, 2 - Антон'))
        wordForCountLetters = prompt('Введіть слово для підрахунку кількості літер')
        resultFunction()
    }
})

module.exports = {
    students,
    getStudentInfo
}