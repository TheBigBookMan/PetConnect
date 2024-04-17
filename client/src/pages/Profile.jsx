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

            const response = await api.get(`/auth/profile/${userId}`);

            if (response.status === 200) {
                console.log(response.data);
                const { data } = response;

                setBio({
                    ProfilePic: data.ProfilePicURL,
                    Username: data.Username,
                    PetType: data.PetType,
                });
            } else {
                console.log(response);
                alert(`Error: ${response.status} Text: ${response.statusText}`);
            }
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
            {bio && <Bio bio={bio} />}
        </div>
    );
};

export default Profile;
