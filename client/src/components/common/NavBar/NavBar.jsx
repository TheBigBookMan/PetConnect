import { NAVITEMS } from "../../../utils/navitems";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

const NavBar = () => {
    const [active, setActive] = useState();
    let { pathname } = useLocation();
    const { user } = useContext(UserContext);

    const checkLocationURL = () => {
        pathname = pathname === "/" ? "/feed" : pathname;

        if (pathname === "/") pathname = "/feed";
        else {
            let parts = pathname.split("/");
            pathname = `/${parts[1]}`;
        }
        setActive(pathname);
    };

    useEffect(() => {
        checkLocationURL();
    }, [pathname]);

    return (
        <div className="h-[60px] w-full border-t border-slate-500 p-2 fixed bottom-0 z-10">
            <ul className="flex items-center gap-2 p-1 justify-around">
                {user &&
                    NAVITEMS.map((nav) => (
                        <Link
                            to={`${
                                nav.name === "Feed"
                                    ? "/"
                                    : `/${nav.name.toLowerCase()}`
                            }`}
                            key={nav.name}
                            className={`flex flex-col items-center ${
                                active === `/${nav.name.toLowerCase()}` &&
                                "border bg-slate-100 rounded-xl px-2 font-bold"
                            } `}
                        >
                            <nav.icon className={`text-cyan-500 text-xl`} />
                            <p className="text-cyan-500 text-xs">{nav.name}</p>
                        </Link>
                    ))}
            </ul>
        </div>
    );
};

export default NavBar;
