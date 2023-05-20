import React from "react";
import Banner from "./Banner";
import Gallary from './Gallary';
import Categories from "./Categories";
import Banner2 from "./Banner2";
import Review from "./Review";

const Home = () => {
  return (
    <body className="bg-green-300">
      <Banner></Banner>
      <Gallary></Gallary>
      <Categories></Categories>
      <Banner2></Banner2>
      <Review></Review>
    </body>
  );
};

export default Home;
