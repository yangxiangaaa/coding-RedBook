import styled from "styled-components";

export const GouWrapper = styled.div `
box-sizing: border-box;
height: 150px;
background-color: #f4f4f4;
border-radius: 10px;

margin-top: 20px;

.cart-header{   
    width: 100%;
    height: 20px;
    margin-bottom: 20px;
    display: flex;
    p{
        flex: 1;
        font-size: 16px;
        padding-left:20px ;
        text-align: start;
        margin: 0;
    }
    span{
        width: 10px;
        padding-right: 20px;
        i{
            font-size: 16px;
        }
    }
}
.cart-body{
    width: 100%;
    height: 120px;
    display: flex;
    .cart-body-input{
        width: 10px;
        height: 100%;
        line-height: 100px;
        margin-right: 10px;
        input{
          width: 12px;
     height: 12px;
     display: inline-block;
     text-align: center;
     vertical-align: middle;
     line-height: 12px;
     position: relative;
  
        }
    }
    .cart-body-img{
        width: 100px;
        height: 90%;
       
        img{
            width: 100%;
            height: 95%;
               border-radius: 10px;      
        }

    }
    .cart-body-title{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content:space-between;
        margin-bottom: 10px;
        padding-left: 10px;
        p{
            padding: 0;
            margin: 0;
            text-align: start;
        }
        .cart-body-header{
            p{
              color: red;
              font-size: 20px;
                strong{
                    font-size: 16px;
                }
               
                float: left;
            }
            .content-right-operate{
                float: right;
                 width: 30%;
            height :30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .addOrder{
               width: 20px;
              height :20px;
              img{
                width: 100%;
              }
            }
              
            .orderNum{
                font-size: 10px;
              font-weight: bold;
            }
              
            .reduceOrder{
                 width :20px;
              height:20px;
              img{
                width: 100%;
              }
            }
             
            }
           
        }
    }
}
.shopCart-tab{
    box-sizing: border-box;
    padding-left: 10px;
    position :fixed;
    bottom :0;
    left: 0;
    background-color: #ffffff;
    width :100%;
    height :50px;
    .shopCart-tab__left{
         height :50px;
      float :left;
      display: flex;
      justify-content: flex-start;
      align-items: center;
       p {
        font-size: 16px;
         margin-top :10px;
      }
    }     
    .shopCart-tab__right{
         margin-left: 15px;
      width :25%;
      background-color: red;
      font-size: 13px;
      color: #fff;
      float :right;
      height :50px;
      overflow: hidden;
      text-align: center;
      letter-spacing: 2px;
      line-height: 50px;
     
     
    }  
      .shopCart-center{
        float: left;
         font-size: 12px;
         margin-top: 4px;
         margin-right: 19px;
      height: 50px;
      float :right;
      /* display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end; */
      .shopCart-center__top{
         color:black;
        font-weight: bold;
        span {
             color: red;
          font-weight: bolder;
        }      
      }
       .shopCart-center__bottom{
         margin-top: 8px;
        color: rgba(0,0,0,0.8);
      }
      } 
}
`