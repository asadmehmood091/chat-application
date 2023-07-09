import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../features/userSlice";

const Login = (props) => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true,
        }));
        // console.log(name, email, password);
    }
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat Room</span>
                <span className="title">Login</span>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input required type="text" placeholder="display name" value={name} onChange={(e) => {
                        setName(e.target.value);
                    }}/>
                    <input required type="email" placeholder="email" value={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }}/>
                    <input required type="password" placeholder="password" value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }}/>
                    {/*<input required style={{display: "none"}} type="file" id="file"/>*/}
                    <label htmlFor="file">
                    </label>
                    <button type="submit" className="submit_btn">Login</button>
                </form>
                <p>
                    You do have an account? Register
                </p>
            </div>
        </div>
    )
}

export default Login;