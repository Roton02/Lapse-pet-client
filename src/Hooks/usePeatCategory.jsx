import { useEffect, useState } from "react";

const usePeatCategory = () => {
    const [categoryData, setCategoryData] = useState([])
    useEffect(()=>{
       fetch('https://lapsepets.vercel.app/allCategory')
       .then(res=> res.json())
       .then(data => setCategoryData(data))
    },[])
    // console.log(categoryData);
    return [categoryData]
};

export default usePeatCategory;