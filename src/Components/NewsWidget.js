import React, { useState } from 'react';
import axios from 'axios';

function NewsWidget() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=031c5806997d47af8f1123fb8c17339c`
      );
      setNews(response.data.articles);
    } catch (error) {
      setError('Error fetching news data');
      console.error('Error fetching news data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="widget news-widget">
      <h3>Latest News</h3>
      <button onClick={fetchNews} disabled={loading}>
        {loading ? 'Loading...' : 'Fetch News'}
      </button>
      {error && <p>{error}</p>}
      <ul>
        {news.slice(0, 3).map((article, index) => (
          <li key={index}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default NewsWidget;
