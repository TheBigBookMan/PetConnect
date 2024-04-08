import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./contexts/UserContext";
import SettingsProvider from "./contexts/SettingsContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <UserProvider>
        <SettingsProvider>
            <BrowserRouter>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </BrowserRouter>
        </SettingsProvider>
    </UserProvider>
);
