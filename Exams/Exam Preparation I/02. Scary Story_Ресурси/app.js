window.addEventListener("load", solve);

function solve() {

    const storyState = {
        firstName: null,
        lastName: null,
        age: null,
        storyTitle: null,
        genre: null,
        story: null
    }

    const inputDomSelectors = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        age: document.getElementById('age'),
        storyTitle: document.getElementById('story-title'),
        genre: document.getElementById('genre'),
        story: document.getElementById('story')
    }

    const otherDomSelectors = {
        publishButton: document.getElementById('form-btn'),
        preViewList: document.getElementById('preview-list'),
        mainContainer: document.getElementById('main')
    }

    otherDomSelectors.publishButton.addEventListener('click', publishStoryHandler);

    function publishStoryHandler(e) {
        const allFieldsHaveValue = Object.values(inputDomSelectors)
            .every(input => input.value !== '');
        if (!allFieldsHaveValue) {
            return;
        }


        const {firstName, lastName, age, storyTitle, genre, story} = inputDomSelectors
        console.log(firstName.value)
        const li = createElement('li', otherDomSelectors.preViewList, null, ['story-info'], null, null)
        const article = createElement("article", li)
        const h4 = createElement('h4', article, `Name: ${firstName.value} ${lastName.value}`);
        const p1 = createElement('p', article, `Age: ${age.value}`);
        const p2 = createElement('p', article, `Title: ${storyTitle.value}`);
        const p3 = createElement('p', article, `Genre: ${genre.value}`);
        const p4 = createElement('p', article, `${story.value}`);

        const saveButton = createElement('button', li, 'Save Story', ['save-btn'])
        const editButton = createElement('button', li, 'Edit Story', ['edit-btn'])
        const deleteButton = createElement('button', li, 'Delete Story', ['delete-btn'])

        editButton.addEventListener('click', editStoryHandler);
        deleteButton.addEventListener('click', deleteStoryHandler);
        saveButton.addEventListener('click', saveStoryHandler);

        for (const key in inputDomSelectors) {
            storyState[key] = inputDomSelectors[key].value;
        }
        Object.values(inputDomSelectors).forEach(input => input.value = "");
        otherDomSelectors.publishButton.disabled = true;
    }

    function editStoryHandler() {
        for (const key in inputDomSelectors) {
            inputDomSelectors[key].value = storyState[key];
        }
        otherDomSelectors.publishButton.disabled = false;
        otherDomSelectors.preViewList.innerHTML = "";
        createElement('h3', otherDomSelectors.preViewList, 'Preview')
    }
    
    function deleteStoryHandler(){
        otherDomSelectors.publishButton.disabled = false;
        otherDomSelectors.preViewList.innerHTML = "";
        createElement('h3', otherDomSelectors.preViewList, 'Preview')
    }
    
    function saveStoryHandler(){
        otherDomSelectors.mainContainer.innerHTML = "";
        const h = document.createElement('h1')
            h.innerText = "YOUR SCARY STORY IS SAVED";
        document.getElementById('main').appendChild(h)
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