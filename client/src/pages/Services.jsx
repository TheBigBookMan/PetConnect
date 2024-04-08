import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { api } from "../utils/api";

// TODO import the service compionent and pass the serviceId through when clicking on one thing

const Services = () => {
    const { user } = useContext(UserContext);

    const getServices = async () => {
        try {
            const { userId } = user;

            // const response = await api.get("");

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
            getServices();
        }
    }, [user]);

    return (
        <div>
            <p>Services</p>
        </div>
    );
};

export default Services;
