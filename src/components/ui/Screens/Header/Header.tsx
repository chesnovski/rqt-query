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
      <div className="w-full max-lg:px-4 lg:px-16 flex justify-between content-center bg-gradient-to-r from-indigo-500 to-blue-100 font-mono text-lg text-gray-800 text-center font-bold">
        <div className="">
          <div className="hidden lg:block">
            Please be calm and take your profit
          </div>
          <div className="lg:hidden">Please take your profit</div>
        </div>

        <div className=" max-lg:hidden flex justify-between content-center text-center">
          <form className="mx-2">
            <input
              className="mx-2 border rounded px-2"
              type="text"
              placeholder="Search Coin"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Link to="/searchcoin">
              <input
                className="font-bold"
                type="submit"
                disabled={!text}
                onClick={handleOnClick}
                value="Search"
              ></input>
            </Link>
          </form>
          <div className="font-bold">
            <a className="mx-2" href="/">
              Home
            </a>
            <a className="mx-2" href="/about">
              About
            </a>
          </div>
        </div>
        <div
          onClick={handleMenu}
          className="my-2 mx-2 space-y-2 max-lg:mr-4 lg:hidden"
        >
          <span className="block w-8 h-0.5 bg-gray-600"></span>
          <span className="block w-5 h-0.5 bg-gray-600"></span>
        </div>
      </div>
      {open ? (
        <div className="w-full mb-4 pt-2 flex justify-between content-center bg-gradient-to-r from-indigo-500 to-blue-100  font-mono lg:hidden  max-sm:block">
          <form className="mx-2 mb-1">
            <input
              className="mx-2 border rounded px-2"
              type="text"
              placeholder="Search Coin"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Link to="/searchcoin">
              <input
                className="font-bold"
                type="submit"
                disabled={!text}
                onClick={handleOnClick}
                value="Search"
              ></input>
            </Link>
          </form>
          <div className="font-bold px-2">
            <a className="mx-2" href="/">
              Home
            </a>
            <a className="mx-2" href="/about">
              About
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;
