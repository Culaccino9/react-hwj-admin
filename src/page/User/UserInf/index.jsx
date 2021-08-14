import React, { memo } from 'react'

import WJLeftUserInfo from './childrenCmpt/LeftUserInfo'
import WJRightWork from './childrenCmpt/RightWrok'
export default memo(function WJUserInf() {
    return (
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <WJLeftUserInfo/>
            <WJRightWork/>
        </div>
    )
})
