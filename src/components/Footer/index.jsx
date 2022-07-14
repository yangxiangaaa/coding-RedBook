import React from 'react'
import {Link,useLocation}from 'react-router-dom'
import classnames from 'classnames'
import './index.css'
import { isPathPartlyExisted } from '../../utils'
import aaa from '../../assets/images/aaa.png'

export default function Footer() {
    const { pathname } = useLocation()
  if( isPathPartlyExisted(pathname))return
  return (
    <div className='footer'>
      <Link to="/home" className={classnames({active:pathname == '/home' || pathname == '/' })}>
                <i className="fa fa-home"></i>
                <span>首页</span>
            </Link>
            <Link to="/shop" className={classnames({active:pathname == '/shop'})}>
                <i className="fa fa-shopping-bag"></i>
                <span>购物</span>
            </Link>

            <Link to="/add" className={classnames({add:true})}>
                {/* <i className="fa fa-plus-square-o fa-3x"></i> */}
                <img src={aaa} alt="" />
            </Link>
            <Link to="/order" className={classnames({active:pathname == '/order'})}>
                <i className="fa fa-book"></i>
                <span>消息</span>
            </Link>
            <Link to="/mine"  className={classnames({active:pathname == '/mine'})}>
                <i className="fa fa-user"></i>
                <span>我</span>
            </Link>
    </div>
  )
}
