import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Home/Category.css";
import Category from "../../Component/Category";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const PeatCetegory = () => {
  const axiosPublic = useAxiosPublic()
    const [categoryData, setCategoryData] = useState([])
    useEffect(()=>{
      axiosPublic.get('homeData')
      .then(res=>{
        setCategoryData(res.data);
      })
    },[])
    // console.log(categoryData);
    const cats = categoryData.filter(peat => peat.type === "Cat")
    const dog = categoryData.filter(peat => peat.type === "Dog")
    const rabbite = categoryData.filter(peat => peat.type === "Rabbit")
    console.log(cats,dog, rabbite);
  return (
    <div className="px-4">
      <SectionTitle heading={'ABILITY TO SAVE ANIMALS'} subHeading={'--FUNDRAISING CAMPAINGS--'}>

      </SectionTitle>
      <div className="flex justify-center items-center mx-auto px-4 my-10">
        <Tabs>
          <TabList className={"  border-b md:pl-24 ml-10 flex justify-start  items-center mb-5"}>
            <Tab><span className=" font-semibold text-sm ">  Cats</span></Tab>
            <Tab><span className=" font-semibold text-sm ">  Dogs</span></Tab>
            <Tab><span className=" font-semibold text-sm ">  Rabbite</span></Tab>
          </TabList>

          <TabPanel>
            <Category item={cats}></Category>
          </TabPanel>
          <TabPanel>
           <Category item={dog}></Category>
          </TabPanel>
          <TabPanel>
          <Category item={rabbite}></Category>
          </TabPanel>
          
        </Tabs>
      </div>
    </div>
  );
};

export default PeatCetegory;
