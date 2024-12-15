import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className="w-full h-full min-h-[100vh] flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
}
