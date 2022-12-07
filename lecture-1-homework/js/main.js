const charger = 15.678
const generator = 123.965
const powerStation = 90.2345

const priceOfAllItems = charger + generator + powerStation // Ціна всіх товарів з залишком

let roundedPriceItem = Math.round(charger) + Math.round(generator) + Math.round(powerStation) // Ціна всіх товарів округлена до меншого значення

console.log(`Товар з максимальною вартісттю: ${Math.max(charger,generator,powerStation)}`)
console.log(`Товар з мінімальною вартісттю: ${Math.min(charger,generator,powerStation)}`)
console.log(`Вартість всіх товарів: ${charger + generator + powerStation}`)
console.log(`Вартість всіх товарів не враховуючи копійок: ${Math.floor(charger) + Math.floor(generator) + Math.floor(powerStation)}`);
console.log(`Сума товарів округлена до сотень: ${Math.round(roundedPriceItem / 100) * 100}`)

if (Math.floor(priceOfAllItems) % 2 === 0){
    console.log("Округлена сума всіх товарів являється парним числом " + true);
} else {
    console.log("Округлена сума всіх товарів являється не парним числом " + false);
}

console.log(`Сума решти, при оплаті всіх товарів без округлення, при сплаті клієнтом 500 грн: ${500 - priceOfAllItems}`);
console.log(`Середнє арифметичне значення цін, округлене до другого знаку після коми: ${(priceOfAllItems / 3).toFixed(2)}`);

function randomDiscount (item){ // Функція генерування випадкової знижки
    const minVal = 1
    const maxVal = 100
    const discountValue = Math.round(Math.random() * (maxVal - minVal +1) + minVal)
    const priceMinus = (item * (discountValue / 100)).toFixed(2)
    const costItem =  (item / 2).toFixed(2)
    const profit = ((item / 2) - priceMinus).toFixed(2)
    console.log(`
    Ціна товару:${item.toFixed(2)}
    Знижка являється:${discountValue}
    Клієнт заплатив на ${priceMinus} менше
    Собівартість товару складає: ${costItem}.
    Чистий прибуток: ${profit} 
    `)
    if (profit <=0 ) {
        console.log("Так собі торги");
    } else {
        console.log("Краще щось ніж нічого ;)");
    }
}
randomDiscount(charger)
randomDiscount(generator)
randomDiscount(powerStation)    