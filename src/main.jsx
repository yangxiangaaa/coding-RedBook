import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter}from  'react-router-dom'
import 'swiper/dist/css/swiper.min.css'
import 'font-awesome/css/font-awesome.min.css'
import { Provider } from 'react-redux'
import store from './store'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
     <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
 
)
