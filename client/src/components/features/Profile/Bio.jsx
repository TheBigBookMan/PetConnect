import { useState } from "react";
import Me from "../../../assets/Me.jpg";
import { MdEdit } from "react-icons/md";
import Popup from "../../common/Elements/Popup";
import { RotatingLines } from "react-loader-spinner";
import Bird from "../../../images/Bird/Bird1.png";

const Bio = ({ bio }) => {
    const [details, setDetails] = useState();
    const [editProfilePopup, setEditProfilePopup] = useState(false);

    return (
        <div className="flex flex-col h-full w-full">
            <Popup
                closeModal={() => setEditProfilePopup(false)}
                isOpen={editProfilePopup}
                height={5}
            >
                <div className="flex flex-col">
                    <p className="text-white">Edit Profile</p>
                    <div className="flex flex-col"></div>
                </div>
            </Popup>
            {bio ? (
                <div className="flex gap-2 w-full">
                    <img src={Bird} className="w-36 rounded-xl" />
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <p className="text-cyan-500 font-bold">
                                    {bio.Username}
                                </p>
                                <p className="text-white">
                                    Animal: {bio.PetType}
                                </p>
                                <p className="text-white">
                                    Breed: {bio.PetType}
                                </p>
                            </div>
                            <MdEdit
                                onClick={() => setEditProfilePopup(true)}
                                className="text-cyan-500 text-2xl cursor-pointer"
                            />
                        </div>
                    </div>
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

export default Bio;
