import "../../../../global.css";
import React, { useState } from "react";

import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import styles from "./Home.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import {
  DecreasePageAction,
  IncreasePageAction,
} from "../../../../store/reducer/pageReducer";
import FearGreed from "./FearGreed/FearGreed";
import CoinInfoContainer from "./CoinInfoContainer/CoinInfoContainer";

const Home = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.page.page);

  const increasePage = () => {
    dispatch(IncreasePageAction());
  };
  const decreasePage = () => {
    dispatch(DecreasePageAction());
  };

  return (
    <>
      <div className={styles.parent}>
        <div>
          <CoinInfoContainer />

          <div className="mx-2 my-4">
            {page === 0 ? (
              <div className="flex justify-start  max-sm:justify-between">
                <div className="btn-disabled  text-center">
                  <NavigateBeforeIcon fontSize="large" />
                </div>
                <div
                  className="btn-secondary text-center"
                  onClick={increasePage}
                >
                  <NavigateNextIcon fontSize="large" />
                </div>
              </div>
            ) : (
              <div className=" flex justify-start  max-sm:justify-between">
                <div className="btn  text-center" onClick={decreasePage}>
                  <NavigateBeforeIcon fontSize="large" />
                </div>
                <div
                  className="btn-secondary text-center"
                  onClick={increasePage}
                >
                  <NavigateNextIcon fontSize="large" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="max-sm:hidden flex justify-center items-center ">
          <FearGreed />
        </div>
      </div>
    </>
  );
};

export default Home;
