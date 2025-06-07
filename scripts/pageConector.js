import { openCloseSidebar } from "./sidebar.js";
import { scrollEfect } from "../function/scrollEffectHeader.js";

// connect pages
export function connectSections() {
  const currentPath = window.location.pathname;
  const isInPagesFolder = currentPath.includes("/pages/");

  const basePath = isInPagesFolder ? "../pages/" : "./pages/";

  fetch(`${basePath}header.html`)
    .then((res) => res.text())
    .then((data) => {
      document.querySelector(".header").innerHTML = data;
      openCloseSidebar();
      scrollEfect();
      //    console.log(document.querySelector('.header-learge'))
    })
    .catch((error) => {
      console.log(error);
    });

  fetch(`${basePath}footer.html`)
    .then((res) => res.text())
    .then((data) => {
      document.querySelector(".footer").innerHTML = data;
      // newsletterValidation()
    });
}
