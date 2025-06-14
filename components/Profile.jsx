import React from "react";
import PromptCard from "./PromptCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-16 prompt_layout">
        {data.length > 0 ? (
          data.map((prompt) => (
            <PromptCard
              key={prompt._id}
              post={prompt}
              handleEdit={() => handleEdit(prompt)}
              handleDelete={() => handleDelete(prompt)}
            />
          ))
        ) : (
          <img src="/assets/icons/loader.svg" alt="loader" />
        )}
      </div>
    </section>
  );
};

export default Profile;
