import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { api } from "../utils/api";
import { IoSearch } from "react-icons/io5";
import ForumList from "../components/features/Forums/ForumList";
import ME from "../assets/Me.jpg";
import { RotatingLines } from "react-loader-spinner";

const testforum = [
    {
        name: "Cats and their medication",
        comments: 11232,
        createdDate: "12-01-2020",
        description:
            "We discuss all things about medication and how cats should take them.",
        image: ME,
    },
    {
        name: "How to keep lizards",
        comments: 132,
        createdDate: "12-11-2022",
        description: "All information on how to look after lizards",
        image: ME,
    },
    {
        name: "Why does my dog bark?",
        comments: 12,
        createdDate: "24-01-2020",
        description: "Reasons for barking dogs!",
        image: ME,
    },
];

// TODO import Forum component and pass the forumId through
const Forums = () => {
    const { user } = useContext(UserContext);
    const [searchInput, setSearchInput] = useState("");
    const [forumList, setForumList] = useState();

    const getForums = async () => {
        try {
            const { userId } = user;

            // !!! TEMP
            setForumList(testforum);

            // TODO this could be a "most popular" forums for the first showing ones as there would be too many to return from the start

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

    const searchForumsForQuery = async () => {
        try {
            console.log(searchInput);
            // TODO this can query DB matching the querying

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
            getForums();
        }
    }, [user]);

    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex justify-between gap-2">
                <input
                    className="rounded-lg pl-1 w-full outline-none"
                    type="text"
                    placeholder="Search Forums..."
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <div
                    onClick={searchForumsForQuery}
                    className="bg-cyan-500 w-[40px] rounded-full p1 flex justify-center items-center"
                >
                    <IoSearch className="text-xl" />
                </div>
            </div>
            {forumList ? (
                <ForumList forumList={forumList} />
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

export default Forums;
