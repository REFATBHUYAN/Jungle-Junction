import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleCard from "./SingleCard";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Categories = () => {
  const [category, setCategory] = useState("Bear");
  const [data, setData] = useState([]);
  // https://assignment-11-batch-7-server.vercel.app/filter/Bear
  useEffect(() => {
    fetch(`https://assignment-11-batch-7-server.vercel.app/filter/${category}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [category]);

  return (
    <section className="max-w-full bg-green-300 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div>
          <h1 className="mb-10 text-5xl font-bold text-center">Categories</h1>
        </div>
        <div>
          <Tabs className="text-center  flex flex-col justify-center">
            <TabList className="tabs md:flex md:justify-around tabs-boxed mx-auto  w-1/2 font-bold text-center p-7">
              <Tab
                onClick={() => setCategory("Bear")}
                className="tab rounded-md text-xl sm:mx-auto"
              >
                Teddy Bear
              </Tab>
              <Tab
                onClick={() => setCategory("Dinosaur")}
                className="tab rounded-md text-xl sm:mx-auto"
              >
                Dinosaur
              </Tab>
              <Tab
                onClick={() => setCategory("Cat")}
                className="tab rounded-md text-xl sm:mx-auto"
              >
                Cat
              </Tab>
              <Tab
                onClick={() => setCategory("Dogs")}
                className="tab rounded-md text-xl sm:mx-auto"
              >
                Dogs
              </Tab>
            </TabList>

            <div className="">
              <TabPanel>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="grid grid-cols-1 md:grid-cols-3 my-10 gap-4 p-7"
                >
                  {category == "Bear" &&
                    data.map((d) => (
                      <SingleCard key={d._id} data={d}></SingleCard>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="grid grid-cols-1 md:grid-cols-3 my-10 gap-4 p-7"
                >
                  {category == "Dinosaur" &&
                    data.map((d) => (
                      <SingleCard key={d._id} data={d}></SingleCard>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="grid grid-cols-1 md:grid-cols-3 my-10 gap-4 p-7"
                >
                  {category == "Cat" &&
                    data.map((d) => (
                      <SingleCard key={d._id} data={d}></SingleCard>
                    ))}
                </div>
              </TabPanel>
              <TabPanel>
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  className="grid grid-cols-1 md:grid-cols-3 my-10 gap-4 p-7"
                >
                  {category == "Dogs" &&
                    data.map((d) => (
                      <SingleCard key={d._id} data={d}></SingleCard>
                    ))}
                </div>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Categories;
