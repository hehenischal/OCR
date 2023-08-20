"use client";

import React from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [mobileNav, setMobileNav] = React.useState(true);

  const handleHam = (e: any) => {
    setMobileNav(!mobileNav);
  };

  return (
    <>
      {/* For bigger devices */}
      <nav className=" w-full flex justify-between h-[71px]  mx-w-[1240px] mx-auto px-4 bg-white text-black py-3 text-lg z-10 border-b ">
        <h1 className="text-3xl font-bold text-[0000] flex items-center">
          OCR
        </h1>
        <div className="nav-list flex justify-between items-center ">
          <ul className="hidden md:flex justify-center px-4 gap-[4vw] uppercase">
            <Link href="/">
              <li className="cursor-pointer   text-[20px] transition ease-in-out delay-15 md:hover:-translate-y-1 hover:scale-105 duration-300">
                Home
              </li>
            </Link>
            <Link href="/about">
              <li className="cursor-pointer  text-[20px] transition ease-in-out delay-15 md:hover:-translate-y-1 hover:scale-105 duration-300  ">
                About
              </li>
            </Link>
            
            <Link href="/contact">
              <li className="cursor-pointer  text-[20px] transition ease-in-out delay-15 md:hover:-translate-y-1 hover:scale-105 duration-300 ">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        {/* for smaller devices */}

        <div className="flex  items-center md:hidden">
          <div onClick={handleHam}>
            {!mobileNav ? (
              <AiOutlineClose hidden size={30} />
            ) : (
              <AiOutlineMenu className=" cursor-pointer" size={30} />
            )}
          </div>

          <div
            className={
              !mobileNav
                ? "nav-list fixed left-0 top-0 w-[60%] h-full z-0 border-r  bg-gray-700  ease-linear duration-300 md:hidden"
                : "fixed left-[-100%]"
            }
          >
            <div className="flex justify-between items-center mt-4 mb-4 ml-2 mr-2">
              <h1 className=" text-white text-3xl font-bold text-[0000] cursor-default">
                Blogs
              </h1>
              <div onClick={handleHam}>
                <AiOutlineClose
                  className="text-white cursor-pointer"
                  size={30}
                />
              </div>
            </div>
            <hr />

            <ul className=" mt-14 text-white uppercase text-center ">
              <Link href="/">
                <li className=" p-4">Home</li>
              </Link>
              <Link href="/about">
                <li className=" p-4">About</li>
              </Link>
              <Link href="/blogs">
                <li className="p-4 ">Blogs</li>
              </Link>

              <Link href="/contact">
                <li className=" p-4">Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
