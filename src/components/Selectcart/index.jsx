import React,{useEffect}from 'react'
import { useNavigate ,useParams,useSearchParams}from 'react-router-dom'
import { SelectWrapper } from './style'
import { Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import { getcartstoreList } from '../cartstore/store/actionCreator'


 function Selectcart(props) {

let yanse=['[两件套]黑色短袖衬衫+黑色牛仔裤',
'[两件套]白色短袖衬衫+黑色牛仔裤',
'[单件装]黑色短袖衬衫',
'[单件装]白色短袖衬衫',
'[三件套]黑色短袖衬衫+白色短袖T+白色休闲裤',
'[三件套]蓝色短袖衬衫+白色短袖T+黑色休闲裤',
'[三件套]绿色短袖衬衫+白色短袖T+浅蓝色休闲裤',
'[三件套]黑色短袖衬衫+白色短袖T+蓝色休闲裤',
'[三件套]深蓝短袖衬衫+白色短袖T+白色休闲裤']
let size=['M','L','XL','2XL','3XL','S']

const { cartstore,detaill,setVisible }=props
console.log(detaill,'sdhfg65765dshgfst7')
const { getaddstoreDispatch }=props
const  successToast=()=> {
    Toast.show({
        icon: 'success',
        content: '加入购物车成功',
      })
  }

const  addCart=(dataa)=> {
let data=dataa[0]
if(cartstore.every(item=>item.id!==data.id)){
  let list={
    id:data.id,
    images:data.img[0],
    num:1,
    price:data.price,
    select:false,
    title:data.title,
    store:data.store,
    quanselect:false

  }
getaddstoreDispatch(list)
}

    
        successToast()
       
        
     }
  return (
   <SelectWrapper>
    <div className='select-header'>
        <img src={detaill[0].img[0]} alt="" />
        <p>￥{detaill[0].price}</p>
        <span onClick={()=>{setVisible(false)}}>
            <i className='fa fa-times'></i>
        </span>
    </div>
    <div className='foota'>
                <span className='f-a'>
                    <i className='f-b fa fa-check'></i>     
                </span><p>包邮</p>
                <span className='f-a'>
                    <i className='f-b fa fa-check'></i>     
                </span><p>免费取退</p>
                <span className='f-a'>
                    <i className='f-b fa fa-check'></i>     
                </span>
                <p>七天无理由退货</p>
            
            
            </div>
      <div className="select-color">
        <h3>颜色</h3>
        {
          yanse.map((item)=>(<div className='color-box'>{item}</div>)
          )
        }
        
      </div>
      <div className="select-size">
        <h3>尺寸</h3>
        {
          size.map(item=>(
            <div className="size-box">{item}</div>
          ))
        }
        
      </div>
    <div className='select-foot' onClick={()=>{addCart(detaill);setVisible(false)} }>确定</div>
   </SelectWrapper>
  )
} 

const mapStateToProps=(state)=>{
  return{
    cartstore:state.Cartstore.shopCart
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getaddstoreDispatch(data){
     dispatch(getcartstoreList(data)) 
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Selectcart)