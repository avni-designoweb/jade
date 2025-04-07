import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [role, setRole] = useState("");
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(! email || ! password){
        alert("Enter Details");
    }

    const param=new URLSearchParams();
    param.append("email",email);
    param.append("password",password);
    if (role === "User") {
      navigate(`/user?${param}`);
    } else if (role === "Admin") {
      navigate(`/admin?${param}`);
    }
  };
  return (
    <div className="flex justify-center items-center mt-40">
      <form onSubmit={handleSubmit}>
        <div className="rounded-2xl shadow-2xl p-8">
          <div className="flex flex-col">
            <label>Email</label>
            <input placeholder="email" className="bg-blue-100 p-1" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
          </div>
          <div className="flex flex-col">
            <label>Password</label>
            <input placeholder="password" className="bg-blue-100 p-1" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
          </div>
          <div className="flex space-x-4">
            <label>Role</label>
            <label>
              <input
                type="radio"
                value="User"
                name="role"
                onChange={() => setRole("User")}
              ></input>
              User
            </label>
            <label>
              <input
                type="radio"
                value="Admin"
                name="role"
                onChange={() => setRole("Admin")}
              ></input>
              Admin
            </label>
          </div>
          <div className="flex justify-center">
            <button className=" bg-blue-500">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
