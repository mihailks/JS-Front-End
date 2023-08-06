function solve() {

    const BASE_URL = "http://localhost:3030/jsonstore/grocery/";

    const addButton = document.querySelector('#add-product')
    const mainUpdateButton = document.querySelector('#update-product')
    const loadButton = document.querySelector('#load-product')

    loadButton.addEventListener('click', loadProductsHandler)
    addButton.addEventListener('click', addProductsHandler)
    mainUpdateButton.addEventListener('click', mainUpdateHandler)


    //container TR
    const productContainer = document.querySelector("#tbody");
    let testId;

    async function loadProductsHandler(e) {
        e.preventDefault()
        const products = await (await fetch(BASE_URL)).json()
        Object.values(products).forEach(product => {
            const tr = document.createElement('tr')
            productContainer.appendChild(tr)

            createElement('td', tr, product.product, ['name'])
            createElement('td', tr, product.count, ['count-product'])
            createElement('td', tr, product.price, ['product-price'])

            tr.id = product._id

            const buttonContainer = createElement('td', tr, null, ['btn']);
            const updateButton = createElement('button', buttonContainer, 'Update', ['update']);
            const deleteButton = createElement('button', buttonContainer, 'Delete', ['delete']);


            deleteButton.addEventListener('click', deleteHandler)
            updateButton.addEventListener('click', updateHandler)

        })
    }

    async function addProductsHandler(e) {
        e.preventDefault()

        const product = document.querySelector('#product').value
        const count = document.querySelector('#count').value
        const price = document.querySelector('#price').value

        console.log()

        await fetch(BASE_URL, {
            method: 'POST',
            body: JSON.stringify({product, count, price})
        })
        // product = ""
        await loadProductsHandler(e);
    }

    async function deleteHandler(e) {
        e.preventDefault()
        const currentId = e.currentTarget.parentElement.parentElement.id
        await fetch(`${BASE_URL}${currentId}`, {
            method: "DELETE"
        })
        await loadProductsHandler(e);
    }


    async function updateHandler(e) {
        e.preventDefault()
        testId = e.currentTarget.parentElement.parentElement.id
        const elements = e.currentTarget.parentElement.parentNode;

        const [name, count, price] = Array.from(elements.children)

        document.querySelector('#product').value = name.innerText
        document.querySelector('#count').value = count.innerText
        document.querySelector('#price').value = price.innerText

        mainUpdateButton.disabled = false;
        addButton.disabled = true;

    }

    async function mainUpdateHandler() {

        const product = document.querySelector('#product').value
        const count = document.querySelector('#count').value
        const price = document.querySelector('#price').value


        await fetch(`${BASE_URL}${testId}`, {
            method: "PATCH",
            body: JSON.stringify({product, count, price})
        })
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

solve()