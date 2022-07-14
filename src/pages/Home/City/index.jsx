import React,{useState,useEffect}from 'react'
import CardList from '../../../components/CardList'
import Loading from '../../../components/Loading'
import { connect } from 'react-redux'
import { getCardList } from './store/actionCreators'


 function City(props) {
 
  const { listData,show }=props
  const { getCardlistDispatch }=props
  console.log(listData,'=--=-=-')

  useEffect(()=>{
    getCardlistDispatch()
},[])
  return (
    
       show ?<Loading/>:
     <CardList list={listData}/>
    
  )
}
const mapStateToProps=(state)=>{
  return{
    listData:state.Card.listData,
    show:state.Card.show
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    getCardlistDispatch(){
     dispatch(getCardList()) 
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(City)