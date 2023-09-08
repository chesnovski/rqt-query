import React from "react";
import axios from "axios";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import SkeletonLoader from "../../SkeletonLoader";
import styles from "./CoinInfoContainer.module.scss";
import { ICoinInfo } from "./coinInfo.interface";
import CoinPriceChangeItem from "./CoinPriceChangeItem";

async function fetchCoins(skip: number) {
  const { data } = await axios.get(
    `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`
  );

  return data.coins;
}

const CoinInfoContainer = () => {
  const page = useSelector((state: RootState) => state.page.page);
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
      {data ? (
        <div>
          {data.map((coin: ICoinInfo) => (
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
                <CoinPriceChangeItem coin={coin} />
              </div>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      ) : (
        <div> No data </div>
      )}
    </>
  );
};

export default CoinInfoContainer;
