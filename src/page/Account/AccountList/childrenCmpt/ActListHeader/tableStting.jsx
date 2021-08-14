import React, { useContext } from 'react'

import{
    Checkbox,
    Divider
} from 'antd'
import {CountContext} from '../../index'
export default function WJTableStting() {
    let value = useContext(CountContext)
    const {
        indeterminate,
        onCheckAllChange,
        checkAll,
        plainOptions,
        checkedList,
        onChange
    } = value 
    const CheckboxGroup = Checkbox.Group
    const divStyle = {
      marginTop:"20px",
      padding:"6px 0",
      width:"170px",
      backgroundColor:"#fff",
      boxShadow:"1px 1px 9px 0px #00000012"
    }
    const checkboxStyle = {display:"flex",flexDirection:"column",justifyContent:"space-between",height:"160px"}
    return (
          <div style={divStyle}>
            <div style={{padding:"6px 20px"}}>
              <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                  全选
              </Checkbox>
            </div>
            <Divider style={{margin:"0"}}/>
            <div style={{padding:"6px 20px"}}>
              <CheckboxGroup 
                  options={plainOptions} value={checkedList} onChange={onChange} 
                  style={checkboxStyle}/>
            </div>
          </div>          
    )
}
