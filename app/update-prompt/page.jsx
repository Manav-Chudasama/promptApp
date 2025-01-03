"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "../../components/Form";

// Component responsible for rendering the form after data is fetched
const UpdatePromptForm = ({ promptId }) => {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const fetchPrompt = async () => {
      const res = await fetch(`/api/prompt/${promptId}`);
      const data = await res.json();
      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) fetchPrompt();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    if (!promptId) return alert("Prompt ID not found");

    try {
      const res = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (res.ok) {
        router.push("/");
      }

      setPost({ prompt: "", tag: "" });
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Form
      type="Update"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={updatePrompt}
    />
  );
};

const Home = () => {
  const searchParams = useSearchParams();
  const promptId = searchParams.get("id");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {promptId ? (
        <UpdatePromptForm promptId={promptId} />
      ) : (
        <div>No prompt ID found</div>
      )}
    </Suspense>
  );
};

export default Home;
