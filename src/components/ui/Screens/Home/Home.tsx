import "../../../../global.css";
import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InfoIcon from "@mui/icons-material/Info";
import styles from "./Home.module.scss";
import { IHome } from "./home.interface";
import Tooltip from "@mui/material/Tooltip";
import SkeletonLoader from "../SkeletonLoader";
import { Link } from "react-router-dom";

async function fetchCoins(skip: number) {
  const { data } = await axios.get(
    `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`
  );

  return data.coins;
}

const Home = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoins(page),
    keepPreviousData: true,
  });

  const coinMarketCapText =
    "The total market value of a cryptocurrency's circulating supply. It is analogous to the free-float capitalization in the stock market.";

  if (isLoading) {
    return (
      <div className="mx-11 mb-6">
        <SkeletonLoader count={3} className="h-10 mt-6" />
      </div>
    );
  }

  if (isError) {
    return <h2>Error to loading data</h2>;
  }

  return (
    <>
      <div className={styles.parent}>
        <div>
          {data ? (
            <div>
              {data.map((coin: IHome) => (
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={styles.main} key={coin.id}>
                      <div className="mx-6">
                        <Link to={coin.websiteUrl}>
                          <div className="flex justify-normal content-center">
                            <img
                              className={styles.coinImg}
                              src={coin.icon}
                              alt=""
                            />
                            <div className="flex justify-normal items-center">
                              <p className="mx-2">{coin.name}</p>
                              <p className="mx-2 text-xs text-gray-400 ">
                                {coin.symbol}
                              </p>
                            </div>
                          </div>
                        </Link>
                        <div className="flex justify-start items-center">
                          <p className="mx-1 font-mono text-lg">
                            {coin.price.toFixed(3)}$
                          </p>
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
                        {coin.priceChange1d > 0 ? (
                          <ArrowDropUpIcon />
                        ) : (
                          <ArrowDropDownIcon />
                        )}
                        {coin.priceChange1d} %
                      </div>
                    ) : null}
                  </div>
                  <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
                </div>
              ))}
            </div>
          ) : (
            <div> No data </div>
          )}
          <div className="mx-2 my-4">
            {page === 0 ? (
              <div className="flex justify-start  max-sm:justify-between">
                <div className="btn-disabled  text-center">
                  <NavigateBeforeIcon fontSize="large" />
                </div>
                <div
                  className="btn-secondary text-center"
                  onClick={() => setPage((p) => p + 10)}
                >
                  <NavigateNextIcon fontSize="large" />
                </div>
              </div>
            ) : (
              <div className=" flex justify-start  max-sm:justify-between">
                <div
                  className="btn  text-center"
                  onClick={() => setPage((p) => p - 10)}
                >
                  <NavigateBeforeIcon fontSize="large" />
                </div>
                <div
                  className="btn-secondary text-center"
                  onClick={() => setPage((p) => p + 10)}
                >
                  <NavigateNextIcon fontSize="large" />
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="max-sm:hidden flex justify-center items-center ">
          <img
            src="https://alternative.me/crypto/fear-and-greed-index.png"
            alt="Latest Crypto Fear & Greed Index"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
