import styled from "styled-components";

export const HomeDivStyle = styled.div`
    .home-car{
        display: flex;
        justify-content: space-between;
        .car-info{
            width: 24%;
        }
        .car-title{
            font-size: 30px;
        }
        .car-echart{
            display: flex;
            align-items: flex-end;
            width: 100%;
            height: 50px;
        }
    }
    .chart-order{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    .chart-pie{
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }
`