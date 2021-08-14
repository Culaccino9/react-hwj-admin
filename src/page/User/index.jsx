import React, { memo, Suspense } from 'react'
import {renderRoutes} from 'react-router-config'

import WJLoading from '@/components/WJLoading'
export default memo(function WJUser(props) {
    const {route} = props
    return (
        <div>
            <Suspense fallback={<WJLoading/>}>
                {renderRoutes(route.routes)}
            </Suspense>
        </div>
    )
})
