import { cardComponent } from "../components/cardComponent.js";
import {filterItems} from "../scripts/filterController.js";

const extensionsList = document.getElementById("extensionsList");
const topbarStatesButtons = document.querySelectorAll(".states > button");
const buttonTheme = document.getElementById("#themeIcon");

if (localStorage.getItem("state") === null) {
  localStorage.setItem("state", "all");
}
if (localStorage.getItem("state") === "all") {
  topbarStatesButtons[0].classList.add("active");
} else if (localStorage.getItem("state") === "active") {
  topbarStatesButtons[1].classList.add("active");
} else if (localStorage.getItem("state") === "inactive") {
  topbarStatesButtons[2].classList.add("active");
}


if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "dark");
}

//Cargamos los datos del JSON
fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const card = cardComponent(item);
      extensionsList.appendChild(card);
    });
    filterItems(localStorage.getItem("state"));

  })
  .catch((err) => {
    console.error("Error al cargar JSON:", err);
  });


if (localStorage.getItem("theme") === "dark") {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
}
