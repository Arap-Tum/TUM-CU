import { sendRequest } from "../API/allApi.js";

const msg = document.getElementById("responseMsg");
const form = document.getElementById("requestForm");

export async function addRequest(e) {
  e.preventDefault(); // stop the page from reloading

  const formData = {
    name: form.name.value.trim(),
    phone: form.phone.value.trim(),
    course: form.course.value.trim(),
    ministry: form.ministry.value,
    notes: form.notes.value.trim(),
  };

  try {
    const result = await sendRequest(formData);
    console.log(result);
    msg.textContent = "✅ Request submitted successfully!";
    msg.style.color = "green";
    form.reset();
  } catch (error) {
    console.log("error", error);
    if (error.errors && Array.isArray(error.errors)) {
      // Combine all validation messages into one string
      const errorMessages = error.errors
        .map((err) => `❌ ${err.msg}`)
        .join("\n");
      msg.textContent = errorMessages;
    } else {
      msg.textContent = `❌ ${error.message || "Something went wrong."}`;
    }
    msg.style.color = "red";
  }
}
