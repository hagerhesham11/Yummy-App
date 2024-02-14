import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading.jsx'
import Card from '../Card/Card.jsx'

export default function AreaMeals() {
  let {area} = useParams()
  const [meals,setMeals] = useState([])
  async function getAreaMeals(){
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
    //console.log(data?.meals)
    setMeals(data?.meals)
  }
  useEffect(()=>{
     getAreaMeals()
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
