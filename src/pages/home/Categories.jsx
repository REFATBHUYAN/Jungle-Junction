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
            <Tab className="tab rounded-md">Forest Animals</Tab>
            <Tab className="tab rounded-md">Pet Animals</Tab>
            <Tab className="tab rounded-md">Farm Animals</Tab>
            <Tab className="tab rounded-md">Wild Animals</Tab>
          </TabList>

          <div className="">
          <TabPanel>
            <Tabs>
              <TabList className="tabs tabs-boxed mx-auto" >
                <Tab className="tab rounded-md">Bears</Tab>
                <Tab className="tab rounded-md">Deer</Tab>
                <Tab className="tab rounded-md">Foxes</Tab>
              </TabList>

              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList className="tabs tabs-boxed mx-auto" >
                <Tab className="tab rounded-md">Dogs</Tab>
                <Tab className="tab rounded-md">Cats</Tab>
                <Tab className="tab rounded-md">Rabbits</Tab>
              </TabList>

              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList className="tabs tabs-boxed mx-auto">
                <Tab className="tab rounded-md">Cows</Tab>
                <Tab className="tab rounded-md">Chickens</Tab>
                <Tab className="tab rounded-md">Horses</Tab>
              </TabList>

              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
            </Tabs>
          </TabPanel>
          <TabPanel>
            <Tabs>
              <TabList className="tabs tabs-boxed mx-auto">
                <Tab className="tab rounded-md">Lions</Tab>
                <Tab className="tab rounded-md">Elephants</Tab>
                <Tab className="tab rounded-md">Tigers</Tab>
              </TabList>

              <TabPanel>
                <h2>Any content 1</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 2</h2>
              </TabPanel>
              <TabPanel>
                <h2>Any content 3</h2>
              </TabPanel>
            </Tabs>
          </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
