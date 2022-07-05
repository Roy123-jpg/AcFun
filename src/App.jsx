import { useState,Suspense } from 'react'
import './App.css'
// import Header from '@/components/Header'
import Footer from '@/compentes/Footer'
import RoutesConfig from '@/routes'

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Suspense fallback={<div>Loading</div>}>
        <RoutesConfig></RoutesConfig>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
