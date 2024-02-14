import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading'
import Card from '../Card/Card'

export default function IngredientMeals() {
  let {ingredient} = useParams()
  const [meals,setMeals] = useState([])
  async function getIngredientMeals(){
     let {data}= await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
     //console.log(data?.meals)
     setMeals(data?.meals)
  }
 useEffect(()=>{
  getIngredientMeals()

 },[])

  return (
    <>
    {!meals.length ? ( <Loading/>) : (
      <div className="row py-5 g-3">
        {meals?.map((meal,index)=>(
          <Card meal={meal} key={index}/>
        ))}
      </div>
    )}
    </>
  )
}
