import React from 'react';
import Card from './Card'; // We'll need to import the Card component here

function Home({ mostVotes }) {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Welcome to NC Action News!
      </h1>
      <p className="home-description">
        Your go-to source for the latest articles and discussions.
        Explore topics, read articles, and join the conversation.
      </p>
      
      {/* Conditionally render the featured article if 'mostVotes' exists */}
      {mostVotes && (
        <div className="featured-article-container">
          <h2 className="featured-title">Featured Article (Most Voted)</h2>
          <Card article={mostVotes} />
        </div>
      )}
      
      <p className="home-instruction">
        Use the navigation above to get started!
      </p>
    </div>
  );
}

export default Home;