const header =  document.querySelector("nav");

function scrollToTop() {
  window.scrollTo(0, 0);
}

scrollStick = () => {
  header.classList.toggle("sticky", window.scrollY > 0);
}
window.addEventListener("scroll", scrollStick);
