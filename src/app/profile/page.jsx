"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const router = useRouter();
  const [data, setData] = useState("");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logout Succesful");
      router.push("/login");
    } catch (error) {
      console.log(error.message);

      toast.error("Logout unsuccessful");
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res.data.data._id);
    setData(res.data.data._id);
  };

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
          <p className="text-gray-100">Frontend Developer</p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-100">
            Enthusiastic developer with a passion for building intuitive user
            experiences.
          </p>
        </div>

        <div className="mt-6 text-center">
          <a
            href="mailto:johndoe@example.com"
            className="text-blue-500 hover:underline text-sm"
          >
            johndoe@example.com
          </a>
        </div>

        <h1>
          {data === "" ? (
            "nothing"
          ) : (
            <Link href={`/profile/${data}`}> {data} </Link>
          )}
        </h1>
        <button
          onClick={logout}
          className=" m-10 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Log Out
        </button>

        <button
          onClick={getUserDetails}
          className=" m-10 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Get User Details
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
