import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const [user,setUser] = useState(true);

  function logout() {
    localStorage.clear();
    navigate("/Signup");
  }

  return (
    <div>
      {auth ? (
        <ul className="nav-ul">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/batch">Class Details</Link>
          </li>
          <li className="logout">
            <div>
              <FaUserCircle style={{ fontSize: "2rem",marginRight:"5px" }} />
              <span style={{color:"#fff",fontWeight:"bold"}}> ({JSON.parse(auth).name})</span>
              <li onClick={logout}>
                <Link to="/SignUp">Logout</Link>
              </li>
            </div>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
