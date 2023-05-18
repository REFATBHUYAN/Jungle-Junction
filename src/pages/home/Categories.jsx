import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Categories = () => {
  return (
    <div>
      <div>
        <h1 className="mb-5 text-5xl font-bold text-center">Categories</h1>
      </div>
      <div>
        <Tabs className="text-center flex flex-col justify-center">
          <TabList className="tabs tabs-boxed mx-auto" >
            <Tab className="tab rounded-md">Teddy Bear</Tab>
            <Tab className="tab rounded-md">Dinosaur</Tab>
            <Tab className="tab rounded-md">Cat</Tab>
            <Tab className="tab rounded-md">Dogs</Tab>
          </TabList>

          <div className="">
          <TabPanel>
            <div>
              <h1>Teddy Bear</h1>
              <h1>Teddy Bear</h1>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <h1>Dinosaur</h1>
              <h1>Dinosaur</h1>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <h1>Cat</h1>
              <h1>Cat</h1>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <h1>Dogs</h1>
              <h1>Dogs</h1>
            </div>
          </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
