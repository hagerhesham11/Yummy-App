import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading.jsx'
import Card from '../Card/Card.jsx'

export default function CategoryMeals() {
  let {category} = useParams()
  const [meals,setMeals] = useState([])
  async function getCategoryMeals(){
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
    //console.log(data?.meals)
    setMeals(data?.meals)
  }
  useEffect(()=>{
     getCategoryMeals()
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
  )
}
