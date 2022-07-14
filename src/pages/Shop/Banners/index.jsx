import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'

import './index.css'




export default function Banners({banners}) {
   useEffect(()=>{
    console.log(banners)
   })
    return (
    <div className='banners'>
        <div className="banners-a">
           
                <div className="banners-slide">
                   {
                    banners.map(item=>(
                      <Link to='#' className='banners-item'>
                        <div>
                          <p>
                            <img src={item.iomages} alt="" />
                          </p>
                          <span>
                            {item.title}
                          </span>
                        </div>
                      </Link>
                    ))
                   }
                </div>
                
            
            
        </div>
    </div>
    )
}


