// import React,{useEffect, useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast } from "react-toastify";

// const Login = () => {
//     const [email,setEmail] = useState();
//     const [password,setPassword] = useState();
//     const navigate = useNavigate();

//     useEffect(() => {
//         const auth = localStorage.getItem("user");
//         if(auth) {
//             navigate('/');
//         }
//     },[]);

//     function Email(event){
//         setEmail(event.target.value);
//     }

//     function Password(event){
//         setPassword(event.target.value);
//     }

//     async function handleLogin(){
//         alert("login")
//     }

//     // async function handleLogin(){
//     //     let result = await fetch("http://localhost:8000/login",{
//     //         method:"post",
//     //         body:JSON.stringify({email,password}),
//     //         headers:{'Content-Type': 'application/json'}
//     //     });
//     //     result = await result.json();
//     //     if(result.message==="ok"){
//     //         localStorage.setItem("user",JSON.stringify(result.user));
//     //         toast.success("Login Successfully!", {
//     //             position: toast.POSITION.TOP_RIGHT,
//     //         });
//     //         navigate('/');
//     //     }else{
//     //         toast.warning(result.error, {
//     //             position: toast.POSITION.TOP_RIGHT,
//     //         });
//     //     }

//     // }

//   return (
//     <div className='login'> 
//             <div >
//             <h1>Login</h1>
            
//             <input 
//                 type="email" 
//                 className='inputBox'
//                 placeholder="Email" 
//                 value={email}
//                 onChange={Email}
//              />
//             <input 
//                 type="password" 
//                 className='inputBox'
//                 placeholder="Password" 
//                 value={password}
//                 onChange={Password} 
//             />
//             <button onClick={handleLogin} className="button">Login</button>
            
//         </div>
//     </div>
//   )
// }

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
`;

const LoginForm = styled.form`
  max-width: 400px;
  width: 100%;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-radius: 8px;
  text-align: center;
`;

const InputBox = styled.input`
  width: 100%;
  padding: 12px;
  box-sizing: border-box;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #4caf50;
    outline: none;
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

      async function handleLogin(){
        let result = await fetch("http://localhost:8000/login",{
            method:"post",
            body:JSON.stringify({email,password}),
            headers:{'Content-Type': 'application/json'}
        });
        result = await result.json();
        if(result.message==="ok"){
            localStorage.setItem("user",JSON.stringify(result.user));
            toast.success("Login Successfully!", {
                position: toast.POSITION.TOP_RIGHT,
            });
            navigate('/');
        }else{
            toast.warning(result.error, {
                position: toast.POSITION.TOP_RIGHT,
            });
        }

    }

  return (
    <LoginContainer>
      <LoginForm>
        <h1>Login</h1>
        <InputBox
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <InputBox
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="button" onClick={handleLogin}>
          Login
        </Button>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
