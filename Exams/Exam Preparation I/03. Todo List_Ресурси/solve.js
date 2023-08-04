function attachEvents() {

    const URL = "http://localhost:3030/jsonstore/tasks/";

    const title = document.querySelector('#title')
    const addButton = document.querySelector('#add-button')
    const loadButton = document.querySelector('#load-button')
    const todoListContainer = document.querySelector('#todo-list')

    loadButton.addEventListener('click', loadItemsHandler)
    addButton.addEventListener('click', addItemsHandler)

    //GET
    async function loadItemsHandler(e) {
        e.preventDefault();
        todoListContainer.innerHTML = "";
        try {
            const tasks = await (await fetch(URL)).json();
            Object.values(tasks).forEach(task => {
                const li = document.createElement('li')
                const span = document.createElement('span')
                const removeBtn = document.createElement('button')
                const editBtn = document.createElement('button')
                li.id = task._id;

                removeBtn.addEventListener('click', deleteTaskHandler);
                editBtn.addEventListener('click', loadEditFormHandler);

                span.textContent = task.name;
                removeBtn.textContent = 'Remove'
                editBtn.textContent = "Edit"
                li.appendChild(span);
                li.appendChild(removeBtn);
                li.appendChild(editBtn);
                todoListContainer.appendChild(li)
            })
        } catch (e) {
            console.error(e)
        }

    }

    //POST
    async function addItemsHandler(e) {
        e.preventDefault();

        const name = document.querySelector('#title').value;
        createTask(name);
        await fetch(URL, {
            method: "POST",
            body: JSON.stringify({name})
        })
    }

    async function deleteTaskHandler(e) {

        const id = e.currentTarget.parentElement.id;
        console.log(`${URL}${id}`)
        await fetch(`${URL}${id}`, {
            method: "DELETE"
        });


    }

    function loadEditFormHandler(e) {
        const liParent = e.currentTarget.parentNode;

        const [span, _removeBtn, editBtn] = Array.from(liParent.children);
        const editInput = document.createElement('input');
        editInput.value = span.innerText;
        liParent.prepend(editInput);
        const submitButton = document.createElement('button')
        submitButton.textContent= 'Submit';
        submitButton.addEventListener('click', submitTaskHandler)
        liParent.appendChild(submitButton);
        span.remove();
        editBtn.remove();
    }

    async function submitTaskHandler(e) {
        const name = document.querySelector('li>input').value;
        const id = e.currentTarget.parentNode.id;
        await fetch(`${URL}${id}`, {
            method: "PATCH",
            body: JSON.stringify({name})
        })
    }


    function createTask(name) {
        const li = document.createElement('li')
        const span = document.createElement('span')
        const removeBtn = document.createElement('button')
        const editBtn = document.createElement('button')
        span.textContent = name;
        removeBtn.textContent = 'Remove'
        editBtn.textContent = "Edit"
        li.appendChild(span);
        li.appendChild(removeBtn);
        li.appendChild(editBtn);
        todoListContainer.appendChild(li)
    }

}

attachEvents();
