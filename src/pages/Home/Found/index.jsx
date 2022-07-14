import React, { useEffect ,useState} from 'react'
import './index.css'
import Loading from '../../../components/Loading'
import CardList from '../../../components/CardList'
import {Tabs} from 'antd-mobile'
import { connect } from 'react-redux'
import { getFoundList } from './store/actionCreators'



 function Found(props) {
  let tablist=['推荐','视频','直播','美食','学习','体育','旅行','职场','科技数码','摄影','音乐','舞蹈','汽车']
  const {listData,show,getFoundlistDispatch}=props
  
  useEffect(()=>{
    getFoundlistDispatch()
},[])
  return (
   
    show ?<Loading/>:
    <Tabs defaultActiveKey='0' className='tab'>
{
  tablist.map((item,index)=>(
<Tabs.Tab title={item} key={index} className='tab-s'>
      <CardList list={listData} key={index}></CardList>
    </Tabs.Tab>
  )
  )   
}     
 </Tabs>
  )
}
const mapStateToProps=(state)=>{
  return{
    listData:state.Found.dataList,
    show:state.Found.show
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    getFoundlistDispatch(){
      dispatch(getFoundList())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Found)
