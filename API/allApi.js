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
