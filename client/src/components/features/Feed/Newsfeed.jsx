import ME from "../../../assets/Me.jpg";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Popup from "../../common/Elements/Popup";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { api } from "../../../utils/api";

const test = [
    {
        image: ME,
        postedBy: "Andy Kyriakou",
        userId: 12312,
        postId: 1111,
        location: "Adelaide, Australia",
        likes: 12,
        date: "12-03-2024",
        comments: [
            {
                commentedBy: "Justin Patterson",
                date: "12-03-2024",
                time: "10pm",
                comment: "That looks so good man",
                likes: 1,
                commentId: 99,
            },
            {
                commentedBy: "Kieran Finney",
                date: "12-03-2024",
                time: "11pm",
                comment: "Wow amazing!",
                likes: 2,
                commentId: 102,
            },
            {
                commentedBy: "Kieran Finney",
                date: "12-03-2024",
                time: "11pm",
                comment: "Wow amazing!",
                likes: 2,
                commentId: 102,
            },
            {
                commentedBy: "Kieran Finney",
                date: "12-03-2024",
                time: "11pm",
                comment: "Wow amazing!",
                likes: 2,
                commentId: 102,
            },
            {
                commentedBy: "Kieran Finney",
                date: "12-03-2024",
                time: "11pm",
                comment: "Wow amazing!",
                likes: 2,
                commentId: 102,
            },
            {
                commentedBy: "Kieran Finney",
                date: "12-03-2024",
                time: "11pm",
                comment: "Wow amazing!",
                likes: 2,
                commentId: 102,
            },
            {
                commentedBy: "Kieran Finney",
                date: "12-03-2024",
                time: "11pm",
                comment: "Wow amazing!",
                likes: 2,
                commentId: 102,
            },
            {
                commentedBy: "Kieran Finney",
                date: "12-03-2024",
                time: "11pm",
                comment: "Wow amazing!",
                likes: 2,
                commentId: 102,
            },
            {
                commentedBy: "Kieran Finney",
                date: "12-03-2024",
                time: "11pm",
                comment: "Wow amazing!",
                likes: 2,
                commentId: 102,
            },
            {
                commentedBy: "Kieran Finney",
                date: "12-03-2024",
                time: "11pm",
                comment: "Wow amazing!",
                likes: 2,
                commentId: 102,
            },
            {
                commentedBy: "Kieran Finney",
                date: "12-03-2024",
                time: "11pm",
                comment: "Wow amazing!",
                likes: 2,
                commentId: 102,
            },
        ],
        description:
            "Here I am having a great time in my new suit and i love it so much because this is the thebest thing ever and I have such a good time. 🍺 Always with my boys aha i love them so much",
    },
    {
        image: ME,
        postedBy: "Ben Smerd",
        userId: 123,
        postId: 1241,
        location: "New York, America",
        likes: 1092,
        date: "12-03-2024",
        comments: [
            {
                commentedBy: "Andy Kyriakou",
                date: "12-03-2024",
                time: "10pm",
                comment: "Where is that!? 🍺",
                likes: 11,
                commentId: 232323,
            },
        ],
        description: "This is my party time",
    },
];

