"use client";
import React, { use, useEffect, useState } from "react";
import Profile from "@components/Profile";

const Home = ({ params }) => {
  const { id } = use(params);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/users/${id}/posts`);
        if (res.ok) {
          const data = await res.json();
          console.log(data);
          setPosts(data);
        }
      } catch (error) {
        console.error("An error occurred while fetching posts:", error);
      }
    };

    fetchPosts();
  }, [id]);

  return (
    <div>
      {posts.length > 0 ? (
        <Profile
          name={`${posts[0].creator.username}'s`}
          desc={`Welcome to ${posts[0].creator.username}'s profile`}
          data={posts}
        />
      ) : (
        <img src="/assets/icons/loader.svg" alt="loader" />
      )}
    </div>
  );
};

export default Home;
