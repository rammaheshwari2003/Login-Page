import { message } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Display=()=>{
    const [data, setData]=useState([]);
    const navigate=useNavigate();
    let getData=()=>{
    let api="https://jsonplaceholder.typicode.com/posts";
    axios.get(api).then((res)=>{
        setData(res.data);
    })
}

const LogOut=()=>{
    message.success("Logout Successfully");
    
    navigate("/login");

}


useEffect(()=>{
    getData();
},[])

    let displayData=data.map((key)=>{
        return(
                <tr>
                    <td>{key.id}</td>
                    <td>{key.title}</td>
                    <td>{key.body}</td>
                    
                </tr>
        )
    })

    return (
        <>  
          <h3 id="logout" onClick={()=>LogOut()}> LogOut<FaSignInAlt /></h3>
            <hr />
            <h1 style={{textAlign:"center"}}>Display Data</h1>
        <table border={1} style={{textAlign:"center"}}>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
            </tr>
        {displayData}

        </table>
        </>
    )
}
export default Display;