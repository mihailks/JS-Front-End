function moneyNeed(fruit,weight,money) {
    let weightInKg = weight/1000;
    let needMoney = weightInKg*money
    console.log(`I need $${needMoney.toFixed(2)} to buy ${weightInKg.toFixed(2)} kilograms ${fruit}.`)
}

moneyNeed('orange', 2500, 1.80)