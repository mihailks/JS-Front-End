function print(arr,number) {
    let arrPrint=[];
    for (let i = 0; i < arr.length; i+=number) {
        arrPrint.push(arr[i]);
    }
    return arrPrint;
}

print(['5',
        '20',
        '31',
        '4',
        '20'],
    2)