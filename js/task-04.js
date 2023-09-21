const buttonIn = document.querySelector("[data-action='increment']");
const buttonDs = document.querySelector("[data-action='decrement']");
const count = document.querySelector("#value");

buttonIn.addEventListener("click", increment);
buttonDs.addEventListener("click", decrement);
let counterValue = 0;


function increment() {
    counterValue = +1;
    updateCounterValue();
}
function decrement() {
    counterValue = -1;
    updateCounterValue();
}
    

function updateCounterValue() {
    count.textContent = counterValue;
    }