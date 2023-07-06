function Bitcoin(days) {
    const priceBTC = 11949.16;
    const priceGold = 67.51;
    let totalGold = 0;
    let firstBTCday = 0;
    let haveOne = false;
    for (let i = 0; i < days.length; i++) {
        if ((i+1) % 3 === 0) {
            days[i] *= 0.7;
        }
        totalGold += days[i];
        if ((totalGold * priceGold) >= priceBTC) {
            if (haveOne === false) {
                firstBTCday = i + 1;
                haveOne = true;
            }
        }
    }
    let totalBTC = Math.floor((totalGold * priceGold) / priceBTC);
    console.log(`Bought bitcoins: ` + totalBTC);
    if (totalBTC > 0) {
        console.log(`Day of the first purchased bitcoin: ` + firstBTCday);
    }
    let temp = totalGold * priceGold - totalBTC * priceBTC
    console.log(`Left money: ${(totalGold * priceGold - totalBTC * priceBTC).toFixed(2)} lv.`)
}

Bitcoin([100, 200, 300]);



