import { createContext, useState, useEffect } from "react";
import { api } from "./../utils/api";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    // !!! TEMP
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState({
        UserID: "",
        Username: "",
        Email: "",
    });

    // !! Temp
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = async (userData) => {
        // TODO need to add JWT and cookies
        try {
            const response = await api.post("/auth/login", { ...userData });

            if (response.status === 200) {
                const { Username, UserID, Email } = response.data;
                setUser({
                    Username,
                    UserID,
                    Email,
                });
                setIsLoggedIn(true);
                return true;
            } else {
                return false;
            }
        } catch (err) {
            console.log(err);
            alert(
                "Network error logging in, please refresh page and try again."
            );
        }
    };

    const logout = () => {
        setUser(null);
        setIsLoggedIn(false);
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
