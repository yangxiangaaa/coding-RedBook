import React, { useEffect, useState } from 'react'
import {GouWrapper} from './style'
import jianhao from '../../assets/images/jianhao.png'
import jiahao from '../../assets/images/jiahao.png'
import {Toast} from 'antd-mobile'
import { connect } from 'react-redux'
import { getisshowList } from '../cartstore/store/actionCreator'
import { getquanselect } from '../ShopCart/store/actionCreators'



function GouCart(props) {
  const {item,show,shopCart,quanselect}=props
const { getisshowDispatch,getquanselectDispatch }=props

    const [cartList,setCartList]=useState([])
    const [totalPrice,setTotalPrice]=useState('0')
useEffect(()=>{

    setCartList(item)
   total()
  
})
const total=()=>{
  
  let totals=0
  shopCart.map(a=>{
    if(a.select==true){
      totals+=a.price*a.num
    }
  })
  setTotalPrice(totals)
}
const removecart=()=>{
  success()
  shopCart.forEach((a,index)=>{
    if(a.id==item.id){
      shopCart.splice(index,1)
    }
  })
  getisshowDispatch(shopCart)

 }
const reduceNum=()=>{
  
  shopCart.map((a,index)=>{
if(a.id==item.id){
  if(a.num==1){
    a.num==1
  }else{
    a.num--
  }
}
  })
  getisshowDispatch(shopCart)
   
   
}
const addNum=()=>{
   shopCart.map((a,index)=>{
      if(a.id==item.id){
        a.num++
      }
    })
    getisshowDispatch(shopCart)
}
const isSelect=()=>{
  shopCart.forEach(a=>{
    if(a.id==item.id){
      a.select=!a.select
    }
  })
  getisshowDispatch(shopCart)
  if(shopCart.every(a=>a.select==true)){
    getquanselectDispatch(true)
  }else{
    getquanselectDispatch(false)
  }
  

}
const handleSelect=()=>{
  getquanselectDispatch(!quanselect)
  if(quanselect){
    shopCart.map(a=>{
      a.select=false
    })
    getisshowDispatch(shopCart)
  }else{
    shopCart.map(a=>{
      a.select=true
    })
    getisshowDispatch(shopCart)
  }
 
}
const  success=()=> {
  Toast.show({
      icon: 'success',
      content: '删除成功',
    })
}
const shanchu=()=>{
  success()
  shopCart.forEach((a,index)=>{
    if(a.select==item.select){
      shopCart.splice(index,1)
    }
  })
  getisshowDispatch(shopCart)

}

  return (
   
         <GouWrapper>           
     <div className="cart-header">
        <p>{cartList.store}&gt;</p>
        <span onClick={()=>removecart()}><i className='fa fa-times'></i></span>
     </div>
     <div className="cart-body">
      <div className='cart-body-input' onClick={()=>isSelect()}>
         <input type="checkbox" checked={cartList.select==true? true:false}/>
      </div>
       <div className='cart-body-img'> 
        <img src={cartList.images} alt="" />
       </div>
       <div className="cart-body-title">
        <p>{cartList.title}</p>
        <div className='cart-body-header'>
             <p> <strong>￥</strong> {cartList.price}</p>
            <div className="content-right-operate">
              <div className="addOrder"onClick={()=>reduceNum()} >
                <img src={jianhao} alt="" />
              </div>
              <div className="orderNum">{cartList.num}</div>
              <div className="reduceOrder" onClick={()=>addNum(cartList.id)}>
                <img src={jiahao} alt="" />
              </div>
            </div>
            
        </div>
     
       </div>
     </div>
  {
    show ? 
             <div className="shopCart-tab">
                <div className="shopCart-tab__left"
                  onClick={()=>handleSelect()}>
                  <input type="checkbox" checked={quanselect} />
                  <p>全选</p>
                </div>                                                   
                      <div className="shopCart-tab__right" onClick={()=>{shanchu()}}>
                        删除                                     
                    </div>              
              </div> :
              <div className="shopCart-tab">
                <div className="shopCart-tab__left"
                  onClick={()=>handleSelect()}>
                  <input type="checkbox" checked={quanselect} />
                  <p>全选</p>
                </div>                                                   
                      <div className="shopCart-tab__right">
                        结算                                     
                    </div>
                <div className="shopCart-center">
                        <div className="shopCart-center__top">
                          总计: <span>￥{totalPrice}</span>
                        </div>
                        <div className="shopCart-center__bottom">
                          免运费
                </div>
                      </div>
              </div>
              }
              
    
    </GouWrapper>
      
   
  )
}
const mapStateToProps=(state)=>{
  return{
    show:state.Shopcart.isShow,
   shopCart:state.Cartstore.shopCart,
   quanselect:state.Shopcart.quanselect
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getisshowDispatch(data){
      dispatch(getisshowList(data))
    },
    getquanselectDispatch(data){
      dispatch(getquanselect(data))
    }

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(GouCart))
