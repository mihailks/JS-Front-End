function attachEvents() {
    const GET_POST_URL = "http://localhost:3030/jsonstore/phonebook";
    const DELETE_URL = "http://localhost:3030/jsonstore/phonebook/";


    document.querySelector("#btnLoad").addEventListener("click", loadContacts);
    document.querySelector("#btnCreate").addEventListener("click", createContact);

    async function loadContacts() {
        const contacts = await (await fetch(GET_POST_URL)).json();
        Object.values(contacts).forEach(contact => {
            const personId = contact._id;

            const li = document.createElement('li');
            const deleteButton = document.createElement("button")
            deleteButton.textContent = "Delete"
            deleteButton.value = personId;
            deleteButton.addEventListener('click', deleteContact)


            li.textContent = `${contact.person}: ${contact.phone}`;
            li.appendChild(deleteButton)
            document.querySelector("#phonebook").appendChild(li);
        })
    }

    async function deleteContact(e) {

        await fetch(`${DELETE_URL}${e.currentTarget.value}`, {
            method: "DELETE"
        })
    }

    async function createContact() {

        let person = document.querySelector("#person").value;
        let phone = document.querySelector("#phone").value;
        await fetch(GET_POST_URL, {
            method: "POST",
            body: JSON.stringify({person, phone})
        });
        document.querySelector("#person").value = "";
        document.querySelector("#phone").value = "";

        await loadContacts();

    }


}

attachEvents();