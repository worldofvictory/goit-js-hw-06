const input = document.querySelector("#validation-input");
input.addEventListener("blur", handleBlur);
function handleBlur(event) {
  const dataLength = Number(input.getAttribute("data-length")); 
  const inputLength = event.target.value.length; 

  if (inputLength === dataLength) {
    input.classList.remove("invalid"); 
    input.classList.add("valid"); 
  } else {
    input.classList.remove("valid"); 
    input.classList.add("invalid"); 
  }
}
