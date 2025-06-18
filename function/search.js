function setupSearch() {
  InputId, gridElement, dataItems, createCardFn, (searchField = ["title"]);
}
{
  const inputElement = document.getElementById(inputId);

  if (!inputElement) {
    console.error(`Input with ID "${inputId}" not found`);
    return;
  }

  function initializeSearch(items) {
    const searchTerm = inputElement.value.toLocaleLowerCase();

    if (!searchTerm) return items;

    return items.filter((item) =>
      searchTerm.some((field) =>
        (item[field] || "").toLocaleLowerCase().includes(searchTerm)
      )
    );
  }

  inputElement.addEventListener("input", () => {
    const filterdItems = initializeSearch(dataItems);
    const cardsHTML = filterdItems.map((item) => createCardFn(item)).join("");
    gridElement.innerHTML = cardsHTML;
  });
}
