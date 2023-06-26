function firstAndLast(elements, numbers) {
    let newArr = [];
    for (let i = 0; i < elements; i++) {
        newArr.push(numbers[i]);
    }
    console.log(newArr.reverse().join(" "));
}