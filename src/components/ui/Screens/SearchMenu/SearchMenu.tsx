import { FC } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import styles from "../SearchMenu/SearchMenu.module.scss";
import { RootState } from "../../../../store/store";
import { useSelector } from "react-redux";
import CoinPriceChangeItem from "../Home/CoinInfoContainer/CoinPriceChangeItem";
import SkeletonLoader from "../SkeletonLoader";
import CoinItem from "../Home/CoinInfoContainer/CoinItem";

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
    queryFn: () => fetchCoin(coinName.toLowerCase()),
    keepPreviousData: true,
  });

  if (isLoading) {
    return (
      <div className="mx-11 mb-6">
        <SkeletonLoader count={1} className="h-10 mt-6" />
      </div>
    );
  }

  if (isError) {
    return <h3> Error receiving data</h3>;
  }

  return (
    <div className={styles.parent}>
      <div>
        {data ? (
          <div className="flex justify-start items-center">
            <CoinItem coin={data} />
            <CoinPriceChangeItem priceChange1d={data.priceChange1d} />
          </div>
        ) : (
          <div className=" font-mono font-bold text-xl">
            Please enter full coin name
          </div>
        )}

        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
      </div>
    </div>
  );
};

export default SearchMenu;
