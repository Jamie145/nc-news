import { Routes, Route } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Topics from "../Components/Topics";
import Articles from "../Components/Articles";
import ArticlePage from "../Components/ArticlePage";
import Home from "../Components/Home";

function App() {
  // This version of App.jsx has NO article state and NO article-related API call.
  // It only handles the main routing and renders the header and footer.
  
  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topics" element={<Topics />} />
          <Route path="/articles" element={<Articles />} /> 
          <Route path="/articles/:article_id" element={<ArticlePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;