function addItem() {

    const value = document.querySelector("#newItemText").value;


    // document.querySelector("ul").innerHTML+=`<li>${value}</li>`

    const itemToadd = document.createElement("li");
    itemToadd.textContent = value;


    document.querySelector("ul").appendChild(itemToadd);


}