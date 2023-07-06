function Smallest(a, b, c) {
    if (a<b && a<c){
        console.log(a);
    } else if (b<a && b<c){
        console.log(b);
    } else {
        console.log(c);
    }
}

Smallest(2,
    5,
    3);
Smallest(600,
    342,
    123);
Smallest(25,
    21,
    4);
Smallest(2,
    2,
    2);