const Newsfeed = () => {
    const { user } = useContext(UserContext);
    const [commentPopup, setCommentPopup] = useState(false);
    const [comments, setComments] = useState();

    const likePost = (postId) => {
        console.log(postId);
    };

    // TODO maybe change the like button to a paw instead and can be hollow and then fuilled when liked

    const addComment = (postId) => {
        // TODO this should open a comment section where can post as well as view the comments and like them etc

        const commentsFromPost = test.filter((t) => {
            if (t.postId === postId) {
                return t.comments;
            }
        });

        const { comments } = commentsFromPost[0];
        setComments(comments);
        setCommentPopup(true);
    };

    const viewDetails = (postId) => {
        // TODO this can be the settings thing or something
        console.log(postId);
    };

    const likeComment = (commentId) => {
        console.log(commentId);
    };

    const getFriendsNewsfeed = async () => {
        try {
            const { userId } = user;

            // const response = await api.get("/");

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
            getFriendsNewsfeed();
        }
    }, [user]);

    return (
        <div className="flex flex-col gap-2 overflow-y-auto h-full w-full">
            <Popup
                closeModal={() => setCommentPopup(false)}
                isOpen={commentPopup}
                height={4}
            >
                <div className="flex flex-col h-full w-full">
                    <p className="text-white">Comments</p>
                    <div className="flex flex-col h-full justify-between">
                        {comments && comments.length === 0 ? (
                            <p className="text-white">
                                No comments, be the first...
                            </p>
                        ) : (
                            <ul className="flex flex-col gap-2 max-h-[320px] overflow-y-auto">
                                {comments &&
                                    comments.map((com) => (
                                        <li
                                            key={com.commentId}
                                            className="flex justify-between items-center text-sm"
                                        >
                                            <div className="flex flex-col">
                                                <div className="flex gap-1">
                                                    <p className="text-cyan-500">
                                                        {com.commentedBy}
                                                    </p>
                                                    <div className="flex items-center gap-1">
                                                        <p className="text-white">
                                                            {com.likes}
                                                        </p>
                                                        <AiFillLike className="text-cyan-500" />
                                                    </div>
                                                </div>
                                                <p className="text-white">
                                                    {com.comment}
                                                </p>
                                            </div>
                                            <AiFillLike
                                                onClick={() =>
                                                    likeComment(com.commentId)
                                                }
                                                className="text-xl cursor-pointer text-white hover:text-cyan-500"
                                            />
                                        </li>
                                    ))}
                            </ul>
                        )}
                        <div className="flex justify-between h-[30px]">
                            <input className="bg-slate-100 rounded-xl border-2 border-slate-200" />
                        </div>
                    </div>
                </div>
            </Popup>
            <ul className="flex flex-col gap-2 overflow-y-auto h-full w-full">
                {test.map((t) => (
                    <li
                        className="flex flex-col w-full max-h-[480px] px-2"
                        key={t.postId}
                    >
                        <img
                            src={t.image}
                            className="w-full rounded-3xl max-w-[380px]"
                        />
                        <div className="flex flex-col w-full">
                            <div className="flex gap-2">
                                <p className="text-cyan-500">
                                    {t.postedBy} in{" "}
                                    <Link
                                        to={`/map/${t.location}`}
                                        className="text-cyan-300"
                                    >
                                        {t.location}
                                    </Link>
                                </p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <p className="text-cyan-300 text-sm">
                                    {t.date}
                                </p>
                                <div className="flex items-center gap-1">
                                    <p className="text-white">{t.likes}</p>
                                    <AiFillLike className="text-cyan-500" />
                                </div>
                                <div className="flex items-center gap-1">
                                    <p className="text-white">
                                        {t.comments.length}
                                    </p>
                                    <FaComment className="text-cyan-500" />
                                </div>
                            </div>
                            <p className="text-white overflow-y-auto max-h-[60px] leading-4 text-sm my-2">
                                {t.description}
                            </p>
                            <div className="flex justify-around w-full h-[40px] bg-slate-700  rounded-lg pt-2 px-4">
                                <AiFillLike
                                    onClick={() => likePost(t.postId)}
                                    className="text-2xl text-slate-300 hover:text-cyan-500 cursor-pointer"
                                />
                                <FaComment
                                    onClick={() => addComment(t.postId)}
                                    className="text-2xl text-slate-300 hover:text-cyan-500 cursor-pointer"
                                />
                                <Link to={`/user/${t.userId}`}>
                                    <BsFillPersonVcardFill className="text-2xl text-slate-300 hover:text-cyan-500 cursor-pointer" />
                                </Link>
                                <HiDotsHorizontal
                                    onClick={() => viewDetails(t.postId)}
                                    className="text-2xl text-slate-300 hover:text-cyan-500 cursor-pointer"
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Newsfeed;
