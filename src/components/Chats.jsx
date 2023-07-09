import avatar from '../img/avatar.jpeg';
import addAvatar from '../img/addAvatar.png';

const Chats = () => {
    return (
        <div className="chats">
            <div className="userChat">
                <img src={avatar} alt=""/>
                <div className="userChatInfo">
                    <span>Asad Mehmood</span>
                </div>
            </div>
            <div className="userChat">
                <img src={addAvatar} alt=""/>
                <div className="userChatInfo">
                    <span>Salman</span>
                </div>
            </div>
        </div>
    );
}

export default Chats;