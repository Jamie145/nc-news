import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
function ArticlePage() {
    const { article_id } = useParams()
    const [article, setArticle] = useState(null)

    console.log("Article ID:", article_id);

    useEffect(() => {
        axios.get(`https://nc-action-news.onrender.com/api/articles/${article_id}`)
            .then(response => {
                setArticle(response.data.article);
            })
            .catch(error => {
                console.error("Error fetching article:", error);
            });
    }, []);

    if (!article) {
        return (
            <>
                <Header />
                <div>Loading...</div>  
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <h1>{article.title}</h1>
            <Footer />
        </>
    )
}
export default ArticlePage