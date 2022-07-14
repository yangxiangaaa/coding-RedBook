import styled from "styled-components";

export const SearchWrapper = styled.div `
.search-header{
    margin-left: 30px;
    margin-top: -34px;
}
.Search-history{
    padding: 10px 15px;
    margin-top: 8px;
    background-color: #f5f5f5;
    p{
        margin-top: 0;
        display: inline-block;
      font-size: 18px;
      color: #000;
    }
    .Search-history__icon{
         width:24px;
      height:24px;
      float:right;
    }
    .Search-history__items{
         margin-top: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;
      .Search-history__item{
              margin-bottom :10px;
        margin-right: 10px;
        div{
            height: 15px;
          border-radius: 20px;
          padding: 5px 10px;
          border: 1px solid rgba(0,0,0,0.6);
        }
      }
  
    }
     

     
}
.Search-title{
  margin-top: 100px;
  h3{
    margin-left: 10px;
    color: red;
    border-bottom: 1px solid red;
  }
  .title-header{
    margin: 10px 20px;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
     border-bottom: 1px solid ;
    display: flex;
    color: #000;
    .title-a1{
      flex: 1;
    }
  }
}
`