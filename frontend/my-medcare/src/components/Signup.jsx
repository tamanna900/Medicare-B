import React, { useState } from "react";
import stethImg from "../assets/stethoscope.jpg";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    age: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Signup successful!");
  };

  return (
    <div className="flex justify-center items-start md:items-stretch min-h-screen bg-gray-100 pt-24">
    <div className="hidden md:flex w-1/2 items-center justify-center">
      <img
        src={stethImg}
        alt="Medicare"
        className="rounded-xl shadow-lg object-cover h-full max-h-[80vh]"
      />
    </div>
  
    <div className="flex flex-col justify-center w-full md:w-1/2 p-6">
      <h2 className="text-2xl font-bold text-blue-900 mb-4 text-center md:text-left">
        Create an Account
      </h2>
  
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-4 md:p-6 rounded-xl shadow-md space-y-3 overflow-y-auto"
        style={{ maxHeight: "80vh" }}
      >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>

          <input
            name="age"
            type="number"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <textarea
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>

          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <a href="/doctor-login" className="text-blue-600 font-semibold">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
