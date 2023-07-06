function solve(numbers) {
    for (const number of numbers) {
        let digitsArr = String(number).split('');
        let isPalindrome = true;
        for (let i = 0; i < digitsArr.length/2; i++) {
            if(digitsArr[i]!==digitsArr[digitsArr.length-1-i]){
                isPalindrome = false;
                break;
            }
        }
        console.log(isPalindrome);
    }
}

solve([123,323,421,121]);
solve([32,2,232,1010]);
