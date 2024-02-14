import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


export default function MealDetails() {
    let {id} = useParams()
    const [details,setDetails] = useState({})
    async function getMealDetails(){
      let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    //   console.log(data.meals[0])
    //   setDetails(data.meals[0])
         return data.meals[0]
     }

    async function getReadyRecipe(){
      let detailsObject = await getMealDetails()
       detailsObject.ingredients = []
      const detailsMap = new Map(Object.entries(detailsObject))
      for (let i = 0 ; i < detailsMap.size ; i++){
        if(detailsMap.get(`strIngredient${i}`)){
          detailsObject.ingredients.push(`${detailsMap.get(`strMeasure${i}`)} ${detailsMap.get(`strIngredient${i}`)}`)  
        }
      }
      //console.log(detailsMap)
      //console.log(detailsObject)
      setDetails(detailsObject)
    }

   useEffect(()=>{
      getReadyRecipe()
   },[])

  return (
   <>
   
     <div className='py-5'>
     <div className="row py-5 gx-5">
       <div className="col-md-4">
         <img src={details.strMealThumb} alt="meal-img" className='w-100 rounded-3' />
         <h3 className='pt-3'>{details.strMeal}</h3>
         <Link to="/" className='btn btn-warning w-100'>Back to Home</Link>
       </div>
       <div className="col-md-8">
         <div className="instructions">
           <h2>Instructions</h2>
           <p>{details.strInstructions}</p>
            <div className="area d-flex align-items-center pt-3">
             <h2 className='m-0'>Area :</h2>
             <span className='mt-1 mb-0 d-block fw-semibold h4 ps-3'>{details.strArea}</span>
            </div>
            <div className="category d-flex align-items-center pt-3">
             <h2 className='m-0'>Category :</h2>
             <span className='mt-1 mb-0 d-block fw-semibold h4 ps-3'>{details.strCategory}</span>
            </div>
            <div className="recipes pt-3">
             <h2 className='m-0'>Recipe :</h2>
             {details?.ingredients?.map((item,index)=> <span key={index} className='btn btn-warning me-2 mt-2'>{item}</span>)}
            </div>
              {details.strTags ? <>
                <div className="tags pt-3">
             <h2 className='m-0'>Tags :</h2>
             {details?.strTags?.split(",").map((item,index)=> <span key={index} className='btn btn-primary mt-2 me-2'>{item}</span> )}
            </div>
              </> : null

              }
            <div className="pt-4">
             <a href={details.strSource} className='btn btn-success text-white me-2'>Source</a>
             <a  href={details.strYoutube} className='btn btn-danger text-white'>Youtube</a>
            </div>
         </div>
       </div>
     </div>
   </div>
  
  
   </>
  )
}
