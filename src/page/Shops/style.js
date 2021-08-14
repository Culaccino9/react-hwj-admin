import styled from "styled-components";

export const ShopsDivStyle = styled.div`
    .shops-header{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        height: 200px;
        background-color: #fff;
        .header-breadcrumb{
            display: flex;
            justify-content: space-between;
        }
        .header-info{
            display: flex;
            .info-name{
                margin-left: 30px;
                h2{
                margin-top: 10px;
                margin-bottom: 20px;
                font-size: 22px;
            }
                p{
                    color: #00000073;
                }
            }
            .info-score{
                margin-left: 150px;
                margin-top: 20px;
                h5{
                    text-align: center;
                }
            }
        }
    }
    .shops-main{
        display: flex;
        justify-content: space-between;
    }
`