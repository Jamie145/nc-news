import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";
import Header from "../Components/Header"; 
import Footer from "../Components/Footer"; 
import Topics from "../Components/Topics"; 
import Articles from "../Components/Articles"; 
import Card from "../Components/Card"

function App() {
  
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    axios.get("https://nc-action-news.onrender.com/api/articles")
      .then(response => {
        setArticles(response.data.articles);
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
      </Routes>
      <Card  article="Article Name"/> <br />
      <Card article="Article Name"/>
      <Footer />
    </div>
  );
}

export default App;