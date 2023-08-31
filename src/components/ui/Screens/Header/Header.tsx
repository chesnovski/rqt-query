import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSearch } from "../../../../store/reducer/coinReducer";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const addCoinToSearch = (name: string) => {
    dispatch(addSearch(name));
  };

  const handleOnClick = () => {
    addCoinToSearch(text);
    setText("");
  };

  return (
    <>
      <div className="header flex ">
        <div className="w-2/3 py-1">
          <h1 className="ml-16 hidden md:block">
            Please be calm and take your profit
          </h1>
          <h1 className="mx-auto  md:hidden">Please take your profit</h1>
        </div>

        <div className="w-1/3">
          <div className="hidden md:flex md:justify-center md:content-end">
            <div className="mx-4 py-1">
              <input
                className="mx-2 border rounded px-2"
                type="text"
                placeholder="Search Coin"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Link to="/searchcoin">
                <button
                  className="hover:bg-gray-600 hover:bg-opacity-20 rounded border hover:border-transparent px-2   text-black bg-transparent"
                  disabled={!text}
                  onClick={handleOnClick}
                >
                  Search
                </button>
              </Link>
            </div>
            <div className="px-2 py-1">
              <a className="mr-4" href="/">
                Home
              </a>
              <a className="mr-4" href="/about">
                About
              </a>
            </div>
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
          <div className="flex justify-start content-center my-4">
            <div className="">
              <input
                className="mx-2"
                type="text"
                placeholder="Search Coin"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Link to="/searchcoin">
                <button
                  className="bg-gray-600 rounded border px-2 py-1 bg-opacity-20  text-black"
                  disabled={!text}
                  onClick={handleOnClick}
                >
                  Search
                </button>
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
