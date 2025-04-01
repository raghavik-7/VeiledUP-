import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute";
import Main from "./component/Main";
import Profile from "./component/Profile";
import PostsByTag from "./component/PostByTag";

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/main" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/hackathon" element={<PostsByTag tag="hackathon" />} />
            <Route path="/academic" element={<PostsByTag tag="academic" />} />
            <Route path="/cultural" element={<PostsByTag tag="cultural" />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
