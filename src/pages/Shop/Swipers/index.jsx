import React ,{useEffect,useState}from 'react'
import Swiper from 'swiper'
import './index.css'

import header1 from '../../../assets/images/header1.png'

export default function Swipers({shop}) {
   
    useEffect(()=>{
        new Swiper('.btn-banners',{
            loop:true,
           autoplay:{
            delay:1000
           }
        })
    },[])
 
  return (
    <div className='swiper-header'>
      <div className="btn-banners swiper-container">
            <div className="swiper-wrapper">
                {
                      shop.map(item=>(
                         <div className="swiper-slide">
                           <img src={item.images} alt="" /> </div>
                      ))
               
                }
              
                
            </div>
        </div>
        <img src={header1} alt="" />
    </div>
  )
}
