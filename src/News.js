import React, { useState, useEffect } from "react";
import "./News.css";
import axios from "axios";

const News = ({ title, category }) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://newsapi.org/v2/everything?q=${category}&pageSize=4&apiKey=`;
  const uri = apiUrl + apiKey;

  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(uri);
      setNews(response.data.articles);
      return response;
    }
    fetchData();
  }, [uri]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <>
      <h2 className="news__category__title">{title}</h2>
      <div className="news">
        {news.map(
          (n, i) =>
            (n?.description !== "" || n?.content !== "") && (
              <div
                className="news__item"
                key={i}
                style={{
                  backgroundImage: `url(${n.urlToImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                }}
              >
                <div className="news__item__wrapper">
                  <h3 className="news__item__title">{n.title}</h3>
                  <div className="news__item__description">
                    {truncate(n?.description || n?.content, 150)}
                  </div>
                  <div className="news__item__date">
                    {n.publishedAt.split("T")[0]}
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
};

export default News;
