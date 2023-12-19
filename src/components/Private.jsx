import React,{useState} from "react";
import { Navigate,Outlet } from "react-router-dom";


function Private() {
    const auth = localStorage.getItem("user");
    // const [user,setUser] = useState(true);
    return auth ? <Outlet /> : <Navigate to="signup" />
}

export default Private;