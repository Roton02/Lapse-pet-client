import { useEffect, useState } from "react";

const usePeatCategory = () => {
    const [categoryData, setCategoryData] = useState([])
    useEffect(()=>{
       fetch('http://localhost:5000/allCategory')
       .then(res=> res.json())
       .then(data => setCategoryData(data))
    },[])
    // console.log(categoryData);
    return [categoryData]
};

export default usePeatCategory;