import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Dashboard = () => {
  return (
    <>
      <h1>Dashboard navbar</h1>
      <Outlet />
      <Footer />
    </>
  );
};

export default Dashboard;
