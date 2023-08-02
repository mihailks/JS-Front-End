function attachEvents() {
    const GET_BOOKS_URL = "http://localhost:3030/jsonstore/collections/books";
    const PUT_BOOKS_URL = "http://localhost:3030/jsonstore/collections/books/";

    document.querySelector("#form button").addEventListener('click', handleFormSubmission);
    document.querySelector("#loadBooks").addEventListener('click', loadBooks);

    async function handleFormSubmission(e) {

        const isEditing = document.querySelector("h3").textContent.includes("Edit");
        
        isEditing ? await updateBook(e) : await saveBook(e);

    }
    
    async function updateBook(e){
        const id = e.currentTarget.dataset.bookid;
        const title = document.querySelector(`#form input[name="title"]`).value;
        const author = document.querySelector(`#form input[name="author"]`).value;
    await fetch(`${PUT_BOOKS_URL}${id}`, {
        method: "PUT",
        body: JSON.stringify({title, author})
    })
    }
    
    async function saveBook(){

        const title = document.querySelector(`#form input[name="title"]`).value;
        const author = document.querySelector(`#form input[name="author"]`).value;

        if (!title || !author) {
            return;
        }

        await fetch(GET_BOOKS_URL, {
            method: "POST", body: JSON.stringify({title, author})
        });
    }


    async function loadBooks() {
        document.querySelector('tbody').innerHTML = "";
        const books = await (await fetch(GET_BOOKS_URL)).json();
        Object.entries(books).forEach(createAndAppendElement);
    }

    function createAndAppendElement([id,book]) {
        const title = document.createElement("td");
        title.textContent = book.title;

        const author = document.createElement("td");
        author.textContent = book.author;

        const editButton = document.createElement("button");
        editButton.addEventListener("click", fillEditForm);
        editButton.setAttribute("data-bookId", id)
        editButton.textContent = "Edit"

        const deleteButton = document.createElement("button");
        deleteButton.setAttribute("data-bookId", id)
        deleteButton.addEventListener("click", deleteBook);
        deleteButton.textContent = "Delete"

        const buttons = document.createElement("td");
        buttons.appendChild(editButton);
        buttons.appendChild(deleteButton);


        const row = document.createElement('tr')
        row.appendChild(title)
        row.appendChild(author)
        row.appendChild(buttons)

        document.querySelector("tbody").appendChild(row)
    }


    async function fillEditForm(e) {
        document.querySelector("h3").textContent = "Edit FORM";

        const title = e
            .currentTarget
            .parentElement
            .parentElement
            .querySelector("td:first-child").textContent;
        const author = e
            .currentTarget
            .parentElement
            .parentElement
            .querySelector("td:nth-child(2)").textContent;

        document.querySelector(`#form input[name="title"]`).value = title;
        document.querySelector(`#form input[name="author"]`).value = author
        document.querySelector("#form button").setAttribute('data-bookid',
            e.currentTarget.dataset.bookid)

    }
    
    async function deleteBook(e){
        const id = e.currentTarget.dataset.bookid;
        await fetch(`${PUT_BOOKS_URL}${id}`, {
            method: "DELETE"
        });
    }


}

attachEvents();