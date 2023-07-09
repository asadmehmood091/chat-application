const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Chat Room</span>
                <span className="title">Register</span>
                <form>
                    <input required type="text" placeholder="display name"/>
                    <input required type="email" placeholder="email"/>
                    <input required type="password" placeholder="password"/>
                    <input required style={{display: "none"}} type="file" id="file"/>
                    <label htmlFor="file">
                    </label>
                    <button>Register</button>
                </form>
                <p>
                    You do have an account? Register
                    {/*You do have an account? <Link to="/register">Login</Link>*/}
                </p>
            </div>
        </div>
    )
}

export default Register;