//----------------------------------------------------------
// This script is only used for the ministries Page page 
//----------------------------------------------------------

import { connectSections } from "../scripts/pageConector.js";
import { renderMInistryCards } from "../utils/renderMinistry.js";

// Conect the page with the header and footer
connectSections();
renderMInistryCards();