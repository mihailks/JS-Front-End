function rotate(arr, times) {

    for (let i = 0; i < times; i++) {
        let temp = arr.shift();
        arr.push(temp);
    }
    console.log(arr.join(" "))
}

rotate([51, 47, 32, 61, 21], 2)
rotate([32, 21, 61, 1], 4)