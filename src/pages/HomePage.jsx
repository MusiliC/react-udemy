/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

const HomePage = () => {
  return (
    <div>
      <h1>World wise</h1>
      <Link to={"/app"}>Go to the app</Link>
    </div>
  );
};

export default HomePage;
