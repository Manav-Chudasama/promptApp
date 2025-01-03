"use client";
import React, { use, useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.length > 0 ? (
        data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            post={prompt}
            handleTagClick={handleTagClick}
          />
        ))
      ) : (
        <div className="flex justify-center items-center relative h-96">
          <img src="/assets/icons/loader.svg" alt="loader" />
        </div>
      )}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [posts, setPosts] = useState([]);
  const [typingTimeout, setTypingTimeout] = useState(null);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);

    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    setTypingTimeout(
      setTimeout(() => {
        const results = posts.filter(
          (post) =>
            post.creator.username
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            post.creator.email
              .toLowerCase()
              .includes(e.target.value.toLowerCase()) ||
            post.prompt.toLowerCase().includes(e.target.value.toLowerCase()) ||
            post.tag.toLowerCase().includes(e.target.value.toLowerCase())
        );
        setSearchResults(results);
      }, 1000)
    );
  };

  const handleTagClick = (tag) => {
    setSearchText(tag);
    setSearchResults(posts.filter((post) => post.tag === tag));
  };

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPosts(data);
      setSearchResults(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for prompts"
          value={searchText}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>
      <PromptCardList data={searchResults} handleTagClick={handleTagClick} />
    </section>
  );
};

export default Feed;
