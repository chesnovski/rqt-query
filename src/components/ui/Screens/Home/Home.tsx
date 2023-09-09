import "../../../../global.css";
import React, { FC } from "react";

import styles from "./Home.module.scss";

import FearGreed from "./FearGreed/FearGreed";
import CoinInfoContainer from "./CoinInfoContainer/CoinInfoContainer";

const Home: FC = () => {
  return (
    <>
      <div className={styles.parent}>
        <div>
          <CoinInfoContainer />
        </div>

        <div className="max-sm:hidden flex justify-center items-center ">
          <FearGreed />
        </div>
      </div>
    </>
  );
};

export default Home;
