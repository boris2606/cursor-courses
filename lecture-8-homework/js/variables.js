function $(name){
    return document.querySelector(name)
}
// Нода полів
export const inputs = document.querySelectorAll('.close')
// Кнопки видалення і створення
export const removeButton = $('#enable_form')
export const createButtonStudent = $('#submit_form_student')
export const createButtonBudgetStudent = $('#submit_form_budget_student')
// Поля введення
export let valUnivers = $('#univers_value')
export let valCourse = $('#course_value')
export let valName = $('#name_value')
export let newMarkAdd = $('#new_mark')
export let newMarkAddBudget = $('#new_mark_budget')
// Обгортка кнопок
export const wrapperBtn = $('.wrapper_buttons_student')
export const wrapperBtnBudget = $('.wrapper_buttons_budget_student')
export const scholarshipPopup = $('.scholarship_popup') // Вивід отримання стипендії
// Кнопки виклику функцій
export const defaultValues = $('.default_values') // Значення за замовчуванням
export const getMarksBtn = $('.get_marks_btn') // Кнопка отримання оцінок
export const addMarkBtn = $('.add_mark_btn') // Поставити оцінки
export const addMoreMark = $('.add_more_mark') // Додати оцінку
export const averageBtn = $('.average_btn') // Визначення середнього балу
export const dismissBtn = $('.dismiss_btn') // Виключення студента
export const recoverBtn = $('.recover_btn') // Поновлення студента
export const addMarkBtnBudget = $('.add_mark_btn_budget') // Поставити оцінки бюджетнику
export const addMoreMarkBudget = $('.add_more_mark_budget') // Додати оцінку бюджетнику
export const averageBtnBudget = $('.average_btn_budget') // Визначення середнього балу бюджетника
export const dismissBtnBudget = $('.dismiss_btn_budget') // Виключення студента бюджетника
export const recoverBtnBudget = $('.recover_btn_budget') // Поновлення студента бюджетника
export const resultBlock = $('.result') // Блок виводу результату

