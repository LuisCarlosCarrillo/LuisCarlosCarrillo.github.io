const root = document.documentElement;
const boton = document.querySelector(".theme-toggle");

function synchronizeButton() {
  boton.setAttribute("aria-pressed", root.classList.contains("dark"));
}

boton.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  synchronizeButton();
});

synchronizeButton();
