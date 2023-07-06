function Expenses(lostFightsCount, helmet, sword, shield, armor) {

    let sum = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 12 === 0) {
            sum += helmet + sword + shield + armor;
        } else if (i % 6 === 0) {
            sum += helmet + sword + shield;
        } else if (i % 3 === 0) {
            sum += sword
        } else if (i % 2 === 0) {
            sum += helmet
        }
    }
    console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`)
}

Expenses(7, 2, 3, 4, 5);
Expenses(23, 12.50, 21.50, 40, 200);