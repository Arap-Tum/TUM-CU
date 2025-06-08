import { connectSections } from "../scripts/pageConector.js";
import { loadLeaders } from "../utils/renderLeaders.js";
// Conect the page with the header and footer
connectSections();

document.addEventListener("DOMContentLoaded", loadLeaders);
