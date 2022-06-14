import axios from "axios";

export async function fetchposts() {
  const response = await axios.get(
    "https://628f6338dc478523653f95fe.mockapi.io/Items"
  );
  return response.data;
}
