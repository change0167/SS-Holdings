const STRAPI_URL = "http://localhost:1337";

export async function fetchFromStrapi(endpoint: string) {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}?populate=*`);

  if (!res.ok) {
    throw new Error("Failed to fetch from Strapi");
  }

  const json = await res.json();
  return json.data ?? [];
}
