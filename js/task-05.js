const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output"); 

inputName.addEventListener("input", updateNameOutput); 

function updateNameOutput() {
  const name = inputName.value.trim(); 

  if (name === "") {
    nameOutput.textContent = "Anonymous"; 
  } else {
        nameOutput.textContent = name; 
        }
}