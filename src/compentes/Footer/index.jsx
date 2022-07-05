import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FootWrapper } from './style'
import classnames from 'classnames'
import { isPathPartlyExisted } from '@/utils'
import '@/assets/font/iconfont.css'

export default function Footer() {
  const { pathname } = useLocation()
    // if (pathname.indexOf(''))
    // isPathPartlyExisted(pathname);
    // console.log(pathname, isPathPartlyExisted(pathname));
    if (isPathPartlyExisted(pathname)) return
    // 公共函数的 在一个数组里匹配每一项部分匹配 pathname 就可以了
    // if (['/cities', '/homedetail'].indexOf(pathname) != -1) return
  return (
    <FootWrapper>
        <Link to="/video" className={classnames({active:pathname == '/video' || pathname == '/' })}>
                <i className="iconfont">&#xe62c;</i>
                <span>视频</span>
        </Link>
        <Link to="/find" className={classnames({active:pathname == '/find' || pathname == '/' })}>
                <i className="iconfont">&#xe662;</i>
                <span>发现</span>
        </Link>
        <Link to="/dynamic" className={classnames({active:pathname == '/dynamic' || pathname == '/' })}>
                <i className="iconfont">&#xe66e;</i>
                <span>动态</span>
        </Link>
        <Link to="/mine" className={classnames({active:pathname == '/mine' || pathname == '/' })}>
                <i className="iconfont">&#xe635;</i>
                <span>我的</span>
        </Link>
    </FootWrapper>
  )
}
