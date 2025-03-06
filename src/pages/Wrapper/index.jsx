import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Sandbox from "../Sandbox/index.jsx";
import Home from "../Home";
import MyAcсount from "../MyAcount";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/header";
import "./Wrapper.scss";
import History from "../History";
import FightRoom from "../FightRoom/";
import ScrollToTopButton from "../../components/scrollToTopBtn/";
import { socket } from "../../socket.js";

export const Wrapper = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const location = useLocation();

  const token = localStorage.getItem("token") || null;
  const fetchProfile = async () => {
    if (!token) navigate("/login");
    try {
      const response = await fetch("http://localhost:5000/api/auth/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User profile:", data);
      } else if (response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
      localStorage.removeItem("token");
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [token]);

  useEffect(() => {
    console.log("socket connect");
    socket.connect();
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
