import React, { lazy, Suspense } from 'react'
import { Redirect } from 'react-router-dom'

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const Home = lazy(() => import('@/pages/home'))
const Radio = lazy(() => import('@/pages/radio'))
const Songs = lazy(() => import('@/pages/songs'))
const Singers = lazy(() => import('@/pages/singer'))
const Mine = lazy(() => import('@/pages/mine'))

export default [
  {
    path: '/',
    exact: true,
    render: () => <Redirect to='/home' />
  },
  {
    path: '/home',
    exact: true,
    component: SuspenseComponent(Home)
  },
  {
    path: '/video',
    exact: true,
    component: SuspenseComponent(Radio)
  },
  {
    path: '/songs',
    exact: true,
    component: SuspenseComponent(Songs)
  },
  {
    path: '/story',
    exact: true,
    component: SuspenseComponent(Singers)
  },
  {
    path: '/mine',
    exact: true,
    component: SuspenseComponent(Mine)
  }
]
