import { useParams } from "react-router-dom";

const Message = () => {
    const { conversationId } = useParams();

    console.log(conversationId);

    return (
        <div>
            <p>Message</p>
        </div>
    );
};

export default Message;
