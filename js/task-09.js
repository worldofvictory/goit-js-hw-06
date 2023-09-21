function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const widget = document.querySelector(".widget"); 
const button = widget.querySelector(".change-color"); 
const colorSpan = widget.querySelector(".color"); 

button.addEventListener("click", changeBackgroundColor); 

function changeBackgroundColor() {
  const randomColor = getRandomHexColor(); 
  document.body.style.backgroundColor = randomColor; 
  colorSpan.textContent = randomColor; 
}

