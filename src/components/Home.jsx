import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const { username } = useParams();
  return (
    <div className="container">
      <h1>
        {username
          ? `Hi ${username}, Welcome to our page`
          : "Hi, Welcome to our page"}
      </h1>
    </div>
  );
};

export default Home;
