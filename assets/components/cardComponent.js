export function cardComponent({ name, description, logo, isActive }) {
  // Create a card element with the provided properties
  const card = document.createElement("div");
  card.className = "card";

  const cardHeader = document.createElement("div");
  cardHeader.className = "card-header";
  const cardHeaderText = document.createElement("div");
  cardHeaderText.className = "card-header-text";

  const cardFotter = document.createElement("div");
  cardFotter.className = "card-footer";

  card.appendChild(cardHeader);
  card.appendChild(cardFotter);

  // Create an image element for the logo
  const img = document.createElement("img");
  img.src = logo;
  img.alt = name;
  img.style.width = "50px";

  // Create a heading element for the title
  const h2 = document.createElement("h2");
  h2.textContent = name;

  // Create a paragraph element for the description
  const p = document.createElement("p");
  p.textContent = description;

  //Toggle the card's active state
  const label = document.createElement("label");
  label.className = "switch";
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = isActive;
  input.className="checkboxToggle";
  const span = document.createElement("span");
  span.className = "slider";
  label.appendChild(input);
  label.appendChild(span);

  //Button remove
  const button = document.createElement("button");
  button.className = "btn-remove";
  button.textContent = "Remove";
  button.addEventListener("click", () => {
    card.remove();
  });

  // Append the elements to the card
  cardHeader.appendChild(img);
  cardHeaderText.appendChild(h2);
  cardHeaderText.appendChild(p);
  cardHeader.appendChild(cardHeaderText);



  cardFotter.appendChild(button);
  cardFotter.appendChild(label);

  return card;
}
