function charactersInRange(firstChar, secondChar) {
    const getFirstCharAsciiCode = (char) => char.charCodeAt(0);

    let firstCharCode = getFirstCharAsciiCode(firstChar);
    let secondCharCode = getFirstCharAsciiCode(secondChar);

    let min = Math.min(firstCharCode, secondCharCode);
    let max = Math.max(firstCharCode, secondCharCode);
    let charsAsArr = [];

    for (let i = min + 1; i < max; i++) {
        charsAsArr.push(String.fromCharCode(i))
    }
    return charsAsArr.join(" ");
}