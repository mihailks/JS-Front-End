function splitter(text) {
    let wordsAsArr=[];
    let currentWord="";
    for (let i = 0; i < text.length; i++) {
            let currentLetter = text[i].charCodeAt();
        if (currentLetter>=65 && currentLetter<=90){
            wordsAsArr.push(currentWord);
            currentWord="";
            currentWord+=text[i];
        } else {
            currentWord+=text[i];
        }
    }
    wordsAsArr.push(currentWord);
    wordsAsArr.shift();
    console.log(wordsAsArr.join(", "));
}

splitter('SplitMeIfYouCanHaHaYouCantOrYouCan');