function cooking(number, e1,e2,e3,e4,e5) {

let arr = [];
arr.push(e1);
arr.push(e2);
arr.push(e3);
arr.push(e4);
arr.push(e5);

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case "chop":
        console.log(number/=2);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                console.log(number+=1);
                break;
            case "bake":
                console.log(number*=3);
                break;
            case "fillet":
                console.log(number-=number*0.2);
                break;
        }
    }
}


