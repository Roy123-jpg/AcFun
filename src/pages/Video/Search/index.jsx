import React, { useState, useEffect } from 'react'
import { Popup, SearchBar, Avatar, Space } from 'antd-mobile'
import { Warpper } from './style'
import { Link } from 'react-router-dom'
import History from '../History'
import { getHistory } from '@/api/request'


const HistoryIcon = () => {
    const [history, setHistory] = useState([])
    useEffect(() => {
        (async () => {
            let { data: HistoryData } = await getHistory()
            setHistory(HistoryData)
        })()
    }, [])
    console.log(history);
    let count = history[0];
    console.log(count);
    const [visible, setVisible] = useState(false)
    return (
        <>
            <div
                onClick={() => {
                    setVisible(true)
                }}
            >
                <i className="iconfont">&#xe695;
                </i>
            </div>
            <Popup
                visible={visible}
                // showCloseButton
                onMaskClick={() => {
                    setVisible(false)
                  }}
                onClose={() => {
                    setVisible(false)
                }}
                // style={{"--z-index":1}}

                position='right'
            >
                <div
                    style={{ height: '100%', overflowY: 'scroll' }}
                >

                    <History history={count} />
                </div>

            </Popup>
        </>
    )
}

export default function Search() {
    return (
        <Warpper>
            <div className="search_headIcon">
                <Link to='/mine'>
                    <Space block wrap>
                        <Avatar style={{ '--border-radius': '50%', '--size': '1.5rem' }}
                            src="https://imgsa.baidu.com/forum/pic/item/8644ebf81a4c510f5a0e17e46a59252dd52aa502.jpg" />
                    </Space>
                </Link>
            </div>
            <div className="search" >
                <SearchBar placeholder='请输入内容' style={{
                    '--border-radius': '15px',
                }} />
            </div>
            <div className="history">
                <HistoryIcon />
            </div>
        </Warpper>
    )
}
