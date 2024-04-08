import { useState } from "react";
import Me from "../../../assets/Me.jpg";
import { MdEdit } from "react-icons/md";
import Popup from "../../common/Elements/Popup";
import { RotatingLines } from "react-loader-spinner";

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
                </div>
            </Popup>
            {bio ? (
                <div className="flex gap-2">
                    <img src={bio.ProfilePic} className="w-36 rounded-xl" />
                    <div className="flex flex-col">
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <p className="text-white">
                                    {bio.FirstName} {bio.LastName}
                                </p>
                                <p className="text-white">{bio.Nationality}</p>
                                <p className="text-white">{bio.Age} Years</p>
                            </div>
                            <MdEdit
                                onClick={() => setEditProfilePopup(true)}
                                className="text-cyan-500 text-2xl"
                            />
                        </div>
                        <p className="text-slate-300 text-sm w-full max-h-[50px] overflow-y-auto">
                            {bio.Bio}
                        </p>
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
