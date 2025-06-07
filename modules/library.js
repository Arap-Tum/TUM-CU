//----------------------------------------------------------
// This script is only used for the LIBRARY page
//----------------------------------------------------------

import { connectSections } from "../scripts/pageConector.js";
import { LibraryApp } from "../utils/addLibraryBooks.js";

// Conect the page with the header and footer
connectSections();

//   initiaalize the application when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  new LibraryApp();
});

// Add some nice  touch interaction for mobile
if ("ontouchstart" in window) {
  document.addEventListener("touchstart", function () {}, true);
}
