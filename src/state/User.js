import { createContext } from "react";

const UserContext = createContext({
    info: {},setInfo: () => {},
});

export default UserContext;