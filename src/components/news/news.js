import React, { useEffect, useState } from 'react';
import './news.css';

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=LkQucUBpIBY0Lyl4sePGASYgH5yFccBA`
        );
        const data = await response.json();
        setNewsData(data.results.slice(0, 5));
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>Top 5 News Stories From Yesterday</h2>
      <ul className="news-list"> {}
        {newsData.map((newsItem) => (
          <li key={newsItem.url} className="news-item"> {}
            {newsItem.multimedia.length > 0 && (
              <img
                src={newsItem.multimedia[0].url}
                alt={newsItem.multimedia[0].caption}
                className="news-image"
              />
            )}
            <h3 className="news-title">{newsItem.title}</h3> {}
            <p className="news-byline">By: {newsItem.byline}</p> {}
            <p className="news-abstract">{newsItem.abstract}</p> {}
            <a href={newsItem.url} className="news-link">Read more</a> {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;