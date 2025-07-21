import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import Header from "../Components/Header"; 
import Footer from "../Components/Footer"; 
import Topics from "../Components/Topics"; 
import Articles from "../Components/Articles"; 
import ArticlePage from "../Components/ArticlePage";
import Card from "../Components/Card";

function App() {
  
  const [articles, setArticles] = useState([]);
  const [mostVotes, setMostVotes] = useState(null);
  
  useEffect(() => {
    axios.get("https://nc-action-news.onrender.com/api/articles")
      .then(response => {
        const articlesData = response.data.articles;
        setArticles(articlesData);
        console.log("Articles fetched in App.jsx:", articlesData);

        const mostVotes = articlesData.reduce((max, article) => {
          return article.votes > max.votes ? article : max;
        }, articlesData[0]);

        setMostVotes(mostVotes);
        console.log("Most voted article:", mostVotes)

      })
      .catch(error => {
        console.error("Error fetching articles:", error);
      });
  }, []);
  
  
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/topics" element={<Topics />} />
        
        <Route path="/articles" element={<Articles articles={articles}/>} />
        <Route path="/articles/:article_id" element={<ArticlePage />} />
      </Routes>
      {/* <Card  article={mostVotes}/> <br />
      <Card article={mostVotes}/> */}
      
      <Footer />
    </div>
  );
}

export default App;