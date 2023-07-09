import {useSelector} from "react-redux";
import {selectMessages} from "../features/userSlice";
import avatar from '../img/avatar.jpeg';

const Message = () => {
    const messages = useSelector(selectMessages);

    return (<div>
        {messages.map((message, index) => (<div className="message owner" key={index}>
            <div className="messageInfo">
                <img src={avatar} alt="Image"/>
                <span>{message.time}</span>
            </div>
            <div className="messageContent">
                <p>{message.message}</p>
            </div>
        </div>))}
    </div>);
};

export default Message;