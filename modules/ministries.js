//----------------------------------------------------------
// This script is only used for the ministries Page page
//----------------------------------------------------------

import { connectSections } from "../scripts/pageConector.js";
import { renderMInistryCards } from "../utils/renderMinistry.js";
import { openCloseForm } from "../function/formAction.js";
import { modalDisplayOnScroll } from "../function/scrollEffectHeader.js";
import { addRequest } from "../utils/postRequest.js";
// Conect the page with the header and footer
connectSections();
modalDisplayOnScroll();
openCloseForm();
renderMInistryCards();

const form = document.getElementById("requestForm");

form.addEventListener("submit", addRequest);
