import React, { useEffect, useState,useRef } from 'react'
import './index.css'
import top from '../../assets/images/top.png'
import sousuo from '../../assets/images/sousuo.png'
import arrow from '../../assets/images/arrow.png'
import classNames from 'classnames'
import Focus from './Focus'
import Found from './Found'
import City from './City'
import { Popup, Button,Swiper} from 'antd-mobile'
import Search from '../../components/Search'
import Scroll from '../../components/common/Scroll'



export default function Home(props) {
  // const ref = useRef<SwiperRef>(null)
 const headlist=['关注','发现','南昌']
 const [currentTab,setCurrentTab]=useState(1)
 const [visible,setVisible]=useState(false)
 
const colors = ['#ace0ff', '#bcffbd', '#e4fabd']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div className='content' style={{ background: color }}>
      {index + 1}
    </div>
  </Swiper.Item>
))
 const toSlideItem=(index)=>{
setCurrentTab(index)
  }
 return (
    <div className="home-container">
      <div className="header">
        <div className="button">
          <img src={top} alt="" />
        </div>
        <div className="tab-item">
          {
            headlist.map((item,index)=>(
              <div key={index}
              onClick={()=>toSlideItem(index)}
              className={classNames({'buttom':index==currentTab},{'nav-link':index!=currentTab})}             
              >
                <span className={classNames({'two':index===1})}>{item}</span>
              </div>
            ))
          }
        </div>
        <div className="search-nav" onClick={()=>{
          setVisible(!visible)
        }}>
          <img src={sousuo} alt="" />
        </div>
       
      </div>
     
           <Swiper
            indicator={(total, current) => (
              <div>
                  {setCurrentTab(current)}
              </div>
            
            )}
          >
           <Swiper.Item className='content'>
            <Focus/>
           </Swiper.Item>
           <Swiper.Item className='content'>
            <Scroll>
              <Found/>
            </Scroll>
            
           </Swiper.Item>
           <Swiper.Item className='content'>
            <Scroll>
                <City/>
            </Scroll>
           </Swiper.Item>
          </Swiper>
  
   
          <Popup
          className='popup'
              visible={visible}
              onMaskClick={() => {
                setVisible(false)
              }}
              position='right'
              bodyStyle={{ minWidth: '100vw' }}
            >
             <div className='search-tui' onClick={()=>{        
                setVisible(!visible)
            }}
             >
              <img src={arrow} alt="" />
             </div>
             <Search/>
            </Popup>
    </div>  
  )
}
