import { createContext } from "react";

export const CartContext = createContext({
  // useful only for autocompletion
  items: [],
  addItemToCart: () => {},
});
