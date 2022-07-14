import React,{useEffect,useState} from 'react'
import Details from './Details'
import { getdetail } from '../../api/request'


export default function Detail() {
    const [detail,setDetail]=useState([]) 
   
    useEffect(()=>{    
    (async()=>{   
        let {data}=await getdetail()
    if(data.length>0){
         setDetail([...data])       
    }
       
    })()
   
},[])
  return (
   
    detail && <Details  detail={detail}/>
   
  )
}
