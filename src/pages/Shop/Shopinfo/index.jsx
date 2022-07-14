import React, { useEffect, useState } from 'react'
import './index.css'
import {Link} from 'react-router-dom'
import LazyLoad from 'react-lazyload'
import {Tabs} from 'antd-mobile'
import classNames from 'classnames'


import jiazai from '../../../assets/images/jiazai.gif'

export default function Shopinfo({shopinfo}) {
  let shoplist=['推荐','食品','水果','男装','女装','童装','手机','电器','医药','美妆']
  const [isScrollTop,setIsScrollTop]=useState(false)
  const windowonScoll=()=>{
    window.onscroll=function(){
      let h = document.documentElement.scrollTop || document.body.scrollTop;
      if (h > 393) {
        if (!isScrollTop) {
         setIsScrollTop(true)
        }
      } else {
       setIsScrollTop(false)
      }
    }
  }
  useEffect(()=>{
    windowonScoll()
    
  },[isScrollTop])
  return (
    <div className='shop'>
      <Tabs defaultActiveKey='0' >
  {
    shoplist.map((item,index)=>(
      <Tabs.tab title={item} key={index} className={classNames(isScrollTop?'tab-fixed':'')}>
<div className='shopinfo'>
        {
            shopinfo.map(item=>(
                <Link
                to={
                    {
                        pathname:'/detail',
                        search:`id=${item.id}`
                    }
                }
                key={item.id}
                style={{display:'block'}}
                >
                             <div className='shopinfo-box'>     
             <div>
        <span>
        <LazyLoad 
                        placeholder={<img width="100%" 
                height="100%" src={jiazai}/>}>
                  <img 
                    width="100%" 
                     height="100%"
                    src={item.images + "?param=300x300"} alt="" />
                                              </LazyLoad>

            
            
        </span>
      </div>
      <p>{item.title}</p>
      <h3>￥{item.price}</h3>
        </div>
                </Link>           
            ))
        }
     
     
    </div>
      </Tabs.tab>
    ))
  }
</Tabs>
    </div>

    
  )
}
