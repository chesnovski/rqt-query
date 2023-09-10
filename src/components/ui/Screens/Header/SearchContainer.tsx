import React, { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSearch } from "../../../../store/reducer/coinReducer";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

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
    <form className="mx-2 flex justify-normal">
      <input
        className="mx-2 border rounded px-2 outline-none"
        type="text"
        placeholder="Search Coin"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Link to="/searchcoin">
        <button type="submit" onClick={handleOnClick}>
          <SearchIcon />
        </button>
      </Link>
    </form>
  );
};

export default SearchContainer;
