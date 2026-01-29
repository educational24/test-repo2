let count = 0;

const counter = document.getElementById("counter");
const btnAdd = document.getElementById("add-btn");

btnAdd.addEventListener("click", () => {
    count++;
    counter.textContent = count;
})