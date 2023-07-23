function solve(input) {
    let words = input.split(" ");

    let list = new Map();

    for (const element of words) {
        let word = element.toLowerCase().trim();
        if (list.has(word)) {
            list.set(word, list.get(word) + 1);
        } else {
            list.set(word, 1);
        }
    }

    let OddArr = Array.from(list).filter(([key, value]) => {
        return Number(value) % 2 != 0;
    });

    let result = "";
    for (let [key, value] of OddArr) {
        result += key + " ";
    }

    console.log(result);

}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')
solve('Cake IS SWEET is Soft CAKE sweet Food')