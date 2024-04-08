import Bio from "../components/features/Profile/Bio";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { api } from "../utils/api";
import Me from "../assets/Me.jpg";

const Profile = () => {
    const { user } = useContext(UserContext);
    const [bio, setBio] = useState();

    const getProfileData = async () => {
        try {
            const { userId } = user;

            // const response = await api.get(`/api/user`);
            if (Response.status === 200) {
                console.log(response.data);
            } else {
                console.log(response);
                alert(`Error: ${response.status} Text: ${response.statusText}`);
            }

            // !!! TEMP
            setBio({
                FirstName: "Ben",
                LastName: "Smerd",
                Nationality: "Australian",
                Age: 28,
                Bio: `I am traveling because I enjoy meeting new people
                from around the world. I am traveling because I
                enjoy meeting new people from around the world. I am
                traveling because I enjoy meeting new people from
                around the world.`,
                ProfilePic: Me,
            });
        } catch (err) {
            console.log(err);
            alert("Network error.");
        }
    };

    useEffect(() => {
        if (user) {
            getProfileData();
        }
    }, [user]);

    return (
        <div className="flex flex-col h-full w-full">
            <Bio bio={bio} />
        </div>
    );
};

export default Profile;
