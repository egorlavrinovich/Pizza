import axios from "axios";

export async function getDrinks(page = 1, count = 4) {
  const drinksposts = await axios(
    `https://628f6338dc478523653f95fe.mockapi.io/Drinks?p=${page}&l=${count}`
  );
  return drinksposts.data;
}
