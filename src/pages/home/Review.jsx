import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Review = () => {
  return (
    <section className="max-w-full mx-auto bg-stone-300">
      <div className="py-10 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center">Reviews</h1>
        <h1 className="text-3xl font-bold text-center my-10">
          Avarage Coustomer Rating: 4.5/5
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-7 gap-4 mx-auto">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="w-72 mx-auto md:w-96 border border-stone-500 rounded-md p-5 space-y-3 bg-stone-400 "
          >
            <div className="flex gap-1">
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
              <FaStarHalf className="text-yellow-400"></FaStarHalf>
            </div>
            <h1 className="text-xl font-bold ">Fast and Efficient Service</h1>
            <p className="text-base font-semibold ">
              I was amazed by the fast and efficient service at this store! The
              staff was incredibly attentive, and my order was processed and
              delivered promptly. A truly reliable and hassle-free shopping
              experience <br /> -- All-Amin Khan
            </p>
          </div>
          <div
            data-aos="fade-down"
            data-aos-duration="3000"
            className="w-72 mx-auto md:w-96 border border-stone-500 rounded-md p-5 space-y-3 bg-stone-400 "
          >
            <div className="flex gap-1">
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
            </div>
            <h1 className="text-xl font-bold ">A lovely Toy Store</h1>
            <p className="text-base font-semibold ">
              From the moment I stepped inside, I was enchanted by the whimsical
              atmosphere and the wide array of toys. The staff were friendly and
              helpful, and the quality of the toys was outstanding. It's a place
              where joy and imagination come alive <br /> -- Sajid Rahman
            </p>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="w-72 mx-auto md:w-96 border border-stone-500 rounded-md p-5 space-y-3 bg-stone-400 "
          >
            <div className="flex gap-1">
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
              <FaStar className="text-yellow-400"></FaStar>
              <FaStarHalf className="text-yellow-400"></FaStarHalf>
            </div>
            <h1 className="text-xl font-bold ">Fantastic</h1>
            <p className="text-base font-semibold ">
              At this store, animal toys are more than just products. They carry
              a fantastic message of imagination, adventure, and creativity,
              inviting endless playtime possibilities for children of all ages{" "}
              <br /> -- Rahim Ahmed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
