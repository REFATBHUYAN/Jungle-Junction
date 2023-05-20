import React from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Gallary = () => {
  return (
    <section  className="py-10 bg-green-200 max-w-full mx-auto ">
      <div className="max-w-7xl mx-auto overflow-hidden">
        <div>
          <h1 className="text-5xl mb-10 font-bold text-center">Gallary</h1>
        </div>
        <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
        <Marquee>
          <img
            className="h-60 md:h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/v3Ms1d5/image-2.png"
            alt=""
          />
          <img
            className="h-60 md:h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/WFhBJr7/image-5.png"
            alt=""
          />
          <img
            className="h-60 md:h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/vsPFttd/unnamed-2.png"
            alt=""
          />
          <img
            className="h-60 md:h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/vPPD6f2/unnamed-5.png"
            alt=""
          />
          <img
            className="h-60 md:h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/zXmgY3n/image-3.png"
            alt=""
          />
          <img
            className="h-60 md:h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/JBj8PVW/image-6.png"
            alt=""
          />
          <img
            className="h-60 md:h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/sKwfHwj/unnamed-3.png"
            alt=""
          />
          <img
            className="h-60 md:h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/qN2wjvV/unnamed-6.png"
            alt=""
          />
        </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Gallary;
