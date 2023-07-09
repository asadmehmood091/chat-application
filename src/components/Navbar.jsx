import {useDispatch} from "react-redux";
import {logout} from "../features/userSlice";
import avatar from '../img/avatar.jpeg';


const Navbar = () => {
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
    }
    return (
        <div className='navbar'>
            <span className="logo">Chat Room</span>
            <div className="user">
                <img src={avatar} alt="user"/>
                <span className="user_name">Asad</span>
                <button className="logout_button" onClick={(e) => {
                    handleLogout(e)
                }}>logout
                </button>
            </div>
        </div>
    )
}

export default Navbar