import { connectSections } from "../scripts/pageConector.js";
// import { displayMedia } from "../scripts/addMedia.js";
import { openCloseForm } from "../function/formAction.js";
import { renderHomeMedia } from "../utils/renderMedia.js";

// addMember to the databse
import { addMember } from "../utils/postMembers.js";
// connect to the  Header and footer
connectSections();

// open and close the join us form
openCloseForm();

// Display the data in TUMCU media
// displayMedia();
renderHomeMedia();

// on sumbiting the form
console.log(document.getElementById("memberForm"));
document.getElementById("memberForm").addEventListener("submit", addMember);
