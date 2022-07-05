import React from 'react'
import { HistoryWarpper, AllWrapper } from './style'
import { Tabs } from 'antd-mobile'

const All = ({ history }) => {
    let historyToday = history.slice(0, 1);
    let historyEarlier = history.slice(1, 6);
    return (
        <AllWrapper>
            <div className="history_today">
                <div className="history_today_title">
                    <p>今天</p>
                </div>
                {
                    historyToday.map(item => {
                        return (
                            <div className="history_today_content" key={item.id}>
                                <div className="history_today_video">
                                    <img src={item.img} />
                                    <div className="history_today_info">
                                        <p className='history_today_title'>{item.title}</p>
                                        <div className="history_today_time">
                                            <div className="item-img iconfont">&#xe618;
                                                <span className="item-text">{item.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="history_earlier">
                <div className="history_earlier_title">
                    <p>更早</p>
                </div>
                {
                    historyEarlier.map(item => {
                        return (
                            <div className="history_earlier_content" key={item.id}>
                                <div className="history_earlier_video">
                                    <img src={item.img} />
                                    <div className="history_earlier_info">
                                        <p className='history_earlier_title'>{item.title}</p>
                                        <div className="history_earlier_time">
                                            <div className="item-img iconfont">&#xe618;
                                                <span className="item-text">{item.time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="bottom">已经到底了~</div>
        </AllWrapper>
    )
}
export default function History({ history }) {
    return (
        <HistoryWarpper>
            <Tabs>            
                <Tabs.Tab title='全部' key='all'>
                    <All history={history} />
                </Tabs.Tab>
                <Tabs.Tab title='视频' key='video'>
                    视频
                </Tabs.Tab>
                <Tabs.Tab title='文章' key='text'>
                    文章
                </Tabs.Tab>
            </Tabs>
        </HistoryWarpper>
    )
}