function solve(a, b) {
    function factorial(n){
        let result = 1;
        for (let i = n; i > 0; i--) {
                result*=i;
        }
        return result;
    }
    let fac1 = factorial(a);
    let fac2 = factorial(b);

    console.log((fac1/fac2).toFixed(2))
}

solve(5,2);
solve(6,2);