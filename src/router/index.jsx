import { lazy,Suspense } from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
const Detail=lazy(()=>import('../components/Detail'))
import Footer from '../components/Footer'
import Home from '../pages/Home'
const ShopCart=lazy(()=>import('../components/ShopCart'))
const Add=lazy(()=>import('../pages/Add'))
const Mine=lazy(()=>import('../pages/Mine'))
const Order=lazy(()=>import('../pages/Order'))
const Shop=lazy(()=>import('../pages/Shop'))



const RouterConfig=()=>{
    return(
        <Suspense fallback={null}>
            <Routes>
            <Route path='/' element={<Navigate to='/home' replace={true}/>}></Route>
            <Route path="/home" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/mine" element={<Mine/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/detail" element={<Detail/>}/>
            <Route path="/shopcart" element={<ShopCart/>}/>
            </Routes>
            <Footer/>
        </Suspense>
    )
}

export default RouterConfig