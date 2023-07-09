import "./style.scss"
import Home from "./pages/Home";
import Login from "./pages/Login";
import {selectUser} from "./features/userSlice";
import {useSelector} from "react-redux";
import Logout from "./pages/Logout";

function App() {
    const user = useSelector(selectUser)
    return (
        <div className="App">
            {user ? <Home/> : <Login/>}
            {/*<Login/>*/}
            {/*<Home/>*/}
        </div>
    );
}

export default App;
