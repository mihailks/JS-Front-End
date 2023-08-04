window.addEventListener("load", solve);

function solve() {
    const publishButton = document.querySelector('#publish-btn');

    const taskState = {
        title: null,
        category: null,
        textAria: null
    }

    const uploadState = {
        title: null,
        category: null,
        textAria: null
    }

    const inputDomSelectors = {
        title: document.querySelector('#task-title'),
        category: document.querySelector('#task-category'),
        textAria: document.querySelector('#task-content')
    }


    publishButton.addEventListener('click', publishEventHandler);

    function publishEventHandler(e) {
        const allFieldsHaveValue = Object.values(inputDomSelectors)
            .every(input => input.value !== '');
        if (!allFieldsHaveValue) {
            return;
        }
        
        const {title, category, textAria} = inputDomSelectors

        const ulContainer = document.querySelector('#review-list');
        const li = createElement('li', ulContainer, null, ['rpost'])
        const articleContainer = createElement('article', li);

        createElement('h4', articleContainer, title.value)
        createElement('p', articleContainer, `Category: ${category.value}`)
        createElement('p', articleContainer, `Content: ${textAria.value}`)
        
        for (const key in inputDomSelectors) {
            taskState[key] = inputDomSelectors[key].value;
        }
        for (const key in inputDomSelectors) {
            uploadState[key] = inputDomSelectors[key].value;
        }
        
        const editButton = createElement('button', li, 'Edit', ['action-btn', 'edit'])
        const postButton = createElement('button', li, 'Post', ['action-btn', 'post'])

        editButton.addEventListener('click', editTaskHandler);
        postButton.addEventListener('click', postTaskHandler);

        Object.values(inputDomSelectors).forEach(input => input.value = "");
    }

    function editTaskHandler() {
        for (const key in inputDomSelectors) {
            inputDomSelectors[key].value = taskState[key];
        }
        document.querySelector('#review-list').innerHTML = "";
    }

    function postTaskHandler() {

        const {title, category, textAria} = uploadState
        
        const ulContainer = document.querySelector('#published-list');
        const li = createElement('li', ulContainer, null, ['rpost'])
        const articleContainer = createElement('article', li);

        createElement('h4', articleContainer, title)
        createElement('p', articleContainer, `Category: ${category}`)
        createElement('p', articleContainer, `Content: ${textAria}`)
        document.querySelector('#review-list').innerHTML = "";
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