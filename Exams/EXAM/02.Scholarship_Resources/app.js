window.addEventListener("load", solve);

function solve() {
  const inputs = {
    studentsName: document.getElementById("student"),
    universityInput: document.getElementById("university"),
    scoreInput: document.getElementById("score"),
  };

  const nextBtn = document.getElementById("next-btn");
  nextBtn.addEventListener("click", addHandler);

  function addHandler(e) {
    e.preventDefault();

    const students = inputs.studentsName.value;
    const university = inputs.universityInput.value;
    const score = inputs.scoreInput.value;

    if (students === "" || university === "" || score === "") {
      return;
    }

    const ulPreview = document.getElementById("preview-list");

    const liClass = document.createElement("li");
    liClass.classList.add("application");

    const article = document.createElement("article");

    const h4 = document.createElement("h4");
    h4.textContent = `${students}`;

    const p1 = document.createElement("p");
    p1.textContent = `University: ${university}`;

    const p2 = document.createElement("p");
    p2.textContent = `Score: ${score}`;

    const editBtn = document.createElement("button");
    editBtn.classList.add("action-btn");
    editBtn.classList.add("edit");
    editBtn.textContent = "edit";

    const applyBtn = document.createElement("button");
    applyBtn.classList.add("action-btn");
    applyBtn.classList.add("apply");
    applyBtn.textContent = "apply";

    ulPreview.appendChild(liClass);
    liClass.appendChild(article);
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    liClass.appendChild(editBtn);
    liClass.appendChild(applyBtn);

    inputs.studentsName.value = "";
    inputs.universityInput.value = "";
    inputs.scoreInput.value = "";

    editBtn.addEventListener("click", edit);

    function edit() {
      nextBtn.disabled = false;
      inputs.studentsName.value = students;
      inputs.universityInput.value = university;
      inputs.scoreInput.value = score;
      ulPreview.removeChild(liClass);

    }
    
    applyBtn.addEventListener("click", applyHandler);

    function applyHandler() {

      const ulCandidates = document.getElementById("candidates-list");
      liClass.removeChild(editBtn);
      liClass.removeChild(applyBtn);
      ulCandidates.appendChild(liClass);
      nextBtn.disabled = false;

    }
  }
}
  