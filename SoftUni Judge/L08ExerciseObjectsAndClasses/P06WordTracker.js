function solve(input) {
    const [searchWords, ...words] = input; //take the first

    const wordOccurances = searchWords.split(" ").reduce((acc, curr) => {
        acc[curr] = 0;
        return acc;
    }, {});

    words.forEach(word => {
        if (wordOccurances.hasOwnProperty(word)) {
            wordOccurances[word] += 1;
        }
    });

    let sortedArr = Object.keys(wordOccurances).sort((a, b) => {
        return wordOccurances[b] - wordOccurances[a];
    });

    for (const wordOccurance of sortedArr) {
        console.log(`${wordOccurance} - ${wordOccurances[wordOccurance]}`)
    }
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
])

solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])