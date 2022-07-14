import React, { useState } from 'react'
import {CardListWrapper} from './style'
import bofang from '../../../assets/images/bofang.png'
import xin from '../../../assets/images/xin.png'
import xxin from '../../../assets/images/xxin.png'
import LazyLoad from 'react-lazyload'
import jiazai from '../../../assets/images/jiazai.gif'

export default function CardLists({item}) {
    const [isStr,setIsStr]=useState(true)
    const [strnum,setStrnum]=useState(item.strnum)
    
    const isStar=()=>{
        
        let isstrr=isStr
        setIsStr(!isstrr)
        let strnumm=Number(strnum)+1
        if(isstrr){
            setStrnum(strnumm)
        }else
        {
            setStrnum(strnum-1)
        }
        
        
    }

  return (

     <CardListWrapper>
        <div className='card-container' >
               <div className="card-pic">
               <LazyLoad
                        placeholder={<img width="100%" 
                        height="100%" src={jiazai}/>}
                        >
                                  <img  width="100%" 
                                    height="100%"
                                    className='headPic'
                                    src={item.images + "?param=300x300"}
                                     alt="" />
                        </LazyLoad>
                
                {/* <video preload="metadata" crossOrigin="anonymous" autoPlay src={item.images} className='headPic'></video> */}
                <img src={bofang} className='isVideo' />
               </div>
               <div className="card-bottom">
                <div className="title-con">
                    <p className='title'>
                        {item.title}
                    </p>
                </div>
                <div className="bottom">
                    <div className="avater">
                       
                                  <img src={item.img } alt="" />
                        
                       
                    </div>
                    <div className="name">
                        {item.author}
                    </div>
                    <div className="star" onClick={()=>isStar()}>
                        <img src={isStr ? xin:xxin} alt="" />
                        <span>{strnum}</span>
                    </div>
                </div>
               </div>
            </div>  
     </CardListWrapper>
                          
           
  )
}
