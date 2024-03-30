import React, { Component, Suspense, lazy } from 'react'
import { Routes, Route, redirect } from 'react-router-dom'

const Home = lazy(() => import('./Components/Home/Home'))
const SignUp = lazy(() => import('./Components/SignUP/SignUp'))

const AppRoutes = () => {
  return (
    <Suspense fallback=''>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/signup' Component={Home} />
      </Routes>
    </Suspense>
  )
}

export default AppRoutes