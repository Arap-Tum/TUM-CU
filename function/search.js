export function setupSearch(
  inputId,
  gridElement,
  dataItems,
  createCardFn,
  searchFields = ["title"]
) {
  const inputElement = document.getElementById(inputId);

  if (!inputElement) {
    console.error(`Input with ID "${inputId}" not found.`);
    return;
  }

  function initializeSearch(items) {
    const searchTerm = inputElement.value.toLowerCase();
    if (!searchTerm) return items;

    return items.filter((item) =>
      searchFields.some((field) =>
        (item[field] || "").toLowerCase().includes(searchTerm)
      )
    );
  }

  inputElement.addEventListener("input", () => {
    const filteredItems = initializeSearch(dataItems);
    const cardsHTML = filteredItems.map((item) => createCardFn(item)).join("");
    gridElement.innerHTML = cardsHTML;
  });
}
