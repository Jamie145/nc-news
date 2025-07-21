import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
function Articles({articles}){
    console.log("Articles received:", articles);
    const navigate = useNavigate();
    return (
        
    <>
    
    
    <main>
        <h2>Articles</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.article_id}>
              <button onClick={ ()=> navigate(`/articles/${article.article_id }`)}>
                
                <h3>{article.title}</h3>
              <p>Author: {article.author}</p>
              </button>
            </li>
          ))}
        </ul>
      </main>
    <Footer/>
    </>
    );}

export default Articles