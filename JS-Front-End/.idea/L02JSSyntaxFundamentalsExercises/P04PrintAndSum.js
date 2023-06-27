function print(a,b) {
    let sum=0;
    let arr=[];
    for (let i = a; i <= b; i++) {
        sum+=i;
        arr.push(i)
    }
    console.log(arr.join(" "))
    console.log(`Sum: ${sum}`)
}

