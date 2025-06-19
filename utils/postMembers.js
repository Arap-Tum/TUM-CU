import { createMember } from "../API/allApi.js";

// add members
export async function addMember(e) {
  e.preventDefault();

  const formData = new FormData(e.target);
  document.getElementById("submitBtn").innerHTML = "Sending .......";

  try {
    const result = await createMember(formData);
    console.log(result);
    document.getElementById("submitBtn").innerHTML = "Save";
    document.querySelector(".success-message").innerHTML = "sent successfull";
    document.querySelector(".success-message").innerHTML = "sent successfull";

    e.target.reset();
    //refresh the Members
  } catch (error) {
    console.log(" this is the error for posting data:" + error);
    document.querySelector(".failed-message").innerHTML = "Failed to send ";
  }
}
