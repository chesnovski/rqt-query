import React, { FC, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import styles from "../Home/Home.module.scss";

interface ICoin {
  id: number;
  name: string;
}

async function fetchCoin(name: string) {
  const { data } = await axios.get(
    `https://api.coinstats.app/public/v1/coins/${name}?currency=Binance`
  );

  return data.coin;
}

const SearchMenu: FC = () => {
  const [coinName, setCoinName] = useState("bitcoin");
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
      <div>{data ? <div>{data.name}</div> : <div> No data </div>}</div>
    </div>
  );
};

export default SearchMenu;
