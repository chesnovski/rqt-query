
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'


function App() {

  const[coins, setCoins] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false) 

  async function fetchCoins() {
    try {
      const { data } = await axios.get('https://api.coinstats.app/public/v1/coins?limit=10');
      setCoins(data.coins)
    } catch{
      setError(true)

    } finally {
      setLoading(false)

    }
  }
  

  useEffect(() => {
    fetchCoins()
  }, [])

  if (loading) {
    return <h3> Loading...</h3>
  }

  if (error) {
    return <h3> Error receiving data</h3>
  }

 



  return (
   <div>
    {coins ? 
    <div>
      {coins.map(coin => (
        <ul>
          <li>{coin.name}</li>
          <li>{coin.price}</li>
        </ul>
      ))}
    </div>
    :
    <div> No data </div>}
   </div>
  );
}

export default App;
