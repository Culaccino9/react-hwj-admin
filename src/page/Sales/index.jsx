import React, { memo, Suspense } from 'react'
import { renderRoutes } from 'react-router-config'

export default memo(function WJSales(props) {
    const { route } = props
    return (
        <Suspense fallback={<div>loading</div>}>
            {renderRoutes(route.routes)}
        </Suspense>
    )
})
