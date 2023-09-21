const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output"); 

nameInput.addEventListener("input", updateNameOutput); 

function updateNameOutput() {
  const name = nameInput.value.trim(); 

  if (name === "") {
    nameOutput.textContent = "Anonymous"; 
  } else {
        nameOutput.textContent = name; 
        }
}