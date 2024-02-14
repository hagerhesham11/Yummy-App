import React, { useRef } from 'react'
import style from './SideBar.module.css'
import logo from '../../assets/Images/logo.png'
import { NavLink } from 'react-router-dom'
export default function SideBar() {
  let sideBar = useRef(null)
  let blackSide = useRef(null)
  let whiteSideIcon = useRef(null)
  function changeStatus(){
    //console.log(sideBar)
    let left = window.getComputedStyle(sideBar.current).getPropertyValue("left") //de 3shan ageb el value bta3et el left fel style bta3 el nav
    if(left == "0px"){ //-256px
      closeSideBar()
    }else{
      openSideBar()
    }
  }
  function closeSideBar(){
    let width = blackSide.current.offsetWidth;
    sideBar.current.style.left = `-${width}px`;
    whiteSideIcon.current.classList.replace("fa-xmark","fa-bars")
  }
  function openSideBar(){
    sideBar.current.style.left = "0px";
    whiteSideIcon.current.classList.replace("fa-bars","fa-xmark")

  }

  return (
   <nav ref={sideBar} className={`${style["main-nav"]} position-fixed`}>
    <div ref={blackSide} className="d-flex flex-column justify-content-between p-3">
      <ul className='list-unstyled'>
       <li className='p-0 mb-1'>
        <NavLink to={'/search '} onClick={closeSideBar} className='w-100 d-inline-block p-2'>Search</NavLink>
       </li>
       <li className='p-0 mb-1'>
        <NavLink to={'/categories'} onClick={closeSideBar} className='w-100 d-inline-block p-2'>Categories</NavLink>
       </li>
       <li className='p-0 mb-1'>
        <NavLink to={'/area'} onClick={closeSideBar} className='w-100 d-inline-block p-2'>Area</NavLink>
       </li>
       <li className='p-0 mb-1'>
        <NavLink to={'/ingredients'} onClick={closeSideBar} className='w-100 d-inline-block p-2'>Ingredients</NavLink>
       </li>
       <li className='p-0 mb-1'>
        <NavLink to={'/contact'} onClick={closeSideBar} className='w-100 d-inline-block p-2'>Contact Us</NavLink>
       </li>
      </ul>
      <div className="nav-end">
        <a href="wwww.facebook.com"><i className='fa-brands fa-facebook-f p-2'></i></a>
        <a href="wwww.twitter.com" ><i className='fa-brands fa-twitter p-2'></i></a>
        <a href=""><i className='fa-solid fa-globe p-2'></i></a>
        <p className={`${style["text-grey"]}`}>Copyright &copy; 2023 All Rights Reserved.</p>
      </div>
    </div>
    <div  className="text-black d-flex flex-column justify-content-between align-items-center p-3">
      <div className="logo">
      <img src={logo} alt="logo-img" className='w-100' />
      </div>
      <div className="bars-icon">
        <i ref={whiteSideIcon} onClick={changeStatus} className='fa-solid fa-bars fa-2xl pointer'></i>
      </div>
      <div className="icons d-flex flex-column">
        <i className='fa-solid fa-globe fa-1xl pb-2'></i>
        <i className='fa-solid fa-share-alt fa-1xl'></i>

      </div>
    </div>
   </nav>
  )
}
