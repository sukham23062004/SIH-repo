import React from "react";
import { FcGoogle } from "react-icons/fc";
const signup = () => {
  return (
    <body className="max-h-screen">
      <section className="border-red-500 bg-gray-200 min-h-screen flex items-center justify-center">
        <div className="bg-gray-100 p-5 flex rounded-2xl shadow-lg max-w-3xl">
          <div className="md:w-1/2 px-5">
            <h2 className="text-2xl font-bold text-[#002D74]">Sign Up</h2>
            <form className="mt-6" action="#" method="POST">
              <div>
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none text-slate-950"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Mobile Number</label>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="Enter Your Mobile Number"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none text-slate-950"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none text-slate-950"
                  required
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Enter Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none text-slate-950"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-7 grid grid-cols-3 items-center text-gray-500">
              <hr className="border-gray-500" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-500" />
            </div>

            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 ">
              <FcGoogle></FcGoogle>
              <span className="ml-4 text-slate-950">Sign Up with Google</span>
            </button>
          </div>
          <div className="w-1/2 md:block hidden mt-16 ">
            <img src="Docx.jpg" className="rounded-2xl" alt="page img" />
          </div>
        </div>
      </section>
    </body>
  );
}

export default signup
