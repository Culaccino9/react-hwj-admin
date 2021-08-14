import React, { createContext, memo , useState } from 'react'

import {AccountListDivStyle} from './style'
import WJActListHeader from './childrenCmpt/ActListHeader';
import WJActListTable from './childrenCmpt/ActListTable';
export const CountContext = createContext()

export default memo(function WJAccountList() {
    //设置复选框数据
    const plainOptions = ['用户头像', '账号', '用户组','创建时间','操作'];
    const defaultCheckedList = ['用户头像', '账号', '用户组','操作'];
    const [checkedList, setCheckedList] = useState(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
      };
    
    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    const toTableStting = {
        plainOptions:plainOptions,
        checkedList:checkedList,
        onChange:onChange,
        indeterminate:indeterminate,
        onCheckAllChange:onCheckAllChange,
        checkAll:checkAll
    }
    //完
    return (
        <AccountListDivStyle>
            <CountContext.Provider value={toTableStting}>
                <WJActListHeader/>
                <WJActListTable checkedList={checkedList}/>
            </CountContext.Provider>
        </AccountListDivStyle>
    )
})