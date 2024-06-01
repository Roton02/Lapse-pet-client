import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../Home/Category.css";
import TitlePerSection from "../../Shared/TitlePerSection/TitlePerSection";
import usePeatCategory from "../../Hooks/usePeatCategory";
import Category from "../../Component/Category";

const PeatCetegory = () => {
    const [categoryData] = usePeatCategory()
    // console.log(categoryData);
    const cats = categoryData.filter(peat => peat.type === "Cat")
    const dog = categoryData.filter(peat => peat.type === "Dog")
    const rabbite = categoryData.filter(peat => peat.type === "Rabbit")
    console.log(cats,dog, rabbite);
  return (
    <div>
      <TitlePerSection title={"Here are all peats"}></TitlePerSection>
      <div className="flex justify-center items-center mx-auto my-10">
        <Tabs>
          <TabList className={" shoop flex justify-center items-center mb-5"}>
            <Tab>Cats</Tab>
            <Tab>dogs</Tab>
            <Tab>Rabbite</Tab>
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
