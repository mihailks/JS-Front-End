function solve(a, b, c) {
    let sum = (a, b) => a + b;
    let subtract = (sum, c) => sum - c;

    return subtract(sum(a,b),c);
}

sum(23, 6);
subtract(10);
sum(1, 17);
subtract(30);
sum(42, 58);
subtract(100);

