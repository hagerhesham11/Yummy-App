import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Area() {
  const [area,setArea] = useState([])
  async function getArea(){
    let {data} = await axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
      setArea(data?.meals)
  }
  useEffect(()=>{
    getArea()
  },[])
  return (
  <>
  {area.length > 0 ? <>
   <div className="row py-5">
    {area.map((item,index)=>
    <>
     <div key={index} className="col-md-3 text-center">
     <Link to={`/area/${item.strArea}`}>
     <i className="fa-solid fa-city fa-3x text-danger "></i>  
     <h3 className='h2'>{item.strArea}</h3>
     </Link>
     </div>
    </>
    )}
   </div>
  
  </> : null}
  
  </>
  )
}
