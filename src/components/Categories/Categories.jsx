import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Categories.module.css'

export default function Categories() {
  const[categories,setCategories]=useState([])
  async function getAllCategories(){
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    console.log(data?.categories)
       setCategories(data?.categories)
  }
  useEffect(()=>{
    getAllCategories()
  },[])
  return (
    <div >
      {categories.length > 0 ? <>
       <div className="row g-3 py-5">
        {categories?.map((category,index)=> <>
          <div className="col-md-6 col-lg-3" key={index}>
            <Link to={`/category/${category.strCategory}`}>
            <div className={`${style.inner} rounded-3 overflow-hidden position-relative`}>
             <img src={category.strCategoryThumb} alt="Category name" className='w-100'/>  
             <div className="layer text-dark w-100 h-100 position-absolute start-0 d-flex flex-column text-center p-3">
             <h2>{category.strCategory}</h2>
             <p>{category.strCategoryDescription.split(" ").slice(0,20).join(" ")}</p>
             </div>
      
              </div> 
            </Link>
          </div>
          </>
        )}
       </div>
      </> :null}
    </div>
  )
}
