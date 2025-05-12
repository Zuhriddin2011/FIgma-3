const loading = document.getElementById("loading");
setTimeout(() => (loading.style.display = "none"), 2000);

let darkBtn = document.querySelector("#dark-btn");
let body = document.querySelector("body");
darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});

let checkbox = document.querySelector("#checkbox");
let nav = document.querySelector("nav");

checkbox.addEventListener("click", () => {
  nav.classList.toggle("active");
});
