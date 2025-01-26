import { useState } from "react";
import { message } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register=()=>{
    const [input,setinput]=useState({});
    const navigate=useNavigate();

    const handleinput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        
        setinput(values=>({...values,[name]:value}));
        }


    const handlesubmit=()=>{
    let api="http://localhost:3000/User";
    axios.post(api,input).then((res)=>{
        message.success("data inserted");
        navigate("/login")
    })
    }
    return(
   <>
    <div id="reg">
<h1>Register</h1> <hr />
<form onSubmit={handlesubmit}>
    <label>Enter Email : </label>
 <input type="text" placeholder="Email" name="email" value={input.email} onChange={handleinput} required id="email"/> <br /> <br />
<label>Enter Password : </label> 
<input type="text" placeholder="Password" name="password" value={input.password} onChange={handleinput} required id="pss"/> <br /> <br />
<button type="submit">Sign Up</button>
<h3>Already Account : <span onClick={()=>navigate("/login")} style={{cursor:"pointer"}}>Login</span> </h3>
</form>
   </div>
   </>
    )
}
export default Register;