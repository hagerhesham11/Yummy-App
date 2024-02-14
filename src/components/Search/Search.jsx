import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

export default function Search() {
  const [meals,setMeals] = useState([])
  async function getMeal(type,term){
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?${type}=${term}`)
    console.log(data.meals)
    term && data.meals ? setMeals(data.meals) : setMeals([]);
  }
  useEffect(()=>{
    getMeal()
  },[])
  return (
   <>
   <div className="row g-3 py-5">
    <div className="col-md-6">
      <input type="text" className='form-control' onChange={(e)=>{
        if(/^[a-zA-Z]+/.test(e.target.value)){
          getMeal("s",e.target.value)
        }
      }} placeholder="Search by Meal Name" />
    </div>
    <div className="col-md-6">
      <input type="text" className='form-control' onChange={(e)=>{
       if(/^[a-zA-Z]/.test(e.target.value)){
        getMeal("f",e.target.value)
       }
      }} placeholder='Search by First Letter' maxLength={1} />
    </div>
   </div>
   <div className="row g-3">
    {meals?.length > 0 ? <>
      {meals?.map((meal,index)=> <Card meal={meal} key={index}/>)}
    </> : <h2>No Meals Found</h2>}
   </div>
   </>
  )
}
