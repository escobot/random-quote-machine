import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Quotes: React.FC<{}> = () => {

  const [quotes, setQuote] = useState<any[]>([])

  const fetchQuotes = async () => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    }    
    const response = await axios.get('/api/quotes', config);
    setQuote(response.data.quotes);
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

      {/* Display data from API */}
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
    </div>
  );
};

export default Quotes;