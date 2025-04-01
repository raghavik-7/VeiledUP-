import React from "react";
import ProfileSidebar from "./ProfileSidebar";
import CreatePost from "./CreatePost";
import DisplayPosts from "./DisplayPosts";

export default function Profile() {
  return (
    <main className="profile bg-white ">
      <ProfileSidebar />
      <div className="max-w-2xl p-16">
        <CreatePost />
      </div>
    </main>
  );
}
