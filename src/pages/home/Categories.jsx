import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SingleCard from "./SingleCard";

const Categories = () => {

  const [category, setCategory] = useState('Bear');
  const [data, setData] = useState([]);
  // http://localhost:5000/filter/Bear
  useEffect(()=>{
    fetch(`http://localhost:5000/filter/${category}`,{
      method: 'GET',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify()
    })
    .then(res => res.json())
    .then(data =>{
      setData(data);
    })
  },[category])

  return (
    <div>
      <div>
        <h1 className="mb-5 text-5xl font-bold text-center">Categories</h1>
      </div>
      <div>
        <Tabs className="text-center flex flex-col justify-center">
          <TabList className="tabs tabs-boxed mx-auto" >
            <Tab onClick={()=>setCategory('Bear')} className="tab rounded-md">Teddy Bear</Tab>
            <Tab onClick={()=>setCategory('Dinosaur')} className="tab rounded-md">Dinosaur</Tab>
            <Tab onClick={()=>setCategory('Cat')} className="tab rounded-md">Cat</Tab>
            <Tab onClick={()=>setCategory('Dogs')} className="tab rounded-md">Dogs</Tab>
          </TabList>

          <div className="">
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-3 my-10">
              {
               category == 'Bear' && data.map(d => <SingleCard key={d._id} data={d}></SingleCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 my-10">
              {
               category == 'Dinosaur' && data.map(d => <SingleCard key={d._id} data={d}></SingleCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 my-10">
              {
               category == 'Cat' && data.map(d => <SingleCard key={d._id} data={d}></SingleCard>)
              }
            </div>
          </TabPanel>
          <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 my-10">
              {
               category == 'Dogs' && data.map(d => <SingleCard key={d._id} data={d}></SingleCard>)
              }
            </div>
          </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
