import React, { useState, lazy } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Video from '@/pages/Video'
const Find = lazy(() => import('@/pages/Find'))
const Dynamic = lazy(() => import('@/pages/Dynamic'))
const Mine = lazy(() => import('@/pages/Mine'))


export default function RoutesConfig() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Video />}></Route>
                <Route path='/video' element={<Video />}></Route>
                <Route path='/find' element={<Find />}></Route>
                <Route path='/dynamic' element={<Dynamic />}></Route>
                <Route path='/mine' element={<Mine />}></Route>
            </Routes>
        </>
    )
}
