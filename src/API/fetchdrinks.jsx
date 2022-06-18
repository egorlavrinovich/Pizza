import axios from "axios";

export async function getDrinks() {
  const drinksposts = await axios(
    "https://628f6338dc478523653f95fe.mockapi.io/Drinks"
  );
  return drinksposts.data;
}
