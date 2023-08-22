
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
   <div>
    {data ? 
    <div>
      {data.map(coin => (
        <ul key={coin.id}>
          <li>{coin.name}</li>
          <li>{coin.price}</li>
        </ul>
      ))}
    </div>
    :
    <div> No data </div>}

    <div>
      <button onClick={() => setPage((p) => p-10)}>Prev</button>
      <button onClick={() => setPage((p) => p+10)}>Next</button>
    </div>
   </div>
  );
}

export default App;
