function solve() {
    const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

    const loadButton = document.querySelector('#load-vacations')
    loadButton.addEventListener('click', loadHandler);

    const addButton = document.querySelector('#add-vacation')
    addButton.addEventListener('click', addHandler);


    const editButton = document.querySelector('#edit-vacation')



    let testId;

    //LOAD VACATIONS
    async function loadHandler(e) {
        e.preventDefault()
        const vacations = await (await fetch(BASE_URL)).json()

        Object.values(vacations).forEach(vacation => {
            const mainVacationContainer = document.querySelector('#list')
            const vacationContainer = createElement('div', mainVacationContainer, null, ['container']);
            createElement('h2', vacationContainer, vacation.name)
            createElement('h3', vacationContainer, vacation.date)
            createElement('h3', vacationContainer, vacation.days)

            vacationContainer.id = vacation._id

            const changeButton = createElement('button', vacationContainer, 'Change', ['change-btn'])
            const doneButton = createElement('button', vacationContainer, 'Done', ['done-btn'])

            changeButton.addEventListener('click', changeHandler)
            doneButton.addEventListener('click', deleteHandler)


        });
    }

    //ADD VACATION
    async function addHandler(e) {
        e.preventDefault()
        const name = document.querySelector('#name').value;
        const days = document.querySelector('#num-days').value;
        const date = document.querySelector('#from-date').value;

        console.log(name)
        console.log(days)
        console.log(date)

        await fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify({name, date, days})
        })


        document.querySelector('#name').value = "";
        document.querySelector('#num-days').value = "";
        document.querySelector('#from-date').value = "";
        await loadHandler(e)
    }

    //DELETE VACATION
    async function deleteHandler(e) {
        const currentId = e.currentTarget.parentElement.id
        console.log(currentId);

        await fetch(`${BASE_URL}${currentId}`, {
            method: "DELETE"
        })
        await loadHandler(e)
    }


    //TRANSFER TO FIELDS--------------------------
    function changeHandler(e) {
        editButton.disabled = false;
        addButton.disabled = true;

        testId = e.currentTarget.parentElement.id;
        const temp = e.currentTarget.parentNode;
        const [name, days, date] = Array.from(temp.children)

        console.log(name.innerText)
        console.log(days.textContent)
        console.log(date.textContent)


        document.querySelector('#name').value = name.innerText;
        document.querySelector('#num-days').value = date.textContent;
        document.querySelector('#from-date').value = days.textContent;


        editButton.addEventListener('click', editHandler);
    }

    async function editHandler(e){
        e.preventDefault()
        const name = document.querySelector('#name').value;
        const days = document.querySelector('#num-days').value;
        const date = document.querySelector('#from-date').value;

        console.log(testId)

        await fetch(`${BASE_URL}${testId}`, {
            method: "PUT",
            body: JSON.stringify({name, days, date})
        })

        editButton.disabled = true;
        addButton.disabled = false;

        
    }





    function createElement(type, parentNode, content, classes, id, attribute, useInnerHtml) {
        const htmlElement = document.createElement(type);
        if (content && useInnerHtml) {
            htmlElement.innerHTML = content;
        } else {
            if (content && type !== 'input') {
                htmlElement.textContent = content;
            }

            if (content && type === 'input') {
                htmlElement.value = content;
            }
        }

        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes)
        }

        if (id) {
            htmlElement.id = id;
        }

        //{src, link, href, http}
        if (attribute) {
            for (const key in attribute) {
                // htmlElement.setAttribute(key,attribute[key])
                htmlElement[key] = attribute[key];
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }
        return htmlElement;
    }
}

solve();
