function extract(content) {
    content = document.querySelector("#content").innerText
    let printStr = "";
    
    for (let i = 0; i < content.length; i++) {
        if (content.charAt(i) === '(') {
            i++;
            while (content.charAt(i) !== ')') {
                printStr += (content.charAt(i));
                i++;
            }
            printStr += (", ");
        }
    }
    return printStr.slice(0, printStr.length - 2);

}