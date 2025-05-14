const buttonTheme = document.getElementById("themeIcon");
const body = document.body;
buttonTheme.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  // Toggle the theme class on the body
  document.body.classList.toggle("dark-theme", newTheme === "dark");

  // Store the new theme in localStorage
  localStorage.setItem("theme", newTheme);

  // Update the icon based on the theme
  buttonTheme.src = newTheme === "dark" ? "./assets/images/icon-sun.svg" : "./assets/images/icon-moon.svg";

  body.classList.toggle("dark-theme", newTheme === "dark");
  body.classList.toggle("light-theme", newTheme === "light");
});
