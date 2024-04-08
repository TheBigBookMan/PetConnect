import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { api } from "../utils/api";
import Newsfeed from "../components/features/Feed/Newsfeed";

// TODO maybe this is newsfeed for friends and others like services etc??????
// TODO or like a feed that can be about similar pets as to what you have, kind of an algorithm for all that sort of stuff i reckon, like tiktok- more recommended for you etc

const Feed = () => {
    const { user } = useContext(UserContext);

    const getUserNewsfeed = async () => {
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
            getUserNewsfeed();
        }
    }, [user]);

    return (
        <div className="h-full w-full flex flex-col ">
            <div className="h-full w-full">
                <Newsfeed />
            </div>
        </div>
    );
};

export default Feed;
