import React, { useState } from "react";
import "./home.css";
import Header from "../../components/Header/Header";
import ExploreMore from "../../components/ExploreMore/ExploreMore";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import AppDownload from "../../components/AppDownload/AppDownload";
const Home = () => {
  const [category, setcategory] = useState("All");
  return (
    <div>
      <Header></Header>
      <ExploreMore category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
