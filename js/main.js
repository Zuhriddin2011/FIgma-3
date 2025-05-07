const loading = document.getElementById("loading");
setTimeout(() => (loading.style.display = "none"), 2000);

let darkBtn = document.querySelector("#dark-btn");
let body = document.querySelector("body");
darkBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
