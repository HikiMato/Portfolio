const hamburger = document.getElementById("hamburger");
const anchors = document.getElementById("anchors");

hamburger.addEventListener("click", () => {
  anchors.classList.toggle("show");
});
