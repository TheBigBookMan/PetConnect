import { createContext, useState, useEffect } from "react";

export const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
    const [distance, setDistance] = useState(100);
    const [ageRange, setAgeRange] = useState({
        lower: 18,
        higher: 100,
    });

    const adjustDistance = (number) => {
        setDistance(number);
    };

    const adjustAgeRange = (type, number) => {
        setAgeRange({
            ...ageRange,
            [type]: number,
        });
    };

    const value = { distance, adjustDistance, ageRange, adjustAgeRange };

    return (
        <SettingsContext.Provider value={value}>
            {children}
        </SettingsContext.Provider>
    );
};

export default SettingsProvider;
