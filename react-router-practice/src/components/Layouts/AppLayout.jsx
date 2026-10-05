import React from "react";
import Header from "../common/Header";
import { Outlet } from "react-router";
import Footer from "../common/Footer";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
