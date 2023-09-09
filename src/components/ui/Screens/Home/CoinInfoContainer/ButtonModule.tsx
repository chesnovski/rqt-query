import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { RootState } from "../../../../../store/store";
import {
  DecreasePageAction,
  IncreasePageAction,
} from "../../../../../store/reducer/pageReducer";

const ButtonModule: FC = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page.page);

  const increasePage = () => {
    dispatch(IncreasePageAction());
  };
  const decreasePage = () => {
    dispatch(DecreasePageAction());
  };
  return (
    <div className="mx-2 my-4">
      {page === 0 ? (
        <div className="flex justify-start  max-sm:justify-between">
          <div className="btn-disabled  text-center">
            <NavigateBeforeIcon fontSize="large" />
          </div>
          <div className="btn-secondary text-center" onClick={increasePage}>
            <NavigateNextIcon fontSize="large" />
          </div>
        </div>
      ) : (
        <div className=" flex justify-start  max-sm:justify-between">
          <div className="btn  text-center" onClick={decreasePage}>
            <NavigateBeforeIcon fontSize="large" />
          </div>
          <div className="btn-secondary text-center" onClick={increasePage}>
            <NavigateNextIcon fontSize="large" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonModule;
