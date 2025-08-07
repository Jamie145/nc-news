// src/Components/Articles.jsx

import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom"; 

function Articles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // Get all three query parameters from the URL
  const topic = searchParams.get('topic');
  const sortBy = searchParams.get('sort_by') || 'created_at';
  const order = searchParams.get('order') || 'desc';

  useEffect(() => {
    setLoading(true); 
    setError(null); 

    // Build the API URL with all three parameters
    let apiUrl = "https://nc-action-news.onrender.com/api/articles";
    let queryParams = new URLSearchParams();

    if (topic) {
      queryParams.append('topic', topic);
    }
    if (sortBy) {
      queryParams.append('sort_by', sortBy);
    }
    if (order) {
      queryParams.append('order', order);
    }
    
    // Add the query string to the API URL if there are parameters
    if (queryParams.toString()) {
      apiUrl += `?${queryParams.toString()}`;
    }

    axios.get(apiUrl)
      .then(response => {
        setArticles(response.data.articles);
        setLoading(false);
        console.log("Articles fetched:", response.data.articles);
      })
      .catch(err => {
        setError("Failed to fetch articles. Please try again later.");
        setLoading(false);
        console.error("Error fetching articles:", err);
      });
  }, [topic, sortBy, order]); // useEffect now watches all three parameters

  const handleSortByChange = (e) => {
    const newSortBy = e.target.value;
    setSearchParams(prevParams => {
      prevParams.set('sort_by', newSortBy);
      return prevParams;
    });
  };

  const handleOrderChange = (e) => {
    const newOrder = e.target.value;
    setSearchParams(prevParams => {
      prevParams.set('order', newOrder);
      return prevParams;
    });
  };

  if (loading) {
    return (
      <main className="articles-main">
        <p className="loading-message">Loading articles...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className="articles-main">
        <p className="error-message">{error}</p>
      </main>
    );
  }

  return (
    <main className="articles-main">
      <h2 className="articles-title">
        {topic ? `Articles on ${topic.charAt(0).toUpperCase() + topic.slice(1)}` : "All Articles"}
      </h2>
      
      {/* The filter dropdowns are back! */}
      <div className="filter-container">
        <label htmlFor="sortBy">Sort by:</label>
        <select id="sortBy" onChange={handleSortByChange} value={sortBy}>
          <option value="created_at">Date</option>
          <option value="comment_count">Comment Count</option>
          <option value="votes">Votes</option>
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>
        
        <label htmlFor="order">Order:</label>
        <select id="order" onChange={handleOrderChange} value={order}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </div>

      <ul className="articles-list">
        {articles.map((article) => (
          <li key={article.article_id} className="article-item">
            <button onClick={() => navigate(`/articles/${article.article_id}`)} className="article-button">
              <h3 className="article-title">{article.title}</h3>
              <p className="article-author">Author: {article.author}</p>
              <p className="article-topic">Topic: {article.topic}</p> 
              <p className="article-votes">Votes: {article.votes}</p> 
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Articles;
