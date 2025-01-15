import React from "react";

const UserProfile = ({ params }) => {
  return (
    <div className=" flex items-center justify-center min-h-screen">
      <div className=" bg-slate-700 max-w-sm rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center">
          <img
            className="w-24 h-24 rounded-full shadow-md"
            src="vercel.svg"
            alt="Profile Picture"
          />
          <h2 className="mt-4 text-xl font-semibold text-gray-100">John Doe</h2>
          <p className="text-gray-100">
            Frontend Developer{" "}
            <span className="text-amber-300">{params.id}</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
