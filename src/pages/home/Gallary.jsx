import React from "react";
import Marquee from "react-fast-marquee";

const Gallary = () => {
  return (
    <section className="my-16">
        <div>
            <h1 className="text-4xl my-4 font-bold text-center">Gallary</h1>
        </div>
      <Marquee>
        <img className="h-96 w-96 m-4" src="https://i.ibb.co/ggZ7Z0m/image-8.png" alt="" />
        <img className="h-96 w-96 m-4" src="https://i.ibb.co/qYMKzQz/image-10.png" alt="" />
        <img className="h-96 w-96 m-4" src="https://i.ibb.co/sgqzVp0/image-13.png" alt="" />
        <img className="h-96 w-96 m-4" src="https://i.ibb.co/JvhBB6F/image-16.png" alt="" />
      </Marquee>
    </section>
  );
};

export default Gallary;
