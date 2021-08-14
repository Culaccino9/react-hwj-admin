import styled from "styled-components";

export const GoodsSalesDivStyle = styled.div`
    .goods-scatter{
        display: flex;
        justify-content: space-between;

        .scatte-right{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 507px;
            width: 24%;
        }
    }
    .goods-footer{
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
        height: 300px;
        .footer-left{
            display: flex;
            justify-content: space-between;
            width: 75%;
            .left-car:first-child{
                width: 66.5%;
            }
            .left-car:last-child{
                width: 32%;
            }
        }
        .footer-right{
            width: 24%;
        }
    }
`