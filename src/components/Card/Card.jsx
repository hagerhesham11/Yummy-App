import React from 'react'

import style from './Card.module.css';
import { Link } from 'react-router-dom';

export default function Card({meal}) {
  console.log(meal)
  return (
<>
  <div className="col-md-3">
   <Link to={`/meal/${meal.idMeal}`}>
   
   <div className={`${style.inner} rounded-3 overflow-hidden position-relative`}>
      <img src={meal.strMealThumb} alt="Meal Title" className='w-100'/>  
      <div className="layer text-dark w-100 h-100 position-absolute start-0 d-flex align-items-center p-3">
        <h2>{meal.strMeal}</h2>
      </div>
      
    </div>  
   </Link>
  </div>   

</> 
 )
}
