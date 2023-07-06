function simpleCalculator2(firstNum, secondNum, operation) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    const operatorMap = {
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply,
    }
    return operatorMap[operation](firstNum, secondNum);
}