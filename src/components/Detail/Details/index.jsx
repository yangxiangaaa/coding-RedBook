import React,{useEffect} from 'react'
import './index.css'
import { useNavigate ,useParams,useSearchParams}from 'react-router-dom'
import { useState } from 'react'
// import { getdetail } from '../../../api/request'
import Swiper from 'swiper'
import './index.css'
import { Link } from 'react-router-dom'
import {Toast,Popup } from 'antd-mobile'
import { connect } from 'react-redux'
import Selectcart from '../../Selectcart'
import bottom from '../../../assets/images/bottom.png'


 function Details(props) {
    const {shopnum,detail}=props
    const [detaill,setDetaill]=useState([])   
    const [visible,setVisible]=useState(false)
    const [search] = useSearchParams()
    const detailid= search.get('id') || ''
     
       
useEffect(()=>{
    let detaildataa= detail.filter((item)=>
    detailid ==  item.id
     )
     setDetaill(detaildataa)
    
},[detail])

useEffect(()=>{
    
    new Swiper('.btn-banners',{
        loop:true,
       autoplay:{
        delay:1000
       }
    })
},[])

  return (
     <div className='detail'>  
   
         {/* {console.log(detail.price)} */}
        <span className='d-a'>
            <Link to='/shop'>
<i className='fa fa-chevron-left'></i>
            </Link>
        </span>
        <span className='d-b'>
            <i className='fa fa-ellipsis-h'></i>
        </span>
            
     <div className="btn-a btn-banners swiper-container">
            <div className="swiper-wrapper">
                {
                    
                    detaill.length !==0 ?    detaill[0].img.map((item)=>(
                        <div className="swiper-slide">
                           <img src={item} alt="" className='aimg'/>
                           </div>
                     )):''
                    
                    
                }                                                               
            </div>
        </div>
        <div className="detail-body">
            <div className='s-a'>
                 <span>￥
                <i>{detaill.length !==0 ? detaill[0].price:'' }</i>
            </span>
            <i className='fa fa-star-o'></i>
            </div>
            <div className='title'>
{detaill.length !==0 ? detaill[0].title:'' }
            </div>
            <div className='foota'>
                <span className='f-a'>
                    <i className='f-b fa fa-check'></i>     
                </span><p>包邮</p>
                <span className='f-a'>
                    <i className='f-b fa fa-check'></i>     
                </span><p>分期免息</p>
                <span className='f-a'>
                    <i className='f-b fa fa-check'></i>     
                </span><p>免费取退</p>
            <span className='f-c'><i className='fa fa-angle-right'></i></span>
            
            </div>
        </div>
        <div className="foot">
            <img src={bottom} alt="" />
          
            </div>
<div className="detail-footer">
    <div className="detail-footer-a">
        <span><i className='fa fa-user-circle'></i></span>
        <p>店铺</p>
    </div>
    <div className="detail-footer-a">
        <span><i className='fa fa-headphones'></i></span>
        <p>客服</p>
    </div>
    <div className="detail-footer-a">
        <span><i className='fa fa-cart-plus'></i></span>
        <p>购物车</p>
     {shopnum==0? <div></div>:<div className='num'>{shopnum}</div>}   
    </div>
    <div className="detail-footer-b" onClick={()=>{
        setVisible(!visible)
    }}>
        
        加入购物车
    </div>
    <div className="detail-footer-b">
       领劵购买
    </div>
</div>
<Popup
              visible={visible}
              onMaskClick={() => {
                setVisible(false)
              }}
              bodyStyle={{ minHeight: '60vh' }}
            >
             <Selectcart detaill={detaill} setVisible={setVisible}/>
            </Popup>
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        shopnum:state.Cartstore.shopCart.length
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
      
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Details))
