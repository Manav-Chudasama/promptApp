"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "../../components/Profile";

const Home = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session.user.id}/posts`);
      if (res.ok) {
        const data = await res.json();
        setPosts(data);
      }
    };

    fetchPosts();
  }, [session]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this post?");
    if (!hasConfirmed) return;
    try {
      const res = await fetch(`/api/prompt/${post._id.toString()}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p._id !== post._id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Profile
        name="My"
        desc="Welcome to my profile"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
