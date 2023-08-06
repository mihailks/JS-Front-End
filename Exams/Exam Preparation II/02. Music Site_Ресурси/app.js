window.addEventListener('load', solve);

function solve() {

    const addButton = document.querySelector('#add-btn');
    addButton.addEventListener('click', addSongHandler);

    const mainParent = document.querySelector('.all-hits-container');
    const mainSaveParent = document.querySelector('.saved-container');
    const savedSongsDiv = document.querySelector('.saved-container')


    let totalLikes = 0;
    const inputDomSelectors = {
        genre: document.querySelector('#genre'),
        name: document.querySelector('#name'),
        author: document.querySelector('#author'),
        date: document.querySelector('#date')
    }

    const saveState = {
        genre: null,
        name: null,
        author: null,
        date: null
    }


    //ADDING A SONG--------------
    function addSongHandler(e) {
        e.preventDefault()
        const allFieldsHaveValue = Object.values(inputDomSelectors)
            .every(input => input.value !== '');
        if (!allFieldsHaveValue) {
            return;
        }

        const {genre, name, author, date} = inputDomSelectors;

        const divContainer = createElement('div', mainParent, null, ['hits-info']);

        // const test = document.createElement('img')
        // test.setAttribute('scr', './static/img/img.png')
        // divContainer.appendChild(test)

        const imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';
        divContainer.appendChild(imgElement);

        createElement('h2', divContainer, `Genre: ${genre.value}`)
        createElement('h2', divContainer, `Name: ${name.value}`)
        createElement('h2', divContainer, `Author: ${author.value}`)
        createElement('h3', divContainer, `Date: ${date.value}`)

        const saveButton = createElement('button', divContainer, 'Save song', ['save-btn'])
        const likeButton = createElement('button', divContainer, 'Like song', ['like-btn'])
        const deleteButton = createElement('button', divContainer, 'Delete', ['delete-btn'])

        likeButton.addEventListener('click', likesHandler);

        saveButton.addEventListener('click', saveHandler);
        for (const key in inputDomSelectors) {
            saveState[key] = inputDomSelectors[key].value;
        }
        deleteButton.addEventListener('click', deleteHandler)
        Object.values(inputDomSelectors).forEach(input => input.value = "");
    }

    function likesHandler(e) {
        totalLikes++;
        document.querySelector('.likes p').innerHTML = `Total Likes: ${totalLikes}`;

        const temp = e.currentTarget.disabled = true;
    }

    function saveHandler(e) {
        //delete the song
        // e.currentTarget.parentElement.remove();

        const {genre, name, author, date} = saveState;

        const divContainer = createElement('div', mainSaveParent, null, ['hits-info']);

        const imgElement = document.createElement('img');
        imgElement.src = './static/img/img.png';
        divContainer.appendChild(imgElement);

        createElement('h2', divContainer, `Genre: ${genre}`)
        createElement('h2', divContainer, `Name: ${name}`)
        createElement('h2', divContainer, `Author: ${author}`)
        createElement('h3', divContainer, `Date: ${date}`)

        const deleteButton = createElement('button', divContainer, 'Delete', ['delete-btn'])
        deleteButton.addEventListener('click', deleteHandler)


        // const songDiv = document.querySelector('.hits-info');
        // const saveButton = document.querySelector('.save-btn');
        // const likeButton = document.querySelector('.like-btn');
        // songDiv.removeChild(saveButton);
        // songDiv.removeChild(likeButton);
        // savedSongsDiv.appendChild(songDiv);
    }

    function deleteHandler(e){
        totalLikes--;
        document.querySelector('.likes p').innerHTML = `Total Likes: ${totalLikes}`;
        e.currentTarget.parentElement.remove();
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