function solve() {

    const button = document.querySelector("#exercise button")

    const buyButton = document.querySelector("#exercise button:last-child")


    button.addEventListener('click', parseFurnitureInput);
    Array.from(document.querySelectorAll('input[type = "checkbox"]'))
        .forEach(checkBox => checkBox.removeAttribute('disabled'))


    function buySelectedFurniture() {
        const checkBoxes = Array.from(document.querySelectorAll('input[type = "checkbox"]:checked'));

        let cart = checkBoxes
            .map(mapCheckBoxToObject).reduce((acc, curr) => {
                    acc.names.push(curr.name);
                    acc.price += curr.price;
                    acc.avgDecFactor += curr.decFactor ;
                    return acc;
                },
                {
                    names: [],
                    price: 0,
                    avgDecFactor: 0
                });

        cart.avgDecFactor = cart.avgDecFactor / cart.names.length;

        const cartTextArea = document.querySelector("#exercise textarea:nth-of-type(2)");
        cartTextArea.value = 
            `Bought furniture: ${cart.names.join(", ")}\n` +
            `Total price: ${cart.price.toFixed(2)}\n` +
            `Average decoration factor: ${cart.avgDecFactor}\n`
        
        

        console.log(cart);
    }

    function mapCheckBoxToObject(checkBox) {
        const row = checkBox.parentElement.parentElement;
        const name = row.querySelector("td:nth-of-type(2)").innerText;
        const price = Number(row.querySelector("td:nth-of-type(3)").innerText);
        const decFactor = Number(row.querySelector("td:nth-of-type(4)").innerText);

        return {name, price, decFactor};
    }


    buyButton.addEventListener('click', buySelectedFurniture);

    function parseFurnitureInput() {
        const input = JSON.parse(document.querySelector("#exercise textarea").value);
        const tableBody = document.querySelector("tbody")

        input
            .map((furniture) => {
                const row = document.createElement("tr");


                const imageCell = document.createElement("td");
                const image = document.createElement("img")
                image.src = furniture.img;
                imageCell.appendChild(image)


                const nameCell = document.createElement("td");
                nameCell.textContent = furniture.name;

                const priceCell = document.createElement("td");
                priceCell.textContent = furniture.price

                const factorCell = document.createElement("td");
                factorCell.textContent = furniture.decFactor

                const markCell = document.createElement("td");
                const checkBox = document.createElement("input")
                checkBox.setAttribute("type", "checkbox");
                markCell.appendChild(checkBox);


                row.appendChild(imageCell);
                row.appendChild(nameCell);
                row.appendChild(priceCell);
                row.appendChild(factorCell);
                row.appendChild(markCell);
                return row;
            })
            .forEach(row => tableBody.appendChild(row));
    }


}