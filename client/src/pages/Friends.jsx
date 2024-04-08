import { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { LuNewspaper } from "react-icons/lu";
import { IoPersonAdd } from "react-icons/io5";
import FriendsList from "../components/features/Friends/FriendsList/FriendsList";
import Newsfeed from "../components/features/Friends/Newsfeed/Newsfeed";
import { RotatingLines } from "react-loader-spinner";

const Friends = () => {
    const [friendsSelection, setFriendsSelection] = useState("Newsfeed");
    const { user } = useContext(UserContext);

    return (
        <div className="h-full w-full flex flex-col ">
            <div className="flex gap-6 pb-2">
                <Link
                    to="/friends/newsfeed"
                    onClick={() => setFriendsSelection("Newsfeed")}
                    className={`cursor-pointer flex w-3/6 h-[40px] items-center gap-2 justify-center border-2-cyan-500 bg-cyan-100 rounded-lg ${
                        friendsSelection === "Newsfeed" &&
                        "bg-cyan-500 text-white"
                    }`}
                >
                    <LuNewspaper className="text-xl" />
                    <p>Newsfeed</p>
                </Link>
                <Link
                    to="/friends/list"
                    onClick={() => setFriendsSelection("List")}
                    className={`cursor-pointer flex w-3/6 h-[40px] items-center gap-2 justify-center border-2-cyan-500 bg-cyan-100 rounded-lg ${
                        friendsSelection === "List" && "bg-cyan-500 text-white"
                    }`}
                >
                    <IoPersonAdd className="text-xl" />
                    <p>List</p>
                </Link>
            </div>
            {user ? (
                <div className="flex h-full w-full">
                    <Routes>
                        <Route
                            path="/"
                            element={<Newsfeed userId={user.userId} />}
                        />
                        <Route
                            path="newsfeed"
                            element={<Newsfeed userId={user.userId} />}
                        />
                        <Route
                            path="list"
                            element={<FriendsList userId={user.userId} />}
                        />
                    </Routes>
                </div>
            ) : (
                <div className="flex h-full w-full justify-center items-center">
                    <RotatingLines
                        height="80"
                        width="80"
                        radius="9"
                        color="blue"
                        ariaLabel="three-dots-loading"
                        wrapperStyle
                        wrapperClass
                    />
                </div>
            )}
        </div>
    );
};

export default Friends;
