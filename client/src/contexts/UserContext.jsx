import { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // !!! TEMP
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState({
        userId: 12345,
    });

    // !! Temp
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const login = (userData) => {
        // TODO make call to DB with email and passowrd and return the username and store in state with maybe name?
        setUser({
            userId: 12345,
        });
    };

    const logout = () => {
        setUser(null);
    };

    const signUpUser = (userData) => {
        console.log("signup");
    };

    const value = { user, login, logout, isLoggedIn, signUpUser };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};

export default UserProvider;
