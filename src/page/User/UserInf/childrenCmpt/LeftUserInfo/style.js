import styled from 'styled-components'

export const LeftDivStyled = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    width: 30%;
    height: 630px;
    background-color: #fff;
    .userinfo-name{
        margin:2px 0;
        font-size: 30px;
    }
    .userinfo-info{
        margin-top: 28px;
        width: 100%;
        font-size: 14px;
        p{
            margin:10px;
        }
    }
    .userinfo-tag{
        width: 100%;
        .tag-title{
            margin-bottom: 10px;
        }
        .tag-tagst{
            margin-bottom: 8px;
        }
    }
`