function deleteByEmail() {

  const email = document.querySelector('input[name ="email"]').value;

  const emailBoxes = Array.from(
    document.querySelectorAll("td:nth-child(even)")
  );

  const userEmailBox = emailBoxes.find((box) => box.textContent === email);

  const result = document.getElementById("result");


  console.log(userEmailBox)

  if (userEmailBox) {
    
    userEmailBox.parentElement.remove();

        result.textContent = 'Deleted.'
  } else {
    result.textContent = 'Not found.'
  }
}
