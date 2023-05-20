import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner = () => {
  return (
    <section className=" bg-green-200 max-w-full mx-auto">
      <div
        className="hero min-h-screen text-white"
        style={{
          backgroundImage: `url("https://m.media-amazon.com/images/I/81x2oBqx4gL._AC_SL1500_.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div
          data-aos="zoom-in-up"
          className="hero-content text-center text-neutral-content"
        >
          <div className="max-w-md md:max-w-4xl">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold">
              <span className="text-green-300">JungleJunction</span>: A Paradise
              of Playthings
            </h1>
            <p className="mb-5 font-semibold text-base md:text-xl text-white">
            Step into Jungle Jamboree, where the vibrant spirit of the jungle comes alive! Explore our wondrous collection of toys, igniting endless adventures and imaginative play in a paradise of boundless fun.
            </p>
            <Link to={"/alltoys"}>
              <button className="btn-banner">All Toys Here</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
