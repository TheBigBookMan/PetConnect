import Account from "../components/features/Settings/Account";
import FAQ from "../components/features/Settings/FAQ";
import Privacy from "../components/features/Settings/Privacy";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { FaAngleRight } from "react-icons/fa";

const settingsItems = ["Account", "FAQ", "Privacy"];

const Settings = () => {
    const [showBack, setShowBack] = useState(false);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between items-center px-2">
                <p className="text-xl font-bold text-cyan-300">Settings</p>
                {showBack && (
                    <Link to="/settings" onClick={() => setShowBack(false)}>
                        <IoArrowBackSharp className="cursor-pointer text-2xl bg-cyan-500 rounded-lg hover:bg-cyan-300" />
                    </Link>
                )}
            </div>
            {!showBack ? (
                <ul className="flex flex-col p-2 gap-2">
                    {settingsItems.map((set) => (
                        <Link
                            onClick={() => setShowBack(true)}
                            className={`border-2-cyan-500 rounded-xl px-2 flex items-center justify-between text-slate-100 font-bold text-xl bg-cyan-800 w-full h-[40px] hover:bg-cyan-500`}
                            key={set}
                            to={`/settings/${set.toLowerCase()}`}
                        >
                            <p>{set}</p>
                            <FaAngleRight className="text-2xl" />
                        </Link>
                    ))}
                </ul>
            ) : (
                <div className="flex flex-col">
                    <Routes>
                        <Route path="account" element={<Account />} />
                        <Route path="faq" element={<FAQ />} />
                        <Route path="privacy" element={<Privacy />} />
                    </Routes>
                </div>
            )}
        </div>
    );
};

export default Settings;
