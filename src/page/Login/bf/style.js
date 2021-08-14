import styled from 'styled-components'

export const LoginDivStyle = styled.div`
        height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-image: linear-gradient(to bottom right,#545465,#64539a);
        .shell{
            width: 640px;
            height: 320px;
            display: flex;
        }
        .box-left{
            background-color: #3e383859;
            height: 280px;
            top: 20px;
            position: relative;
            width: 50%;
        }
        .box-left h2{
            font: 900 50px '';
            margin: 50px 40px 40px;
        }
        .box-left span{
            display: block;
            color: #999;
            font-style: 14px;
            margin: 40px;
        }
        .box-right{
            background-color: #474a59;
            box-shadow: 0 0 40px 16px rgba(0,0,0,.2);
            color: #f1f1f2;
            width: 50%;
        }
        .form{
            margin: 40px;
            position: absolute;
        }
        label{
            color: #c2c2c5;
            display: block;
            font-size: 14px;
            height: 16px;
            margin-top: 20px;
            margin-bottom: 5px;
            position: relative;
        }
        input{
            background: transparent;
            border: 0;
            color: #f2f2f2;
            font-style: 20px;
            height: 30px;
            line-height: 30px;
            width: 100%;
            outline: none !important;
        }
        label::before{
            content: '';
            display: block;
            position: absolute;
            top: 52px;
            width: 100%;
            height: 3px;
            background-image: linear-gradient(to right,#44ffff,#b888ff);
        }
        #submit{
            color: #fff;
            margin-top: 40px;
            width: 100px;
            height: 35px;
            background-color: rgba(255,255,255,.1);
            border-radius: 20px;
            float: right;
            transition: .3s;
            cursor: pointer;
        }
        #submit:hover{
            letter-spacing: 2px;
            color: #000;
            background-color: #fff;
        }
`