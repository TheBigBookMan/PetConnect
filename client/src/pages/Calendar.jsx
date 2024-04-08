import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { api } from "../utils/api";

// TODO need to find a good calendar library thats very simple to click on and see details, maybe even need to use the Popup

const Calendar = () => {
    const { user } = useContext(UserContext);
    const [calendarItems, setCalendarItems] = useState();

    const getUserCalendarItems = async () => {
        try {
            const { userId } = user;

            // const response = await api.get(``);

            // if(response.status === 200) {
            //     console.log(response.data);
            // } else {
            //     console.log(response);
            //     alert(`Error: ${response.status} Text: ${response.statusText}`);
            // }
        } catch (err) {
            console.log(err);
            alert("Network error.");
        }
    };

    useEffect(() => {
        if (user) {
            getUserCalendarItems();
        }
    }, [user]);

    return (
        <div>
            <p>Calendar</p>
        </div>
    );
};

export default Calendar;
