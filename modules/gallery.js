//----------------------------------------------------------
// This script is only used for the Galery Page page
//----------------------------------------------------------

import { connectSections } from "../scripts/pageConector.js";
import { renderPhotos, renderVideoItem } from "../utils/renderMedia.js";
import { switchTab } from "../function/switchTab.js";

// Conect the page with the header and footer
connectSections();
switchTab();
renderPhotos();
renderVideoItem();
