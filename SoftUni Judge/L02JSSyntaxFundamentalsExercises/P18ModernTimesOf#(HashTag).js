function findWords(text) {
    let textAsArr = text.split(" ");

    for (let word of textAsArr) {
        if (word[0] === "#" && word.length>1) {

            let flag = true;

            for (let i = 1; i < word.length; i++) {
                let current = word.toLowerCase().charCodeAt(i);
                if (!(current >= 97 && current <= 122)) {
                    flag = false;
                    break;
                }

            }

            if (flag===true) {
                console.log(word.slice(1));
            }
        }
    }
}

findWords('Nowadays everyone uses # to tag a #special word in #socialMedia');
