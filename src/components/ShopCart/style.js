import styled from "styled-components";

export const ShopWrapper = styled.div `
.shop-header{
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 30px;
    padding: 0px 10px;
    background-color: #f4f4f4;
    span{
        width: 30px;
        height: 30px;
        img{
            width: 100%;
            height: 100%;
        }
    }
    .shop-title{
        flex: 1;
        height: 30px;
      
        p{
            margin: 0;
            font-weight: 500;
            font-size: 20px;
            line-height: 30px;

        }
        
    }
    .shop-admin{
       
        width: 30px;
        height: 30px;
        padding: 5px;
        p{
            font-size: 15px;
             margin: 0;
        }
    }
   
}
 img{
        width: 100%;
        height: 100%;
    }
    .cart-foot{
        h3{
            text-align: start;
        }
    }
`