import { IoSettings, IoLogOutSharp, IoChatbubble } from "react-icons/io5";
import { UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const { logout, user } = useContext(UserContext);
    const { pathname } = useLocation();

    return (
        <div className="fixed top-0 z-10 min-h-[40px] w-full  flex justify-between items-center px-2">
            <p className="text-cyan-500 text-lg font-bold">Petsy</p>
            {user && (
                <div className="flex gap-4 p-2">
                    <Link
                        to={`/messages`}
                        className={` p-1 ${
                            pathname.includes("messages") &&
                            "bg-white rounded-xl"
                        }`}
                    >
                        <IoChatbubble className="text-cyan-500 text-2xl" />
                    </Link>
                    <Link
                        to="/settings"
                        className={` p-1 ${
                            pathname.includes("settings") &&
                            "bg-white rounded-xl"
                        }`}
                    >
                        <IoSettings className="text-cyan-500 text-2xl" />
                    </Link>
                    <div className="p-1">
                        <IoLogOutSharp
                            className="text-cyan-500 text-2xl"
                            onClick={() => logout(false)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
