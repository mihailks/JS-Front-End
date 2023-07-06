function loadingBar(number){
    let bar="";
    for (let i = 1; i <= 100; i+=10) {
        if (i<number){
            bar+="%";
        } else {
            bar+=".";
        }
    }
    if (number===100){
        console.log("100% Complete!")
        console.log(bar)
    } else {
        console.log(`${number}% [${bar}]`)
        console.log("Still loading...")
    }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
