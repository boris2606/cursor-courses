const students = ['Олександр','Ігор','Олена','Іра','Олексій','Світлана']
const themes = ['Диференційне рівняння','Теорія автоматів','Алгоритми і структури даних']
const marks = [4,5,5,3,4,5]

// Розбиття на пари
let pairsCreated = getCreatePair(students)
function getCreatePair(students){
    return new Array(
        [students[0] + ' i ' + students[2]],
        [students[1] + ' i ' + students[3]],
        [students[4] + ' i ' + students[5]])
}

// Додавання теми
let pairsWithTheme = pushThemeFucn(pairsCreated,themes)
function pushThemeFucn(pairs,theme){
    const pairsWithTheme = []
    for (let i = 0; i < pairs.length && theme.length ; i++) {
        pairsWithTheme.push([...pairs[i],theme[i]])    
    }
    return pairsWithTheme
}

// Надання оцінок студентам
let markedStudent = marked(students, marks)
function marked(students,marks){
    const markedStudent = []
    for (let i = 0; i < students.length && marks.length ; i++) {
        markedStudent.push([students[i],marks[i]])    
    }
    return markedStudent
}

// Призначення парам оцінок парам оцінок
let pairs = getPairs(pairsWithTheme)
function getPairs(pairsWithTheme){
    const studensPairWithMarks = []
    for (let i = 0; i < pairsWithTheme.length; i++) {
        let randomNumber = Math.round(Math.random() * (5 - 1) + 1)
        studensPairWithMarks.push([...pairsWithTheme[i],randomNumber])
    }
    return studensPairWithMarks
}

console.group('Початкові масиви які використовуватимуться в роботі');
console.log(students);
console.log(themes);
console.log(marks);
console.groupEnd()
console.group('Виконані завдання');
console.group('1№ - Розділ студентів на пари(хлопець + дівчина)');
console.log(pairsCreated);
console.groupEnd()
console.group('2№ - Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.');
console.log(pairsWithTheme);
console.groupEnd()
console.group('3№ - Зіставте оцінки(marks) зі студентом(students)');
console.log(markedStudent);
console.groupEnd()
console.group('4№ - Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут');
console.log(pairs);
console.groupEnd()