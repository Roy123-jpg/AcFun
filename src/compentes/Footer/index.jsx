import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FootWrapper } from './style'
import classnames from 'classnames'
import { isPathPartlyExisted } from '@/utils'
import '@/assets/font/iconfont.css'

export default function Footer() {
  const { pathname } = useLocation()
    if (isPathPartlyExisted(pathname)) return
  return (
    <FootWrapper>
        <Link to="/video" className={classnames({active:pathname == '/video' || pathname == '/' })}>
                <i className="iconfont">&#xe604;</i>
                <span>视频</span>
        </Link>
        <Link to="/find" className={classnames({active:pathname == '/find' || pathname == '/' })}>
                <i className="iconfont">&#xe603;</i>    
                <span>发现</span>
        </Link>
        <Link to="/dynamic" className={classnames({active:pathname == '/dynamic' || pathname == '/' })}>
                <i className="iconfont">&#xe605;</i>
                <span>动态</span>
        </Link>
        <Link to="/mine" className={classnames({active:pathname == '/mine' || pathname == '/' })}>
                <i className="iconfont">&#xe602;</i>
                <span>我的</span>
        </Link>
    </FootWrapper>
  )
}
