import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearch } from "../../../../store/reducer/coinReducer";
import { Link } from "react-router-dom";

const SearchContainer: FC = () => {
  const dispatch = useDispatch();

  const addCoinToSearch = (name: string) => {
    dispatch(addSearch(name));
  };
  const [text, setText] = useState("");
  const handleOnClick = () => {
    addCoinToSearch(text);
    setText("");
  };

  return (
    <form className="mx-2">
      <input
        className="mx-2 border rounded px-2 outline-none"
        type="text"
        placeholder="Search Coin"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Link to="/searchcoin">
        <input
          className={
            text
              ? "border-indigo-500/75 border-r-2  font-bold px-1 "
              : "font-bold"
          }
          type="submit"
          disabled={!text}
          onClick={handleOnClick}
          value="Search"
        ></input>
      </Link>
    </form>
  );
};

export default SearchContainer;
