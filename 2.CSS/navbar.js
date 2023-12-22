const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navBarLinks = document.getElementsByClassName("brand-links")[0];
toggleButton.addEventListener("click", () => {
  navBarLinks.classList.toggle("active");
});
