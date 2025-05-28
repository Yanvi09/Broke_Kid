import React, { useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profession: "",
    goal: "",
    workTime: "",
    sleepTime: "",
    budget: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/signup", formData);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert("Signup failed");
      console.log(error.response?.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add inputs for name, email, password, profession, goal, workTime, sleepTime, budget */}
      <input name="name" onChange={handleChange} placeholder="Name" required />
      <input name="email" type="email" onChange={handleChange} placeholder="Email" required />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
      <input name="profession" onChange={handleChange} placeholder="Profession" />
      <input name="goal" onChange={handleChange} placeholder="Your Goal" />
      <input name="workTime" onChange={handleChange} placeholder="Work Time" />
      <input name="sleepTime" onChange={handleChange} placeholder="Sleep Time" />
      <input name="budget" type="number" onChange={handleChange} placeholder="Budget (₹)" />
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
