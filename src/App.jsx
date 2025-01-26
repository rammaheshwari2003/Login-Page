import Display from "./Display";
import Login from "./Login";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Register from "./Register";



const App=()=>{

return(
<>      
                <BrowserRouter>
                <Routes>
                <Route index element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/display" element={<Display/>}/>
                <Route path="/register" element={<Register />} />


                </Routes>
                </BrowserRouter>
                
       
</>
)


}
export default App;