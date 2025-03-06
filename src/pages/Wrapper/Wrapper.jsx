import { Route, Routes, useNavigate } from "react-router-dom";
import Sandbox from "../Sandbox/index.jsx";
import Home from "../Home";
import MyAcсount from "../MyAcount";
import React, { useEffect, useRef } from "react";
import Header from "../../components/header";
import "./Wrapper.scss";
import History from "../History";
import FightRoom from "../FightRoom/";
import ScrollToTopButton from "../../components/scrollToTopBtn/";
import { AuthApi } from "../../Api/auth";
import { connectSocket, socket } from "../../config/socket.js";

const Wrapper = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const token = localStorage.getItem("token") || null;
  const fetchProfile = async () => {
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const data = await AuthApi.fetchProfile(token);
      console.log("User profile:", data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchProfile();
    if (token) {
      connectSocket(token);
    }
    return () => {
      socket.disconnect();
    };
  }, [token]);
  return (
    <div className={"wrapper"}>
      <Header />
      <div className={"page-container"} ref={containerRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<MyAcсount />} />
          <Route path="/history" element={<History />} />
          <Route path="/room/:id" element={<FightRoom />} />
          <Route path="/sandbox" element={<Sandbox />} />
        </Routes>
        <ScrollToTopButton containerRef={containerRef} />
      </div>
    </div>
  );
};
export default Wrapper;
