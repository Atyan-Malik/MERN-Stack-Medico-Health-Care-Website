import React, { useState } from "react";
import "../styles/Login.css";

const Login = () => {
  const [name, setName] = useState("")
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({name,email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }
      
      if(res.ok){
        setSuccess("login successfull")
      }

      localStorage.setItem("user", JSON.stringify(data.user));
        
        
    
      console.log("Logged in user:", data);
    } catch (err) {
      res.status(500).json({ message: "Failed to create appointment" });
    }
  };
   
  

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Login To Medico</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group password-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
             {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <button type="submit">Login</button>
         
        </form>
      </div>
    </div>
  );
};

export default Login;
