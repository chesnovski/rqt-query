import '../../global.css';
import React, { useState } from 'react';
import axios from 'axios'
import { useQuery } from 'react-query';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import styles from './Home.module.scss'



async function fetchCoins(skip ) {
  const { data } = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`);


  return data.coins
}

  

const Home = () => {
  const [page, setPage] = useState(0)
  const {data, isLoading, isError} = useQuery({queryKey:['coins', page], queryFn: ()=> fetchCoins(page),
  keepPreviousData : true
        })
  

  if (isLoading) {
    return <h3> Loading...</h3>
  }

  if (isError) {
    return <h3> Error receiving data</h3>
  }


  return (
  <>
    <div class={styles.parent}>
        <div>
              {data ? 
          <div >
            {data.map(coin => (
              <div>
                <div className={styles.main} key={coin.id}>
                  <div className='grid grid-cols-2 gap-4'>
                    <div className='mx-6'>
                      <div className='flex justify-normal items-center'>
                        <img className={styles.coinImg}
                        src={coin.icon}
                        alt="" />
                        <p className='mx-2'>{coin.name}</p>
                      </div>
                      <p className='mx-1 font-mono text-lg'>{coin.price.toFixed(3)}$</p>
                  </div>
                    {coin.priceChange1d ? (
                      <p className={` ${styles.priceChanged} ${coin.priceChange1d > 4 ? "border-green-600 animate-ping hover:animate-none border-4 " : coin.priceChange1d < -4 ? "border-rose-600 border-4 animate-ping hover:animate-none": coin.priceChange1d < 0 ? "border-rose-600": "border-green-600"}`}>{coin.priceChange1d}%</p>
                    ) : null}
                  </div>
                </div>
                  <hr className='h-px my-2 bg-gray-200 border-0 dark:bg-gray-700'/>
              </div>
            ))}
          </div>
          :
          <div> No data </div>}
        </div>


        <div className='hidden md:flex md:justify-center md:items-center'>
          <img src="https://alternative.me/crypto/fear-and-greed-index.png" alt="Latest Crypto Fear & Greed Index" />
        </div>

      </div>  
    

    <div className='mx-8 mt-4  md:ml-32 md:mt-6 '>
      {page === 0 ? 
        <div className='flex justify-start'>
          <div className="btn-disabled  flex justify-center items-center" >
              <NavigateBeforeIcon  fontSize="large"  />
          </div>
          <div className="btn-secondary flex justify-center items-center " onClick={() => setPage((p) => p+10)} >
              <NavigateNextIcon  fontSize="large"  />
          </div>
        </div>
        :
        <div className='flex justify-start'>
          <div className="btn  flex justify-center items-center" onClick={() => setPage((p) => p-10)}>
              <NavigateBeforeIcon  fontSize="large"  />
          </div>
          <div className="btn-secondary flex justify-center items-center " onClick={() => setPage((p) => p+10)} >
              <NavigateNextIcon  fontSize="large"  />
          </div>
        </div>
      }
    </div>
  </>
    

  );
}

export default Home