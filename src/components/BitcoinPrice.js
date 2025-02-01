import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BitcoinPrice = () => {
  const [price, setPrice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBitcoinPrice = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_market_cap=true&include_24hr_change=true'
        );
        const data = response.data.bitcoin;
        setPrice(data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching Bitcoin price');
        setLoading(false);
      }
    };

    fetchBitcoinPrice();
  }, []);

  if (loading) return <div className="loading">Loading Bitcoin price...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="bitcoin-price">
      <h3>Bitcoin Price</h3>
      <p>Current Price: ${price.usd}</p>
      <p>24h Change: {price.usd_24h_change.toFixed(2)}%</p>
      <p>Market Cap: ${price.usd_market_cap.toLocaleString()}</p>
    </div>
  );
};

export default BitcoinPrice;
