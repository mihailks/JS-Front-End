function attachEvents() {
    const URL = "http://localhost:3030/jsonstore/collections/students";
    document.querySelector("#submit").addEventListener('click', SeedStudent);
    
    async function SeedStudent() {

        const firstName = document.querySelector(`input[name="firstName"]`).value;
        const lastName = document.querySelector(`input[name="lastName"]`).value;
        const facultyNumber = document.querySelector(`input[name="facultyNumber"]`).value;
        const grade = document.querySelector(`input[name="grade"]`).value;
        
        if (!firstName||!lastName||!facultyNumber||!grade){
            return;
        }

        await fetch(URL, {
            method: "POST",
            body: JSON.stringify({firstName, lastName, facultyNumber, grade})
        })
        showStudents();
    }

    showStudents();

    async function showStudents() {
        const students = await (await fetch(URL)).json();

        Object.values(students).forEach(student => {

            const firstName = student.firstName
            const lastName = student.lastName
            const facultyNumber = student.facultyNumber
            const grade = student.grade

            const fName = document.createElement("td");
            fName.textContent = firstName;

            const LName = document.createElement("td");
            LName.textContent = lastName;

            const sNumber = document.createElement("td");
            sNumber.textContent = facultyNumber;

            const sGrade = document.createElement("td");
            sGrade.textContent = grade;

            const row = document.createElement("tr");
            row.appendChild(fName)
            row.appendChild(LName)
            row.appendChild(sNumber)
            row.appendChild(sGrade)
            document.querySelector("tbody").appendChild(row)
        })

    }
}

attachEvents();