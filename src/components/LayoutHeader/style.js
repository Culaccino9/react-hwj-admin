import styled from 'styled-components'

export const HeaderDivStyle = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 50px;
    height: 100%;
    .user{
        display: flex;
        justify-content: space-between;
        align-items: center;

        .icont{
            margin: 0 16px;
            font-size: 16px;
            cursor: pointer;
        }
    }
    .userImg{
        display: flex;
        align-items: center;
        height: 100%;
    }
`