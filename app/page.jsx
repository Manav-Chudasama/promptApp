import Feed from "@components/Feed";

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover & Share
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            {" "}
            AI-Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          PromptApp Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Magni eum perferendis voluptatum ea numquam ab nobis est, quis
          possimus iure.
        </p>
        <Feed />
      </section>
    </div>
  );
};

export default Home;
