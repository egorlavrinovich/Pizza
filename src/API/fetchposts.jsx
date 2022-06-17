import axios from "axios";

export async function fetchposts(page = 1, count = 8) {
  const response = await axios.get(
    `https://628f6338dc478523653f95fe.mockapi.io/Items?p=${page}&l=${count}`
  );
  return response.data;
}
