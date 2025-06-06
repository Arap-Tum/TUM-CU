import { connectSections } from "../scripts/pageConector.js";
// import { displayMedia } from "../scripts/addMedia.js";
import { openCloseForm } from "../function/formAction.js";
import { renderHomeMedia } from "../utils/renderPhotos.js";
// connect to the  Header and footer
connectSections();

// open and close the join us form
openCloseForm();

// Display the data in TUMCU media
// displayMedia();
renderHomeMedia();
