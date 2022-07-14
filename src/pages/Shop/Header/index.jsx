import React, { useState } from 'react'
import './index.css'
import {Popup}from 'antd-mobile'
import More from '../../../components/More'
import {Link} from 'react-router-dom'
import arrow from '../../../assets/images/arrow.png'
import Search from '../../../components/Search'

export default function Header() {
  const [visible,setVisible]=useState(false)
  const [visible1,setVisible1]=useState(false)
 
const search=()=>{
  
  setVisible1(!visible1)
  console.log(visible1)
}
  return (
    <div className='head'>

          <input type="text" placeholder='跑步护膝' onFocus={()=>{search()}}/>
  
    
      <span>
        <Link to='/shopcart'>
           <i className='fa fa-shopping-cart'></i>
        </Link>      
      </span>
      <span>
        <i className='fa fa-reorder'></i>
      </span>
      <span  onClick={() => {
                setVisible(true)
              }}>
        <i className='fa fa-ellipsis-h'></i>
      </span>
      <Popup
              visible={visible}
              onMaskClick={() => {
                setVisible(false)
              }}
              bodyStyle={{ minHeight: '40vh' }}
            >
              <More setVisible={setVisible}/>
            </Popup>
            <Popup
          className='popup'
              visible={visible1}
              onMaskClick={() => {
                setVisible1(false)
              }}
              position='right'
              bodyStyle={{ minWidth: '100vw' }}
            >
             <div className='search-tui' onClick={()=>{        
                setVisible1(!visible1)
            }}
             >
              <img src={arrow} alt="" />
             </div>
             <Search/>
            </Popup> 
    </div>
  )
}
