function extractText() {
  const extractText = Array.from(document.querySelectorAll("li"));

  const text = extractText.map((item) => item.textContent).join("\n");
  
  document.querySelector('textarea').value = text;


}
