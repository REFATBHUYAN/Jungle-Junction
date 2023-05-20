import React from "react";
import Marquee from "react-fast-marquee";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Gallary = () => {
  return (
    <section data-aos="fade-up" className="py-16 bg-green-300 max-w-full mx-auto">
      <div className="">
        <div>
          <h1 className="text-5xl my-10 font-bold text-center">Gallary</h1>
        </div>
        <Marquee>
          <img
            className="h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/v3Ms1d5/image-2.png"
            alt=""
          />
          <img
            className="h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/WFhBJr7/image-5.png"
            alt=""
          />
          <img
            className="h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/vsPFttd/unnamed-2.png"
            alt=""
          />
          <img
            className="h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/vPPD6f2/unnamed-5.png"
            alt=""
          />
          <img
            className="h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/zXmgY3n/image-3.png"
            alt=""
          />
          <img
            className="h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/JBj8PVW/image-6.png"
            alt=""
          />
          <img
            className="h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/sKwfHwj/unnamed-3.png"
            alt=""
          />
          <img
            className="h-96 w-60 md:w-96 m-2 rounded-md"
            src="https://i.ibb.co/qN2wjvV/unnamed-6.png"
            alt=""
          />
        </Marquee>
      </div>
    </section>
  );
};

export default Gallary;
