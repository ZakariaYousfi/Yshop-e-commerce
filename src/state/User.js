import { createContext } from "react";

const UserContext = createContext({
    items: {},setItems: () => {},
});

export default CartContext;