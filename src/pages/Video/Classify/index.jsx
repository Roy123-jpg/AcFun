import React, { useEffect, useState } from 'react'
import Banners from './Banners'
import { getBanners } from '@/api/request'
import { getHistory } from '@/api/request'
import { Popup, Tabs, Button } from 'antd-mobile'
import { getVideo } from '@/api/request'
import Video from './Videos'
import { TabWarpper } from './styled'
import AllChannels from '../AllChannels'
// import loading from '../../../compentes/common/loading-v2'
import Scroll from '../../../compentes/common/Scroll'

export default function Classify() {
    const [visible1, setVisible1] = useState(false)
    const [history, setHistory] = useState([])
    const [banners, setBanners] = useState([])
    const [video, setvideo] = useState([])
    useEffect(() => {
        (async () => {
            let { data: HistoryData } = await getHistory()
            let { data: bannerData } = await getBanners()
            let { data: VideoData } = await getVideo()
            setBanners(bannerData)
            setvideo(VideoData)
            setHistory(HistoryData)
        })()
    }, [])
    // console.log(video);
    const tabItems = [
        { key: 'fruits', title: '水果' },
        { key: 'vegetables', title: '蔬菜' },
        { key: 'animals', title: '动物' },
    ]
    return (
        <TabWarpper>
            <div className="tabs">
                {/* <div className="allChannels" onClick={() => {
                    setVisible1(true)
                }}> */}
                    {/* <i className='iconfont allChannels' onClick={() => {
                    setVisible1(true)
                }}>&#xe600;</i> */}
                {/* </div> */}
                <Tabs defaultActiveKey='2'>
                    <Tabs.Tab title='直播' key='1'>
                        直播
                    </Tabs.Tab>
                    <Tabs.Tab title='精选' key='2'>
                        <Scroll>
                            <Banners banners={banners} />
                            <Video video={video} />
                        </Scroll>
                    </Tabs.Tab>
                    <Tabs.Tab title='热门' key='3'>
                        热门
                    </Tabs.Tab>
                    <Tabs.Tab title='放声唱' key='4'>
                        放声唱
                    </Tabs.Tab>
                    <Tabs.Tab title='番剧' key='5'>
                        番剧
                    </Tabs.Tab>
                    <Tabs.Tab title='动画' key='6'>
                        动画
                    </Tabs.Tab>
                    <Tabs.Tab title='娱乐' key='7'>
                        娱乐
                    </Tabs.Tab>
                    <Tabs.Tab title='游戏' key='8'>
                        游戏
                    </Tabs.Tab>
                    <Tabs.Tab title='生活' key='9'>
                        生活
                    </Tabs.Tab>
                </Tabs>
                <i className='iconfont allChannels' onClick={() => {
                    setVisible1(true)
                }}>&#xe600;</i>
                <Popup
                    visible={visible1}
                    showCloseButton
                    onClose={() => {
                        setVisible1(false)
                    }}
                    onMaskClick={() => {
                        setVisible1(false)
                    }}
                    bodyStyle={{ height: '100%' }}
                >
                    <AllChannels />
                </Popup>
            </div>
        </TabWarpper>
    )
}
