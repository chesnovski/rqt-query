import React, { FC } from "react";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import styles from "./CoinInfoContainer.module.scss";
import { ICoinInfo } from "./coinInfo.interface";

const CoinItem: FC<{ coin: ICoinInfo }> = ({ coin }) => {
  const coinMarketCapText =
    "The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.";
  return (
    <div className={styles.main} key={coin.id}>
      <div className="mx-6">
        <Link to={coin.websiteUrl}>
          <div className="flex justify-normal content-center">
            <img className={styles.coinImg} src={coin.icon} alt="" />
            <div className="flex justify-normal items-center">
              <p className="mx-2">{coin.name}</p>
              <p className="mx-2 text-xs text-gray-400 ">{coin.symbol}</p>
            </div>
          </div>
        </Link>
        <div className="flex justify-start items-center">
          <p className="mx-1 font-mono text-lg">{coin.price.toFixed(3)}$</p>
          <div className="max-sm:hidden mx-2 flex justify-normal items-center">
            <p className=" border-l-2 px-2 border-gray-200 dark:border-gray-700  mx-1 font-mono text-lg">
              {(coin.marketCap / 1000000000).toFixed(3)}B$
            </p>
            <Tooltip
              className="text-base text-gray-400"
              title={coinMarketCapText}
            >
              <InfoIcon />
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinItem;
