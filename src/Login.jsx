import { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [input, setInput] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleinput = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }));
    }

    const handlesubmit = async (e) => {
        e.preventDefault(); 
        try {
            const api = `http://localhost:3000/User/?email=${input.email}&password=${input.password}`;
            const res = await axios.get(api);

            if (res.data.length === 0) {
                message.error("Invalid Email or Password");
            } else {
                message.success("Login Successful");
                setTimeout(() => {
                    localStorage.setItem("email",res.data[0].email )
                    console.log(res.data.email)
                    navigate("/display");
                }, 1000);
                 }
        } catch (error) {
            message.error("An error occurred. Please try again");
        }
    }

    return (
        <>
        <div id="form">
            <h1>Login</h1> <hr /> 
            <form onSubmit={handlesubmit}>
                <label>
                    Enter Email : 
                    <input type="text" name="email" value={input.email} onChange={handleinput} placeholder="Email" required id="email" />
                </label>
                <br />
                <br />
                <label>
                    Enter Password : </label>
                    <input type="password" name="password" value={input.password} onChange={handleinput} placeholder="Password" required  id="pss"/>
                    <br />
                <br />
                <button type="submit">Sign In</button>
            </form>
            <div id="reg-for">
            <h4 onClick={() => navigate("/register")} id="cr-acc">Create Account : <span>Sign Up</span></h4> 
            <h5>Forgot Password</h5>
            </div>
            </div>
        </>
    )
}

export default Login;
