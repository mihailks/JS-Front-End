function solve() {

    const URL = "http://localhost:3030/jsonstore/tasks/";
    const addCourseButton = document.querySelector('#add-course')

    addCourseButton.addEventListener('click', addCourseHandler);
    const editCourseMainButton = document.querySelector('#edit-course')

    document.querySelector('#load-course').addEventListener('click', loadCoursesHandler);

    let testId;

    //LOAD COURSES--------------------------
    async function loadCoursesHandler(e) {
        const courses = await (await fetch(URL)).json();

        Object.values(courses).forEach(course => {

            const coursesContainer = document.querySelector('#list');
            const courseContainer = document.createElement('div')
            courseContainer.classList.add('container');
            coursesContainer.appendChild(courseContainer)

            courseContainer.id = course._id

            const titleCon = document.createElement('h2')
            titleCon.textContent = course.title;
            courseContainer.appendChild(titleCon);

            const typeCon = document.createElement('h3')
            typeCon.textContent = course.type;
            courseContainer.appendChild(typeCon);

            const teacherCon = document.createElement('h3')
            teacherCon.textContent = course.teacher;
            courseContainer.appendChild(teacherCon);

            const descriptionCon = document.createElement('h4')
            descriptionCon.textContent = course.description;
            courseContainer.appendChild(descriptionCon);


            const editButton = document.createElement('button')
            editButton.textContent = "Edit course"
            editButton.classList.add('edit-btn');
            courseContainer.appendChild(editButton);

            const finishButton = document.createElement('button')
            finishButton.textContent = "Finish course"
            finishButton.classList.add('finish-btn');
            courseContainer.appendChild(finishButton);

            editButton.addEventListener('click', editCoursesHandler);
            finishButton.addEventListener('click', finishCourseHandler);
        });
    }

    //ADD COURSE--------------------------
    async function addCourseHandler() {
        const title = document.querySelector('#course-name').value;
        const type = document.querySelector('#course-type').value;
        const teacher = document.querySelector('#teacher-name').value;
        const description = document.querySelector('#description').value;

        if (!(['Long', 'Medium', 'Short'].includes(type))) {
            return
        }
        if (!title || !type || !teacher || !description) {
            return
        }
        await fetch(URL, {
            method: "POST",
            body: JSON.stringify({title, type, teacher, description})
        })
    }


    //TRANSFER TO FIELDS--------------------------
    function editCoursesHandler(e) {
        editCourseMainButton.disabled = false;
        testId = e.currentTarget.parentElement.id;
        const temp = e.currentTarget.parentNode;
        const [title, type, teacher, description] = Array.from(temp.children)

        document.querySelector('#course-name').value = title.innerText
        document.querySelector('#course-type').value = type.innerText
        document.querySelector('#teacher-name').value = teacher.innerText
        document.querySelector('#description').value = description.innerText

        editCourseMainButton.addEventListener('click', putCoursesHandler);


    }
    //EDIT--------------------------
    async function putCoursesHandler(e) {

        const title = document.querySelector('#course-name').value;
        const type = document.querySelector('#course-type').value;
        const teacher = document.querySelector('#teacher-name').value;
        const description = document.querySelector('#description').value;

        await fetch(`${URL}${testId}`, {
            method: "PUT",
            body: JSON.stringify({title, type, teacher, description})
        })
    }

    //DELETE--------------------------
    async function finishCourseHandler(e) {
        const currentId = e.currentTarget.parentElement.id
        await fetch(`${URL}${currentId}`, {
            method: "DELETE"
        })
    }


}

solve();