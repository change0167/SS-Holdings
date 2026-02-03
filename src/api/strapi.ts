//const STRAPI_URL = "http://localhost:1337";

//export async function fetchFromStrapi(endpoint: string) {
 // const res = await fetch(`${STRAPI_URL}/api/${endpoint}?populate=*`);

  //if (!res.ok) {
    //throw new Error("Failed to fetch from Strapi");
  //}

  //const json = await res.json();
  //return json.data ?? [];
//}
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "";

export async function fetchFromStrapi(endpoint: string) {
  // Backend not connected yet
  if (!STRAPI_URL) {
    console.warn("VITE_STRAPI_URL not set");
    return [];
  }

  const res = await fetch(`${STRAPI_URL}/api/${endpoint}?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch from Strapi");
  }

  const json = await res.json();
  return json.data ?? [];
}