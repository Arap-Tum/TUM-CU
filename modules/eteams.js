//----------------------------------------------------------
// This script is only used for the Eteams Page page
//----------------------------------------------------------

import { connectSections } from "../scripts/pageConector.js";
import { openCloseForm } from "../function/formAction.js";
import { renderEteamsCards } from "../utils/renderEteams.js";
import { modalDisplayOnScroll } from "../function/scrollEffectHeader.js";
// Conect the page with the header and footer
connectSections();
openCloseForm();
modalDisplayOnScroll();

//Eteams dynamically added
renderEteamsCards();
