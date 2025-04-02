import Header from "./Header";
import Footer from "./Footer";
function Articles({articles}){
    console.log("Articles received:", articles);
    return (
        
    <>
    <Header/>
    
    <main>
        <h2>Articles</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.article_id}>
              <h3>{article.title}</h3>
              <p>Author: {article.author}</p>
              <p>{article.body}</p>
            </li>
          ))}
        </ul>
      </main>
    <Footer/>
    </>
    );}

export default Articles