import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';

const Quotes: React.FC<{}> = () => {

  const [loading, setLoading] = useState<Boolean>(false)
  const [quotes, setQuote] = useState<any[]>([])

  const fetchQuotes = async () => {
    setLoading(true);
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    }    
    const response = await axios.get('https://pbgnz-random-quotes-api.herokuapp.com/api/quotes', config);
    setQuote(response.data.quotes);
    setLoading(false);
  };

  return (
    <div>
      {/* Fetch data from API */}
      <div>
        <button className="fetch-button" onClick={fetchQuotes}>
          Get Quotes!
        </button>
        <br />
      </div>
      {loading && <div className="center"><Loader type="Bars" color="#00BFFF" height={80} width={80}/></div>}
      {!loading && 
        <div className="quotes">
          {quotes &&
            quotes.map((quote, index) => {
              let url = `https://twitter.com/intent/tweet?text=${quote.quote} - ${quote.author}`;
              return (
                <div className="quote" key={index}>
                  <h2>{quote.quote}</h2>
                  <h2>{quote.author}</h2>
                  <a className="twitter-share-button"
                    href={url}>
                    Tweet
                  </a>
                </div>
              );
            })}
        </div>
      }
    </div>
  );
};

export default Quotes;