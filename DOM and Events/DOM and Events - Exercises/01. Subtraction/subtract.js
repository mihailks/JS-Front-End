function subtract() {
    const numberOne = Number(document.getElementById("firstNumber").value);
    const numberTwo = Number(document.getElementById("secondNumber").value);
    
   document.getElementById("result").textContent = Number(numberOne-numberTwo);
}