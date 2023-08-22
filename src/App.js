
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useQuery } from 'react-query';



async function fetchCoins(skip =0) {
    const { data } = await axios.get(`https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`);


    return data.coins
}

function App() {


  const [page, setPage] = useState(0)
  const {data, isLoading, isError} = useQuery({queryKey:['coins', page], queryFn: ()=> fetchCoins(page),
        options: {
          keepPreviosData : true
        }})

  if (isLoading) {
    return <h3> Loading...</h3>
  }

  if (isError) {
    return <h3> Error receiving data</h3>
  }

 



  return (
   <div className='ml-8 mt-8'>
    {data ? 
    <div>
      {data.map(coin => (
        <div key={coin.id}>
          <p>{coin.name}</p>
          <p>{coin.price}$</p>
          <hr class="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </div>
      ))}
    </div>
    :
    <div> No data </div>}

    <div className='mt-6'>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-full" onClick={() => setPage((p) => p-10)}>Prev</button>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mr-2 border border-blue-500 hover:border-transparent rounded-full" onClick={() => setPage((p) => p+10)}>Next</button>
    </div>
   </div>
  );
}

export default App;
