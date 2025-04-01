import React from "react";
import MainNavbar from "./MainNavbar";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

export default function Main() {
  return (
    <>
      <MainNavbar />
      <main className="flex">
        <Sidebar />
        <MainContent />
      </main>
    </>
  );
}
