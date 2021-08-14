import React, { memo } from 'react'


import WJOrderSearch from './components/Search'
import WJOrderTable from './components/Table'
export default memo(function WJOrder() {
    return (
        <div >
            <WJOrderSearch/>
            <WJOrderTable />
        </div>
    )
})
