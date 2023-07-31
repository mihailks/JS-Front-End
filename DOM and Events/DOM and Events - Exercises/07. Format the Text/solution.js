function solve() {
    const inputText = document.querySelector('#input').value.split(".");
    inputText.pop();
    console.log(inputText);

    const container = document.querySelector("#output");
    
    while (inputText.length > 0) {
        const p = document.createElement("p")
        p.textContent = inputText
            .splice(0, 3)
            .map((text)=> text.trim())
            .join(".");
        p.textContent+="."
        container.appendChild(p);
    }
    
    
    
    
}