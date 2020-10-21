import React, { useState, useEffect } from "react";
import "./Headlines.css";
import axios from "axios";

const Headlines = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl =
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=3&apiKey=";
  const uri = apiUrl + apiKey;

  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(uri);
      setHeadlines(response.data.articles);
      return response;
    }
    fetchData();
  }, [uri]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="headlines">
      <h2 className="headlines__title">Headlines</h2>
      {headlines.map(
        (n) =>
          (n?.description !== "" || n?.content !== "") && (
            <div id={n.title} className="headlines__item" key={n.title}>
              <div>
                <h3 className="headlines__item__title">{n.title}</h3>
                <div className="headlines__item__date">
                  {n.publishedAt.split("T")[0]}
                </div>
                <div className="headlines__item__description">
                  {truncate(n?.description || n?.content, 100)}
                </div>
              </div>
              <div
                style={{
                  minWidth: 120,
                  minHeight: 70,
                  maxWidth: 120,
                  maxHeight: 70,
                  border: `solid 1px #666`,
                  backgroundImage: `url(${n.urlToImage})`,
                  backgroundPosition: `center center`,
                  backgroundRepeat: `no-repeat`,
                  backgroundSize: `120px 70px`,
                }}
              />
            </div>
          )
      )}
    </div>
  );
};

export default Headlines;
