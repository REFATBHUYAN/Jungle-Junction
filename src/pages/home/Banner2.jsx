import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Banner2 = () => {
  return (
    <section>
      <div>
        <h1 className="text-5xl my-7 font-bold text-center">About Us</h1>
        <div className="hero bg-green-200">
          <div className="hero-content flex-col lg:flex-row gap-10 p-7">
            <img
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              src="https://img.freepik.com/free-photo/close-up-child-playing-her-room_23-2149208189.jpg"
              className=" rounded-lg shadow-2xl w-full md:w-1/2"
            />
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="1000"
              className="w-full md:w-1/2"
            >
              <h1 className="text-5xl font-bold">
                We Don't just sell Animals Toys
              </h1>
              <p className="py-6 font-semibold text-xl">
                At our store, we go beyond merely selling animal toys. We curate
                imaginative companions that inspire adventure, encourage
                empathy, and foster creativity. Each toy is thoughtfully
                selected to spark curiosity and learning, ensuring our customers
                discover much more than just a toy – a gateway to endless
                playtime possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
