import React from "react";
import Banner from "./Banner";
import Gallary from './Gallary';
import Categories from "./Categories";
import Banner2 from "./Banner2";
import Review from "./Review";
import useTitle from "../../hook/useTitle";

const Home = () => {
  useTitle('Home')
  return (
    <div className="bg-green-200 max-w-full mx-auto overflow-hidden">
      <Banner></Banner>
      <Gallary></Gallary>
      <Categories></Categories>
      <Banner2></Banner2>
      <Review></Review>
    </div>
  );
};

export default Home;
