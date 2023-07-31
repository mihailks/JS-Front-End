function sumTable() {
    const elements = 
        Array.from(document
            .querySelectorAll("td:nth-child(even):not([id*=\"sum\"])"))

    document.getElementById("sum").textContent = elements.reduce((acc, curr) => {
        acc += Number(curr.textContent);
        return acc;
    }, 0);
    
}