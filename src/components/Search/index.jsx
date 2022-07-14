import React, { useEffect, useState,useRef} from 'react'
import { SearchWrapper } from './style'
import { SearchBar } from 'antd-mobile'
import laji from '../../assets/images/laji.png'
import Scroll from '../common/Scroll'
import { connect } from 'react-redux'
import { getsearch,getvalueList,getclearsearch } from './store/actionCreator'


 function Search(props) {

  const { value,searchHistory } =props
  const { getvalueListDispatch,getsearchDispatch,getclearsearchDispatch } =props
  const [list,setList]=useState([])
  const queryRef = useRef();
let lists=[
  {id:1,title:'跟男友看的好像不是一个小红书',num:574.7},
  {id:2,title:'看不懂大城市的红绿灯',num:534.2},
  {id:3,title:'西红柿被榴莲袭击了',num:470.0},
  {id:4,title:'海洋大学真的有海',num:448.7},
  {id:5,title:'他找了我爷爷四十多年',num:425.9},
  {id:6,title:'原来小狗也会想妈妈',num:410.3},
  {id:7,title:'爸爸的爱是绿色的',num:381.8},
  {id:8,title:'录取通知是指要通知全小区',num:303.7},
  {id:9,title:'我被迫重妈轻爸',num:245.6},
  {id:10,title:'这猫太费萝卜了',num:245.0}
]
  useEffect(()=>{
    
    setList([...lists])
   
  },[])
  const onSearch=()=>{
    getsearchDispatch()
    getvalueListDispatch('') 
    queryRef.current.focus();
}
const onChange=(value)=>{
  getvalueListDispatch(value)

}
const clearStorage = () => {
 getclearsearchDispatch()
}
  return (
    <SearchWrapper>
      <div className="search-header">
         <SearchBar showCancelButton 
      value={value}
      placeholder='请输入内容'
      onSearch={()=>{onSearch()}}
       onChange={(value)=>{onChange(value)}}
       ref={queryRef}
       />
      </div>
     <Scroll>
         <div className="Search-history">
          <p>历史记录</p>
          <img src={laji} alt="" className="Search-history__icon"
          onClick={()=>{clearStorage()}}/>
          <div className="Search-history__items">
            {
              searchHistory.map((item, index) => {
                return (
                  <div className="Search-history__item" key={index}>
                    <div>{item}</div>
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="Search-title">
       <h3>搜索发现</h3>
         {
          list.map(item=>(
             <div key={item.id} className='title-header'>
              <span className='title-a1'>{item.title}</span>
           <span>{item.num}W</span>
            </div>
          )            
          )
         }
          
        </div>  
     </Scroll>
           
    </SearchWrapper>
  )
}
const mapStateToProps=(state)=>{
  return{
    value:state.Search.value,
    searchHistory:state.Search.searchHistory
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getvalueListDispatch(data){
      dispatch(getvalueList(data)) 
    },
    getsearchDispatch(){
      dispatch(getsearch())
    },
    getclearsearchDispatch(){
      dispatch(getclearsearch())
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)( React.memo(Search))
