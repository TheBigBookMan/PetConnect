import { useContext, useEffect } from "react";
import ME from "../../../../assets/Me.jpg";
import { Link } from "react-router-dom";
import { UserContext } from "../../../../contexts/UserContext";
import { api } from "../../../../utils/api";

// TODO could have the place that you became friends with them on there as well as a cool uniqie feature

const test = [
    {
        name: "Andy Kyriakou",
        friendsCount: 1234,
        met: "Aarhus, Denmark",
        userId: 333,
    },
    {
        name: "Ben Smerd",
        friendsCount: 1543,
        met: "Adelaide, Australia",
        userId: 987,
    },
];

const FriendsList = () => {
    const { user } = useContext(UserContext);

    const getUsersFriendsList = async () => {
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
            getUsersFriendsList();
        }
    }, [user]);

    return (
        <ul className="flex flex-col gap-2 w-full h-full overflow-y-auto">
            {test.map((t) => (
                <Link
                    to={`/user/${t.userId}`}
                    className="border-2 border-cyan-500 p-1 h-[80px] w-full rounded-lg flex text-sm text-cyan-500 gap-2"
                    key={t.userId}
                >
                    <img src={ME} className="w-20 rounded-lg" />
                    <div className="flex flex-col">
                        <p>{t.name}</p>
                        <p>Friends: {t.friendsCount}</p>
                        <p>Met In: {t.met}</p>
                    </div>
                </Link>
            ))}
        </ul>
    );
};

export default FriendsList;
