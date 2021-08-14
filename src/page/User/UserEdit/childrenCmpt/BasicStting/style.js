import styled from 'styled-components'

export const BasicSttingDivStyle = styled.div`
    display: flex;
    justify-content: space-between;
    .basicestting-form{
        margin-top: 20px;
        width: 30%;
    }
    .basicstting-userimg{
        width: 62%;
        .userimg-title{
            margin-bottom: 20px;
        }
        .userimg-loading{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 200px;
        }
    }
`