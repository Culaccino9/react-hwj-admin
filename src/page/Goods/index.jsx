import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'

import WJLoading from '@/components/WJLoading'
export default memo(function WJGoods(props) {
    const { route } = props
    return (
        <Suspense fallback={<WJLoading />}>
            {renderRoutes(route.routes)}
        </Suspense>
    )
})
