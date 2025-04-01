import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { faker } from '@faker-js/faker';


const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const fakeName = faker.internet.userName(); // Generate a fake name using faker
    const payload = {
      ...userData,
      name: fakeName, // Use the fake name instead of the real name
    };
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.errors
            ? data.errors.map((err) => err.msg).join(", ")
            : "Failed to register"
        );
      }

      navigate("/login"); // Navigate to login page on successful registration
    } catch (err) {
      setError(err.message || "Unexpected Error");
    }
  };

  return (
    <div className="min-h-screen min-w-3xl bg-gray-800 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-black rounded-lg max-w-xl"
      >
        <h2 className="text-white text-lg mb-6">Create an account</h2>
        <input
          type="text"
          name="name"
          value={userData.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-3 mb-4 rounded bg-gray-600 text-white"
        />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          placeholder="Your email"
          className="w-full p-3 mb-4 rounded bg-gray-600 text-white"
        />
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-3 mb-6 rounded bg-gray-600 text-white"
        />
        <button
          type="submit"
          className="w-full p-3 mb-2 rounded bg-white text-gray-800"
        >
          Register
        </button>
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-gray-400 text-sm">
          Have already an account?
          <a href="/login" className="text-blue-500">
            {" "}
            Login
          </a>
        </p>
        <p className="text-gray-400 text-sm">
          <a href="/" className="text-blue-500">
            Back to Home Page →
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
