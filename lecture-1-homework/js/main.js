const charger = 15.678
const generator = 123.965
const powerStation = 90.2345

const priceOfAllItems = charger + generator + powerStation // Ціна всіх товарів з залишком

let roundedPriceItem = Math.round(charger) + Math.round(generator) + Math.round(powerStation) // Ціна всіх товарів округлена до меншого значення
console.log(`
    Товар з максимальною вартісттю: ${Math.max(charger,generator,powerStation)}
    Товар з мінімальною вартісттю: ${Math.min(charger,generator,powerStation)}
    Вартість всіх товарів: ${charger + generator + powerStation}
    Вартість всіх товарів не враховуючи копійок: ${Math.floor(charger) + Math.floor(generator) + Math.floor(powerStation)}
    Сума товарів округлена до сотень: ${Math.round(roundedPriceItem / 100) * 100}
    ${Math.floor(priceOfAllItems) % 2 === 0 ? "Округлена сума всіх товарів являється парним числом " + true : "Округлена сума всіх товарів являється не парним числом " + false}
    Сума решти, при оплаті всіх товарів без округлення, при сплаті клієнтом 500 грн: ${500 - priceOfAllItems}
    Середнє арифметичне значення цін, округлене до другого знаку після коми: ${(priceOfAllItems / 3).toFixed(2)}
    ${randomDiscount(charger)}
    ${randomDiscount(generator)}
    ${randomDiscount(powerStation)}
`)

function randomDiscount (item){ // Функція генерування випадкової знижки відосно до товару, та виведення даних
    const minVal = 1
    const maxVal = 100
    const discountValue = Math.round(Math.random() * (maxVal - minVal +1) + minVal)
    const priceMinus = (item * (discountValue / 100)).toFixed(2)
    const costItem =  (item / 2).toFixed(2)
    const profit = ((item / 2) - priceMinus).toFixed(2)
    return chargerDiscount = `
    Назва товару: ${item == charger ? "Зарядний пристрій" : item == generator ? "Генератор" : "Електростанція"}
    Ціна товару:${item.toFixed(2)}
    Знижка являється:${discountValue}
    Клієнт заплатив на ${priceMinus} менше
    Собівартість товару складає: ${costItem}.
    Чистий прибуток: ${profit} 
    Коментар до рентабельності продажу товару : ${profit <=0 ? "Так собі торги" : "Краще щось ніж нічого ;)"}
    `
}