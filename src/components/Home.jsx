import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(storedUser);

  const [classes, setClasses] = useState([
    { srNo: 1, batchTime: "6-7AM", cost: 500 },
    { srNo: 2, batchTime: "7-8AM", cost: 500 },
    { srNo: 3, batchTime: "8-9AM", cost: 500 },
    { srNo: 4, batchTime: "5-6PM", cost: 500 },
  ]);
  const [active, setActive] = useState(false);
  const [activeId, setActiveId] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchBatchDetails() {
      let result = await fetch("http://localhost:8000/getUserPlan", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      });
      result = await result.json();
      if (result.message === "ok") {
        setActive(result.userPlan.isActive);
        setActiveId(Number(result.userPlan.batchId));
      }
    }

    async function validateUserPlan() {
      try {
        let res = await fetch("http://localhost:8000/checkAndDeleteUserPlan", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: user.email }),
        });
        res = await res.json();
        if (res.message === "ok" || res.message === "UserPlan not found") {
          toast.success("Add New Plan", {
            position: toast.POSITION.TOP_RIGHT,
          });
        }else if(res.message !== "UserPlan is still valid"){
          throw new Error(res.message);
        }
      } catch (error) {
        toast.success("Resgister For a Batch", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
      fetchBatchDetails();
    }
    localStorage.getItem("user")?validateUserPlan():navigate("/signup");
  }, []);

  const handleJoinClick = (srNo) => {
    navigate(`/payment/batch/${srNo}`);
  };


  return (
    <div  style={{ backgroundColor: "white", height:"100%",  padding: "20px" }}>
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Yoga Classes</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {/* <th style={tableHeaderStyle}>Sr No</th> */}
            <th style={tableHeaderStyle}>Batch Time</th>
            <th style={tableHeaderStyle}>Price</th>
            <th style={tableHeaderStyle}>Register</th>
          </tr>
        </thead>
        <tbody>
          {classes.map((yogaClass) => (
            <tr key={yogaClass.srNo} style={tableRowStyle}>
              {/* <td>{yogaClass.srNo}</td> */}
              <td>{yogaClass.batchTime}</td>
              <td>{yogaClass.cost}</td>
              <td>
                <button
                  disabled={active ? activeId !== yogaClass.srNo : false}
                  style={{
                    backgroundColor: active
                      ? activeId !== yogaClass.srNo
                        ? "#e74c3c"
                        : "#3498db"
                      : "#4caf50",
                    color: "white",
                    padding: "8px 12px",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    handleJoinClick(yogaClass.srNo);
                  }}
                >
                  {active
                    ? activeId !== yogaClass.srNo
                      ? "Not Applicable"
                      : "Registered"
                    : "Register"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: "#333",
  color: "white",
  padding: "10px",
};

const tableRowStyle = {
  borderBottom: "1px solid #ddd",
  padding: "10px",
};


export default Home;
