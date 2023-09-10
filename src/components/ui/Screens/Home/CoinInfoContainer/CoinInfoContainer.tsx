import React, { FC } from "react";
import axios from "axios";

import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import SkeletonLoader from "../../SkeletonLoader";
import styles from "./CoinInfoContainer.module.scss";
import { ICoinInfo } from "./coinInfo.interface";
import CoinPriceChangeItem from "./CoinPriceChangeItem";
import ButtonModule from "./ButtonModule";
import CoinItem from "./CoinItem";

async function fetchCoins(skip: number) {
  const { data } = await axios.get(
    `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`
  );

  return data.coins;
}

const CoinInfoContainer: FC = () => {
  const page = useSelector((state: RootState) => state.page.page);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["coins", page],
    queryFn: () => fetchCoins(page),
    keepPreviousData: true,
  });

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
    <div>
      {data ? (
        <div>
          {data.map((coin: ICoinInfo) => (
            <div>
              <div className="grid grid-cols-2 gap-4">
                <CoinItem coin={coin} />

                <CoinPriceChangeItem priceChange1d={coin.priceChange1d} />
              </div>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            </div>
          ))}
        </div>
      ) : (
        <div> No data </div>
      )}
      <ButtonModule />
    </div>
  );
};

export default CoinInfoContainer;
