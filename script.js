const boxes = document.querySelectorAll(".box");
const images = document.querySelector(".imgs");

boxes.forEach((box) => {
    box.addEventListener("dragover", e => {
        e.preventDefault();
     box.classList.add("active")
    })
    box.addEventListener("dragleave", () => {
        box.classList.remove("active");
    })
    box.addEventListener("drop", () => {
        box.appendChild(images);
        box.classList.remove("active");
    
    })
});