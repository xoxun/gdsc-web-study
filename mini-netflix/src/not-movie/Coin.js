import { useState,useEffect } from "react";

function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(()=>{
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(response=>response.json())
        .then((json)=>{
            console.log(json);
            setCoins(json);
            setLoading(false);
        });
    },[]);
  return(
    <div>
      <h1>The Coins!</h1>
      {loading ? <strong>Loading...</strong>:null}
      <ul>
        {coins.map((item)=><li>{item.name} ({item.symbol}) : {item.quotes.USD.price} USD</li>)}
      </ul>
    </div>);
}

export default Coin;
