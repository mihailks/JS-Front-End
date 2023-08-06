window.addEventListener('load', solve);

function solve() {
    
    const inputDomSelectors = {
        title: document.querySelector('#title'),
        description: document.querySelector('#description'),
        label: document.querySelector('#label'),
        points: document.querySelector('#points'),
        assignee: document.querySelector('#assignee'),
    }
    const otherDomSelectors = {
        createButton: document.querySelector('#create-task-btn'),
        deleteButton: document.querySelector('#delete-task-btn'),
    }

    otherDomSelectors.createButton.addEventListener('click', createTaskHandler);
    
    function createTaskHandler(){
        // const allFieldsHaveValue = Object.values(inputDomSelectors)
        //     .every(input => input.value !== '');
        // if (!allFieldsHaveValue) {
        //     return;
        // }
        
        let taskIdCounter = 1;
        
        const{title,description,label,points,assignee} = inputDomSelectors;
        const sectionContainer = document.querySelector('#tasks-section')
        const tasksSContainer = createElement('article',sectionContainer,null,['task-card'],`task-${taskIdCounter}`)
        let labelClass = "";
        let labelContent = "";
        if (label.value === ["Feature"]){
            // labelClass = `${label.value} &#8865`
        } else if (label.value === "Low Priority Bug"){
            labelClass = [`task-card-label, low-priority`]
            // labelContent = `${label.value} &#9737`
        } else if (label.value === "High Priority Bug"){
            labelClass = [`task-card-label, high-priority`]
            // labelContent = `${label.value} &#9888`
        }
        
        // createElement('div',tasksSContainer,`${label.value}`,['hi']);
        const labelDom = document.createElement('div')
        labelDom.textContent = labelContent;
        labelDom.classList.add(...labelClass)
        tasksSContainer.appendChild(labelDom)
        
        
        createElement('h3',tasksSContainer,title.value,['task-card-title'])

        taskIdCounter++;
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