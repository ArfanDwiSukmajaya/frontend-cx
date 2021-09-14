// Back to top
const toTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("visible");
  } else {
    toTop.classList.remove("visible");
  }
});
