//const STRAPI_URL = "http://localhost:1337";

//export async function fetchFromStrapi(endpoint: string) {
 // const res = await fetch(`${STRAPI_URL}/api/${endpoint}?populate=*`);

  //if (!res.ok) {
    //throw new Error("Failed to fetch from Strapi");
  //}

  //const json = await res.json();
  //return json.data ?? [];
//}
import { STRAPI_URL } from "../config/strapi";

export async function fetchFromStrapi<T = any>(
  endpoint: string,
  query: string = "?populate=*"
): Promise<T[]> {
  const res = await fetch(`${STRAPI_URL}/api/${endpoint}${query}`);
  if (!res.ok) throw new Error("Strapi fetch failed");
  const json = await res.json();
  return json.data ?? [];
}

export const getStrapiMedia = (url?: string) =>
  url ? (url.startsWith("http") ? url : `${STRAPI_URL}${url}`) : "";
