import React from "react";
import Navbar from "./Navbar";
import logo from "../Assets/LOGO.png";
import map from "../Assets/location.png";
import bg from "../Assets/bg1.svg";

export default function Home() {
  return (
    <div className="flex flex-col justify-between gap-16 p-8 bg-black">
      <Navbar />
      <div className="flex justify-between bg-blue-500 p-8 rounded-xl ">
        <div className="flex flex-1 items-center justify-center">
          <img src={bg} alt="front-page image" />
        </div>
        <div className="justify flex-1 items-center gap-20 ">
          <br></br>
          <q className="text-center text-xl font-bold">CONNECT UNSEEN, SPEAK UNFILTERED</q>
          <br></br>
          <br></br>
          <p className=" text-justify">
            Veiled is about people who want to connect but are not able to. To
            create a platform that encourages open and honest communication by
            allowing users to participate in discussions without the fear of being
            identified. This Platform provides an online interaction platform where users can engage in discussions and share opinions anonymously, without fear of judgment or repercussions.
          </p>
        </div>
      </div>
      <footer className="bg-black text-white p-4 flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="ml-10 object-cover h-20 w-auto" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-semi-bold " >Locate Us</h1>
          {/* Placeholder for map - Ideally, you would embed a map here */}
          <div style={{ marginTop: '30px' }}>
            <img src={map} alt="logo" className="h-50 w-80" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p>Anisha Sodani - 1234567890</p>
          <p>ui22cs07@iiitsurat.ac.in</p>
          <p>Raghavi Kurapati - 0987654321</p>
          <p>ui22cs40@iiitsurat.ac.in</p>
        </div>
      </footer>
    </div>
  );
}
