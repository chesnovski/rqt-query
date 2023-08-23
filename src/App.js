
import './App.css';
import React, { useState } from 'react';
import axios from 'axios'
import { useQuery } from 'react-query';



async function fetchCoins(skip ) {
    const { data } = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`);


    return data.coins
}

function App() {


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
   <div className='ml-12 mt-8'>
    {data ? 
    <div>
      {data.map(coin => (
        <div key={coin.id}>
          <img className="rounded-full h-8 inline-block mr-2"
          src={coin.icon}
          alt="" />
          {coin.name}
          <p>{coin.price.toFixed(3)}$</p>
          <hr/>
        </div>
      ))}
    </div>
    :
    <div> No data </div>}

    <div className='mt-6'>
      {page === 0 ? 
        <div>
        <button disabled className="btn-disabled" onClick={() => setPage((p) => p-10)}>Prev</button>
        <button className="btn-secondary" onClick={() => setPage((p) => p+10)}>Next</button>
        </div>
        :
        <div>
          <button className="btn" onClick={() => setPage((p) => p-10)}>Prev</button>
          <button className="btn-secondary" onClick={() => setPage((p) => p+10)}>Next</button>
        </div>
      }
    </div>
   </div>
  );
}

export default App;
