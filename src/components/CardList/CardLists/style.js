import styled from "styled-components";

export const CardListWrapper = styled.div `

 .card-container{
    background-color:#fff;
  position: relative;
  width :47vw;
  border-radius :5px;
  margin-bottom :5px;
    .card-pic{
        width :100%;
        img{
            width: 100%;
        }
        .headpic{
            border-top-left-radius:5px;
      border-top-right-radius:5px;
      width:100%;
        }
        .isVideo{
            position:absolute;
      width:20px;
      height:20px;
      top:20px;
      right:20px;
     /* opacity:60%; */
        }
    }
    .card-bottom{
        width: 100%;
        box-sizing: border-box;
        padding: 10px 8px 10px 8px;
        .title-con{
            position: relative;
            font-size: 13px;
            font-weight: 500;
            line-height: 1.2;
            min-height: 60px;
            color: black;
            .title{
                word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical; 
        -webkit-line-clamp: 2; 
        overflow: hidden; 
            }
        }
        .bottom{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            margin-top: 5px;
               .avater{
                width: 25px;
                height: 25px;
                margin-left: 5px;
                 img{
                    border-radius: 50%;
                    width: 100%;
                    height: 100%;
                }
                }
               
                .name{
                    color: rgba(0,0,0,.6);
                    font-size: 11px;
                }
                .star{
                    position: absolute;
                    right: 10px;
                    color: #666666;
                    font-size: 13px;
                    img{
                        width: 16px;
                        height: 16px;
                    vertical-align:middle;
                margin-right:5px;                    }
                
            }
        }
    }

 }

`