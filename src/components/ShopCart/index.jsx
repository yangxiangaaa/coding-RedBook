import React, { useEffect, useState } from 'react'
import {ShopWrapper} from './style'
import zuojian from '../../assets/images/zuojian.png'
import GouCart from '../GouCart'
import nocart from '../../assets/images/nocart.png'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { getisShowList } from './store/actionCreators'
import LazyLoad from 'react-lazyload'
import jiazai from '../../assets/images/jiazai.gif'



 function ShopCart(props) {
    const [shopList,setShopList]=useState([])
    const {isShow,shopinfo,shopcart}=props
    const { getisShowDispatch }=props
    // useEffect(()=>{
    //     let shoplist= JSON.parse(localStorage.getItem('list')) ;
    //     setShopList(shoplist)
 
    // })
    const changeshow=()=>{
        getisShowDispatch()
    }

  return (
    <ShopWrapper>
        <div className='shop-header'>
            <span>
                <Link to='/shop'>
  <img src={zuojian} alt="" />
                </Link>
              
            </span>
            <div className='shop-title'>
                <p>购物车</p>
            </div>
            <div className='shop-admin' onClick={()=>{changeshow()}}>
                <p>管理</p>
            </div>
        </div>
        {
          shopcart==null || shopcart.length==0?<img src={nocart} alt="" />
           : shopcart.map((item,index)=>(
               <GouCart item={item} key={index}/>
            ))
        }
        <div className="cart-foot">
                <h3>猜你喜欢</h3>
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
    </ShopWrapper>
  )
}

const mapStateToProps=(state)=>{
    return{
        isShow:state.Shopcart.isShow,
        shopinfo:state.Shop.shopinfoList,
        shopcart:state.Cartstore.shopCart
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        getisShowDispatch(){
           dispatch(getisShowList()) 
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(ShopCart))



