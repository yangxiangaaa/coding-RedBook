import React, { useEffect,useState } from 'react'
import CardLists from './CardLists'
import { CardListWrapper } from './style'
import { PullToRefresh,Toast } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'

export default function CardList({list}) {
   const [data,setData]=useState([])
 let lists=list.slice(0,8)
   useEffect(()=>{ 
      setData([...lists])
   },[])

   const getNextData=()=>{     
    let ret=list.splice(data.length,4)       
      return ret  
   }

   const statusRecord = {
      pulling: '用力拉',
      canRelease: '松开吧',
      refreshing: '玩命加载中...',
      complete: '好啦',
    }
    
  return (
    <CardListWrapper>
      <PullToRefresh
      onRefresh={async () => {
        await sleep(1000)
        setData([...getNextData(), ...data])
        if(data.length>=16){
          Toast.show({
            icon: 'fail',
            content: '你挑的嘛！偶像',
          })
        }
      }}
      renderText={status => {
         return <div>{statusRecord[status]}</div>
       }}      
    >
      <div  className='pull'>
 <div className="left">
       {
           data.slice(0,data.length/2).map((item,index)=>(
           <CardLists item={item} />
           )
           )
       }
    </div>
    <div className="right">
    {
           data.slice(data.length/2).map((item,index)=>(
        <CardLists item={item} />           
           )

           )
       }
    </div>
      </div>
      
    </PullToRefresh>
   
   </CardListWrapper>
  )
}
