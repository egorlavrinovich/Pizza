import { useState } from "react";

export const Fetch = (request) => {
  const [Load, SetLoad] = useState(false);
  const [Error, SetError] = useState();
  const fetching = async () => {
    try {
      SetLoad(true);
      await request();
    } catch (error) {
      SetError(error.message);
    } finally {
      SetLoad(false);
    }
  };
  return [fetching, Load, Error];
};
