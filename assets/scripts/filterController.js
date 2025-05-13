const topbarStatesButtons = document.querySelectorAll(".states > button");
const extensionsContainer = document.querySelector("#extensionsList");
let filterValueGlobal = "all";

topbarStatesButtons.forEach((button) => {

    button.addEventListener("click", () => {
    const filterValue = button.getAttribute("data-value");
      filterValueGlobal = filterValue; // Store the filter value globally

    // Remove active class from all buttons
    topbarStatesButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to the clicked button
    button.classList.add("active");

    // Filter the items based on the selected filter
    filterItems(filterValue);
  });
});

extensionsContainer.addEventListener("click", (event) => {
  if (event.target.tagName === "INPUT") {
    const toggleCard = event.target.closest(".checkboxToggle");
    if (toggleCard) {
      filterItems(filterValueGlobal);
    }
  }
});

const filterItems = (filterValueGlobal) => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardCheckbox = card.querySelector("input[type='checkbox']");
    
    if (filterValueGlobal === "all") {
      card.style.display = "flex"; // Show all items
    } else if (filterValueGlobal === "active" && cardCheckbox.checked) {
      card.style.display = "flex"; // Show active items
    } else if (filterValueGlobal === "inactive" && !cardCheckbox.checked) {
      card.style.display = "flex"; // Show inactive items
    } else {
      card.style.display = "none"; // Hide everything else
    }

    localStorage.setItem("state", filterValueGlobal); // Store the current

  });
};
