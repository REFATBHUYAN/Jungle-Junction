import React from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Banner = () => {
  return (
    <section>
      <div
      data-aos="zoom-in"
        className="hero min-h-screen text-white"
        style={{
          backgroundImage: `url("https://m.media-amazon.com/images/I/81x2oBqx4gL._AC_SL1500_.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">We Will Take Care of Your Kids</h1>
            <p className="mb-5 font-semibold text-xl text-white">
            At Jungle Jamboree, we wholeheartedly embrace the responsibility of caring for your kids. With boundless enthusiasm, we create a safe haven where young adventurers can thrive. From exhilarating jungle-inspired activities to personalized attention, we are dedicated to ensuring your children's happiness, well-being, and unforgettable experiences.
            </p>
            <Link to={'/alltoys'}><button className="btn-banner">All Toys Here</button></Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
