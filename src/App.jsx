import React, { memo,Suspense } from 'react'
import { HashRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'

import store from './store'
import router from './router'

import WJLoading from './components/WJLoading'
export default memo(function APP() {
  return (
    <HashRouter>
      <Provider store={store}>
      <Suspense fallback={<WJLoading/>}>
        {renderRoutes(router)}
      </Suspense>
      </Provider>
    </HashRouter>
  )
})
