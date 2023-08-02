function attachEvents() {
    const URL = "http://localhost:3030/jsonstore/messenger";
    
    document.querySelector("#submit").addEventListener("click", sendMessage);
    document.querySelector("#refresh").addEventListener("click", getMessages);
    
    async function getMessages() {
        const messages = await (await fetch(URL)).json();

        const messageBox = document.querySelector("#messages")
        messageBox.innerHTML = "";

        Object.values(messages).forEach((message) => {
            messageBox.textContent += `${message.author}: ${message.content}\n`
        });
        messageBox.textContent = messageBox.textContent.trim()
    }

    async function sendMessage() {
        const author = document.querySelector(`input[name="author"]`).value;
        const content = document.querySelector(`input[name="content"]`).value;

        const response = await fetch(URL, {
            method: "POST",
            body: JSON.stringify({author, content})
        })
    }
}

attachEvents();