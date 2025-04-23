import { cardComponent } from "./components/cardComponent.js";

const app = document.getElementById("extensionsList");

fetch("./data.json") // también puede ser una URL externa
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item) => {
      const card = cardComponent(item);
      app.appendChild(card);
    });
  })
  .catch((err) => {
    console.error("Error al cargar JSON:", err);
  });

