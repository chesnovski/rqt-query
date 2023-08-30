import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
    console.log(open);
  };
  return (
    <>
      <div className="header flex ">
        <div className="w-5/6 ">
          <h1 className="ml-16 hidden md:block">
            Please be calm and take your profit
          </h1>
          <h1 className="mx-auto  md:hidden">Please take your profit</h1>
        </div>

        <div className="w-1/6 flex align-center ">
          <div className="hidden md:block">
            <a className="mr-4" href="/">
              Home
            </a>
            <a className="mr-4" href="/about">
              About
            </a>
          </div>
          <div className="md:hidden">
            <div onClick={handleMenu} className="my-2 mx-2 space-y-2">
              <span className="block w-8 h-0.5 bg-gray-600"></span>
              <span className="block w-5 h-0.5 bg-gray-600"></span>
            </div>
          </div>
        </div>
      </div>
      {/* Create mobile navbar  */}
      {open ? (
        <div className="w-full mb-4 bg-gradient-to-r from-indigo-500 to-blue-100  font-mono md:hidden">
          <div className="px-2 pt-2 pb-2 space-y-1">
            <a className="ml-2" href="/">
              Home
            </a>
            <a className="ml-2" href="/about">
              About
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
