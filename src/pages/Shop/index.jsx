import React,{useEffect, useState} from 'react'
import Header from './Header'
import Swipers from './Swipers'
import Banners from './Banners'
import Shopinfo from './Shopinfo'
import Loading from '../../components/Loading'
import LoadingV2 from '../../components/common/loading-v2'
import Scroll from '../../components/common/Scroll'
import { connect } from 'react-redux'
import { getShopinfoList,getShopList,getBannersList} from './store/actionCreators'



 function Shop(props) {
 
const {shopinfo,shop,banners,isShow}=props
const { getShopinfolistDispatch,getShopListDispatch,getBannersListDispatch}=props
  useEffect(()=>{
  
       getShopinfolistDispatch()
       getShopListDispatch()
       getBannersListDispatch()
       

},[])


  return (
    <div className='shop'>
      <Header />
      {
         isShow ? <div><Loading/><LoadingV2/></div>:<Scroll>
        <div className="shop-body">
        <Swipers shop={shop}/>
        <Banners banners={banners}/>
      </div>
      <Shopinfo shopinfo={shopinfo}/>
      </Scroll>
      }
  
      
    </div>
  )
}
const mapStateToProps=(state)=>{
  return{
    shopinfo:state.Shop.shopinfoList,
    shop:state.Shop.shopList,
    banners:state.Shop.bannersList,
    isShow:state.Shop.isShow
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    getShopinfolistDispatch(){
      dispatch(getShopinfoList())
    },
    getShopListDispatch(){
      dispatch(getShopList())
    },
    getBannersListDispatch(){
      dispatch(getBannersList())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Shop)