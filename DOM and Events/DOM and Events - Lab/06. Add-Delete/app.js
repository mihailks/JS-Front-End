function addItem() {
  const value = document.querySelector("#newItemText").value;

  const itemToadd = document.createElement("li");
  itemToadd.textContent = value;
  const deleteButton = document.createElement("a");
  deleteButton.href = "#";
  deleteButton.textContent = "[Delete]";

  deleteButton.addEventListener("click", (e) => {
    e.target.parentElement.remove();

  });

  itemToadd.appendChild(deleteButton);

  document.querySelector("ul").appendChild(itemToadd);
}
