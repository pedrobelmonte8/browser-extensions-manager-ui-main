const topbarStatesButtons = document.querySelectorAll(".states > button");

let filterValueGlobal = "all"; 

topbarStatesButtons.forEach((button) => {

    button.addEventListener("click", () => {
    const filterValue = button.getAttribute("data-value");

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

const filterItems = (filterValue) => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardCheckbox = card.querySelector("input[type='checkbox']");
    
    if (filterValue === "all") {
      card.style.display = "flex"; // Show all items
    } else if (filterValue === "active" && cardCheckbox.checked) {
      card.style.display = "flex"; // Show active items
    } else if (filterValue === "inactive" && !cardCheckbox.checked) {
      card.style.display = "flex"; // Show inactive items
    } else {
      card.style.display = "none"; // Hide everything else
    }

  });
};
