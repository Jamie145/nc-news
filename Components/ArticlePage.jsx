import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';


function ArticlePage() {
    const { article_id } = useParams();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true); // Added loading state
    const [error, setError] = useState(null); // Added error state
    const [votes, setVotes] = useState(0)
    const [voteError, setVoteError] = useState(null)

    const handleVote = (increment) =>{
        setVotes(v => v + increment)
        console.log("Vote changed")
        axios.patch(`https://nc-action-news.onrender.com/api/articles/${article_id}`, {
            inc_votes: increment
        })
        .then(( )=>{ /* Success! */ })
        .catch((err) => {
            setVotes((currenVote) => currenVote - increment)
            setVoteError('Error')
            console.error("Error updating votes:", err);
        });
    }

    useEffect(() => {
        setLoading(true);
        axios.get(`https://nc-action-news.onrender.com/api/articles/${article_id}`)
            .then(response => {
                setArticle(response.data.article);
                setVotes(response.data.article.votes)
                setLoading(false);
            })
            .catch(error => {
                setError("Failed to fetch article. Please check the URL.");
                setLoading(false);
                console.error("Error fetching article:", error);
            });
    }, [article_id]);

    if (loading) {
        return <div className="article-page-main">Loading article...</div>;
    }

    if (error) {
        return <div className="article-page-main error-message">{error}</div>;
    }

    if (!article) {
        return <div className="article-page-main not-found">Article not found.</div>;
    }

    return (
        <main className="article-page-main">
            <h1 className="article-page-title">{article.title}</h1>
            <p className="article-page-author">By {article.author} on {new Date(article.created_at).toLocaleDateString()}</p>
            <p className="article-page-topic">Topic: {article.topic}</p>
            <p className="article-page-votes">Votes: {votes}</p>
            {voteError && <p className="text-sm text-red-500 font-medium">{voteError}</p>}
            <article className="article-page-body">
                {article.body}
                <div className="flex space-x-4 mt-6 justify-center">
    <button
        onClick={() => handleVote(1)}
        className="flex items-center px-4 py-2 bg-green-500 text-white font-bold rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
    >
        <span className="mr-2">👍</span> Upvote
    </button>
    <button
        onClick={() => handleVote(-1)}
        className="flex items-center px-4 py-2 bg-red-500 text-white font-bold rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
    >
        <span className="mr-2">👎</span> Downvote
    </button>
</div>
            </article>
        </main>
    );
}
export default ArticlePage;