import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card.jsx';
import Loading from '../Loading/Loading.jsx';

export default function Home() {
  const [meals, setMeals] = useState([])
  async function getData(){
    let {data} = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    //console.log(data)
    setMeals(data?.meals)
    
  }
  useEffect(()=>{
    getData()
  },[])
  return (
   <>
    {meals.length > 0 ? (
         <div className="py-5">
            <div className="row g-3">
        {meals?.map((mealInfo , index)=>(
        <Card meal={mealInfo} key={index}/>
       )
        
       )}
        </div>
         </div>
    )  : (
      <Loading/>
    )

    }
   </>
 
 )}

