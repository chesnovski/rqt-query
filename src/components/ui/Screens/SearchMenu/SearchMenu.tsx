import React, { FC, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import styles from "../SearchMenu/SearchMenu.module.scss";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";

async function fetchCoin(name: string) {
  const { data } = await axios.get(
    `https://api.coinstats.app/public/v1/coins/${name}?currency=Binance`
  );

  return data.coin;
}

const SearchMenu: FC = () => {
  const coinName = useSelector((state: RootState) => state.coin.coin);

  //   const [coinName, setCoinName] = useState("solana");
  const { data, isLoading, isError } = useQuery({
    queryKey: ["coin", coinName],
    queryFn: () => fetchCoin(coinName),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <h3> Loading...</h3>;
  }

  if (isError) {
    return <h3> Error receiving data</h3>;
  }

  return (
    <div className={styles.parent}>
      <div>
        {data ? (
          <div className={styles.main} key={data.id}>
            <div className="grid grid-cols-2 gap-4">
              <div className="mx-6">
                <div className="flex justify-normal items-center">
                  <img className={styles.coinImg} src={data.icon} alt="" />
                  <p className="mx-2">{data.name}</p>
                </div>
                <p className="mx-1 font-mono text-lg">
                  {data.price.toFixed(3)}$
                </p>
              </div>
              {data.priceChange1d ? (
                <div
                  className={` ${styles.priceChanged} ${
                    data.priceChange1d > 4
                      ? " bg-green-600 text-green-800   transition-opacity animate-ping-short hover:animate-none "
                      : data.priceChange1d < -4
                      ? "bg-rose-600 animate-ping-short text-red-800  hover:animate-none"
                      : data.priceChange1d < 0
                      ? "bg-rose-600 text-red-800"
                      : "bg-green-600 text-green-800  "
                  }`}
                >
                  {data.priceChange1d > 0 ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}
                  {data.priceChange1d} %
                </div>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="text-base font-mono font-bold text-xl">
            Please write entire name of coin
          </div>
        )}

        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </div>
  );
};

export default SearchMenu;
