import React, { FC } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from "./CoinPriceChangeItem.module.scss";
import { ICoinInfo } from "./coinInfo.interface";

const CoinPriceChangeItem: FC<ICoinInfo> = (coin) => {
  return (
    <>
      {coin.priceChange1d ? (
        <div
          className={` ${styles.priceChanged} ${
            coin.priceChange1d > 4
              ? " bg-green-600 text-green-800   transition-opacity animate-ping-short hover:animate-none "
              : coin.priceChange1d < -4
              ? "bg-rose-600 animate-ping-short text-red-800  hover:animate-none"
              : coin.priceChange1d < 0
              ? "bg-rose-600 text-red-800"
              : "bg-green-600 text-green-800  "
          }`}
        >
          {coin.priceChange1d > 0 ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          {coin.priceChange1d} %
        </div>
      ) : null}
    </>
  );
};

export default CoinPriceChangeItem;
