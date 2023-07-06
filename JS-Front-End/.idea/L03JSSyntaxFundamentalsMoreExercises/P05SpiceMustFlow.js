function SpiceMustFlow(startingYield) {
    let days = 0;
    let totalYield = 0;
    let daylyYield = startingYield;
    while (daylyYield >= 100) {
        days++;
        totalYield += daylyYield - 26;
        if (totalYield < 0) {
            totalYield = 0;
        }
        daylyYield -= 10;
    }
    console.log(days);
    if (days === 0) {
        console.log(0);
    } else {
        console.log(totalYield - 26);
    }
}

SpiceMustFlow(110);