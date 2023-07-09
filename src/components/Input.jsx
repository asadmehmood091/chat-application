import Img from "../img/img.png";
import Attach from "../img/attach.png";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addMessage} from "../features/userSlice";
import dayjs from 'dayjs';

const Input = () => {
    const [message, setMessage] = useState({message: ""});
    const currentTime = dayjs().format('HH:mm:ss').toString();
    const dispatch = useDispatch();
    const sendMessage = () => {
        dispatch(addMessage({message, time: currentTime}));
        setMessage({message: ""});
    }
    const handleChange = (e) => {
        e.preventDefault();
        setMessage(e.target.value);
    }
    return (
        <div className="input">
            <input type="text" placeholder="Type something..." onChange={(e) => handleChange(e)}
                   value={message.message}/>
            <div className="send">
                <img src={Attach} alt=""/>
                <input type="file" style={{display: "none"}} id="file"/>
                <label htmlFor="file">
                    <img src={Img} alt=""/>
                </label>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Input;