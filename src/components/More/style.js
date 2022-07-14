import styled from "styled-components";

export const MoreWrapper = styled.div `
background-color: #f1f1f1;
height: 267px;
.More-header{
    width: 100%;
    height: 30px;
    display: flex;
    .More-title{
        flex: 1;
        line-height: 30px;
        text-align: center;
        letter-spacing: 5px;
        font-size: 16px;
        font-weight: 500;
    }
    span{
        width: 50px;
      
        i{
            font-size: 30px;
           margin-top: 10px;
           margin-left: 10px;
        }
    }
}
.More-pic{
    margin: 30px 0px 10px 10px;
    padding: 10px 0px;
    .More-box{
        margin-right: 23px;
        margin-bottom: 30px;
        width: 50px;
        height: 50px;
        float: left;
        display: flex;
        flex-direction: column;
        img{
            width: 100%;
            border-radius: 50%;
        }
        span{
            text-align: center;
        }
    }
}
`