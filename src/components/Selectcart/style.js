import styled from "styled-components";

export const SelectWrapper = styled.div `
padding: 20px; 
.select-header{
    width: 100%;
    height: 80px;
    display: flex;
    img{
        width: 80px;
        height: 100%;
        border-radius: 10px;
    }
    p{
        flex: 1;
        float: left;
        font-size: 20px;
        color: red;
        margin: 0;
    }
    span{
        width: 10px;
        font-size: 20px;
    }
    
}
.foota {
    box-sizing: border-box;
    width: 100%;
    height: 20px;
    padding: 0px 10px;
    background-color: #f1f3f4;
    margin-top:10px ;
    .f-a {
    float: left;
    margin-left: 10px;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: rgb(239, 241, 243);
    .f-b {
    float: left;
    margin-left: 3px;
    line-height: 20px;
    font-size: 10px;
}
}
p {
    float: left;  
    font-size: 14px;
    margin-left: 5px;
    margin-top: 0px;
}

}
.select-color{
    .color-box{
        float: left;
        font-size: 12px;
        height: 20px;
        background-color: #f1f3f4;
        border-radius: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        padding: 1px 5px;
        &:hover{
            color: black;
            background-color: red;
        }
    }
}
.select-size{
    margin-top: 273px;
    margin-bottom: 66px;
    .size-box{
        float: left;
        font-size: 12px;
        height: 20px;
        background-color: #f1f3f4;
        border-radius: 10px;
        margin-bottom: 10px;
        margin-left: 10px;
        padding: 1px 5px;
        &:hover{
            color: black;
            background-color: red;
        }
    }
}
.select-foot{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 90%;
    height: 30px;
    border-radius: 15px;
    background-color: red;
    color: white;
    font-size: 16px;
    text-align: center;
    margin-left: 20px;
}
`