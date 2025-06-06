export function switchTab() {
  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".main-container");

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove 'active from all buttons and contents

      buttons.forEach((btn) => btn.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      // Add 'active' to clicked button and its tab
      button.classList.add("active");
      contents[index].classList.add("active");
    });
  });
}
