import React from 'react'
import { MoreWrapper } from './style'
import gouwuche from '../../assets/sidebar/3.png'
import dingdan from '../../assets/sidebar/4.png'
import kefu from '../../assets/sidebar/10.png'
import kajuan from '../../assets/sidebar/5.png'
import xinyuandan from '../../assets/sidebar/6.png'
import dizhi from '../../assets/sidebar/12.png'
import huiyuan from '../../assets/sidebar/7.png'




export default function More({setVisible}) {
  return (
   <MoreWrapper>
    <div className="More-header">
        <div className="More-title">
            <p>更多功能</p>
        </div>
        <span onClick={()=>{setVisible(false)}}>
            <i className='fa fa-times'></i>
        </span>
    </div>
    <div className="More-pic">
        <div className="More-box">
            <img src={gouwuche} alt="" />
            <span>购物车</span>
        </div>
        <div className="More-box">
            <img src={dingdan} alt="" />
            <span>订单</span>
        </div>
        <div className="More-box">
            <img src={kefu} alt="" />
            <span>客服</span>
        </div>
        <div className="More-box">
            <img src={kajuan} alt="" />
            <span>卡劵</span>
        </div>
        <div className="More-box">
            <img src={xinyuandan} alt="" />
            <span>心愿单</span>
        </div>
        <div className="More-box">
            <img src={dizhi} alt="" />
            <span>地址管理</span>
        </div>
        <div className="More-box">
            <img src={huiyuan} alt="" />
            <span>小红卡会员</span>
        </div>
    </div>
   </MoreWrapper>
  )
}
