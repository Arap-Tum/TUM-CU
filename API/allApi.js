const baseUrl = "https://tumcubackend-production.up.railway.app";

// A Generic Fetch function

async function fetchData(endpoint) {
  try {
    const response = await fetch(`${baseUrl}/api/${endpoint}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch from ${endpoint}`);
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error);
    return [];
  }
}

// GET

export const fetchMediaItems = () => fetchData("media");
export const fetchLibraryItems = () => fetchData("books");
export const fetchLeaders = () => fetchData("leaders");
export const fetchFormerLeaders = () => fetchData("formerLeaders");

// A Generic post function

async function createData(endpoint, formData) {
  const response = await fetch(`${baseUrl}/api/${endpoint}`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "fAILED TO UPLOAD  DATA");
  }

  return await response.json();
}

export const createMember = (formData) => createData("members", formData);

export async function sendRequest(formData) {
  const res = await fetch(`${baseUrl}/api/requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    const error = await response.json();
    throw new Error(error.message || "fAILED TO UPLOAD  DATA");
  }

  return await res.json();
}
