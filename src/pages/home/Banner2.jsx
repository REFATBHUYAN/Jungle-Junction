import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner2 = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-stone-300">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            data-aos="fade-right"
            data-aos-duration="3000"
            src="https://img.freepik.com/free-photo/close-up-child-playing-her-room_23-2149208189.jpg"
            className=" rounded-lg shadow-2xl w-1/2"
          />
          <div data-aos="fade-left" data-aos-duration="3000" className="w-1/2">
            <h1 className="text-5xl font-bold">
              We Don't just sell Animals Toys
            </h1>
            <p className="py-6 font-semibold text-xl">
              At our store, we go beyond merely selling animal toys. We curate
              imaginative companions that inspire adventure, encourage empathy,
              and foster creativity. Each toy is thoughtfully selected to spark
              curiosity and learning, ensuring our customers discover much more
              than just a toy – a gateway to endless playtime possibilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;