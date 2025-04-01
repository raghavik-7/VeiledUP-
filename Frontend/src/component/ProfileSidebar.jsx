import React, { useState, useEffect } from "react";
import "../styles/profile.css";
import dogs from "../Assets/Dogs.jpg";
// import { assets } from '../../Assets/assets'
import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";

const ProfileSidebar = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  console.log(storedUser.user.name);
  const loggedUser = storedUser?.user?.name;
  const loggedUserEmail = storedUser?.user?.email;

  const initialUserInfo = {
    username: loggedUser,
    email: loggedUserEmail,
    batch: "2022",
    bio: "Computer Science Student",
  };

  const [userInfo, setUserInfo] = useState(initialUserInfo);
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Logic to save updated userInfo (e.g., make API request to update user data)
    console.log("Saving user data:", userInfo);
    setIsEditing(false);
  };

  return (
    <>
      <div className="Profile p-8 rounded-lg">
        <img src={dogs} alt="" className="profile-photo" />
        <div className="profile-text">
          {isEditing ? (
            <div>
              <input
                type="text"
                name="username"
                value={userInfo.username}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="email"
                value={userInfo.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="batch"
                value={userInfo.batch}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="bio"
                value={userInfo.bio}
                onChange={handleInputChange}
              />
              <button onClick={handleSave} className="save">
                Save
              </button>
            </div>
          ) : (
            <div>
              <h3>{userInfo.username}</h3>
              <div className="email">{userInfo.email}</div>
              <div className="batch">{userInfo.batch}</div>
              <div className="bio">{userInfo.bio}</div>
              <button onClick={handleEdit} className="edit">
                <div className="flex"><MdEdit className="m-1" />Edit </div>
              </button>
            </div>
          )}
        </div>
        <button className="homepage">
          <Link to="/main" className="homepage-text">
            Home Page
          </Link>
        </button>
      </div>

      {/* <div className="Profile">
                <img src={assets.dogs} alt="" className="profile-photo" />
                <div className="profile-text">
                    <div className="username">
                        <h3>ANISHA SODANI</h3>
                    </div>
                    <div className="email">
                        ui22cs07@iiitsurat.ac.in
                    </div>
                    <div className="email">
                        Batch
                    </div>
                    <div className="email">
                        Bio
                    </div>

                </div>

                <button className='edit'>
                    <MdEdit />
                    Edit
                </button>
                <button className="homepage" onClick={handleEdit}>
                    <Link to='/home' className='homepage-text'>
                        Home Page
                    </Link>
                </button>
            </div> */}
    </>
  );
};

export default ProfileSidebar;
