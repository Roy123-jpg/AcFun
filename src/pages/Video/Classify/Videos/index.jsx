import React from 'react'
import { Warpper } from './style';

const Videos = ({ video }) => {
    return video.map(item => {
        return (
            <li className='feed-item' key={item.id}>
                <div className="">
                    <img className='feed-item-img' src={item.img} />
                    <div className="feed-item-info">
                        <div className="item-img play-icon"></div>
                        <span className="item-text">{item.goods}</span>
                        <div className="item-img comment-icon"></div>
                        <span className="item-text">{item.comment}</span>
                        {/* <span className="item-text item-time">{item.comment}</span> */}
                    </div>
                    <p className='feed-item-title line-cut2'>
                        {item.title}
                    </p>
                </div>
            </li>
        )
    })
}

export default function Video({ video }) {
    return (
        <Warpper>
            <div className="home-first-feed" >
                <div className="first-home-feed">
                    <Videos video={video} />
                </div>
            </div>
        </Warpper>
    )
}
