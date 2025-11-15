import { createContext } from "react";

export const CartContext = createContext({
  items: [], // useful only for autocompletion
});
