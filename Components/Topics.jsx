
import { useState, useEffect } from "react"; // Import useState and useEffect
import axios from "axios"; // Import axios for API calls
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom"; // Import Link for navigation

function Topics() {
  const [topics, setTopics] = useState([]); // State to store topics
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    // Fetch topics when the component mounts
    axios.get("https://nc-action-news.onrender.com/api/topics")
      .then(response => {
        setTopics(response.data.topics); // Set topics state with fetched data
        setLoading(false); // Set loading to false
        console.log("Topics fetched:", response.data.topics);
      })
      .catch(err => {
        setError("Failed to fetch topics. Please try again later."); // Set error message
        setLoading(false); // Set loading to false even on error
        console.error("Error fetching topics:", err);
      });
  }, []); // Empty dependency array means this runs once on mount

  if (loading) {
    return (
      <>
        <Header />
        <main className="topics-main">
          <p className="loading-message">Loading topics...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <main className="topics-main">
          <p className="error-message">{error}</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <> 
      
      <main className="topics-main"> {/* Main content area for topics */}
        <h2 className="topics-title">Topics</h2>
        <ul className="topics-list">
          {topics.map((topic) => (
            <li key={topic.slug} className="topic-item">
              {/* Link to articles filtered by this topic (if you implement this later) */}
              <Link to={`/articles?topic=${topic.slug}`} className="topic-link">
                <h3 className="topic-name">{topic.slug}</h3>
                <p className="topic-description">{topic.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      
    </>
  );
}

export default Topics;