import React, {useEffect} from 'react'
import { Wrapper } from './style'
import Swiper from 'swiper'

export default function SetMeal() {
    useEffect(() => {
        new Swiper('.home_info_banners', {
            loop: true,
            autoplay: {
                delay: 3000
            },
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }, [])
  return (
    <Wrapper>
        <div className="home_info_img">
            <div className="home_info_banners swiper-container">
                <div className="swiper-wrapper">
                    <div className = "swiper-slide">
                        <p>
                            <img width="100%" src="https://tx-free-imgs.acfun.cn/BiDW4b7vBt-UZFZN3-JFRRza-iyyyQ3-ymeMne.png?imageslim&imageView2/1/w/690/h/208/format/webp" alt=""/>
                        </p>
                    </div>
                    <div className="swiper-slide">
                        <p>
                            <img width="100%" src="https://tx-free-imgs.acfun.cn/IB57dFCpTp-VbiEzu-ziu6ni-y6f67f-eABvY3.png?imageslim&imageView2/1/w/690/h/208/format/webp" alt=""/>
                        </p>
                    </div>
                    <div className="swiper-slide">
                        <p>
                            <img width="100%" src="https://tx-free-imgs.acfun.cn/RncVDLIVj0-Frqymy-fQ7Nbq-b63i2y-IFv6N3.png?imageslim&imageView2/1/w/690/h/208/format/webp" alt=""/>
                        </p>
                    </div>
                    <div className="swiper-slide">
                        <p>
                            <img width="100%" src="https://tx-free-imgs.acfun.cn/rYR1WMMqHt-FZnEz2-JnIBNb-FfIzEb-UN3yiq.png?imageslim&imageView2/1/w/690/h/208/format/webp" alt=""/>
                        </p>
                    </div>
                    <div className="swiper-slide">
                        <p>
                            <img width="100%" src="https://tx-free-imgs.acfun.cn/xY5CkrZXoE-EVRV7f-JRRvEb-zI7nUz-vIbqAz.png?imageslim&imageView2/1/w/690/h/208/format/webp" alt=""/>
                        </p>
                    </div>
                </div>
                <div className="swiper-pagination"></div>
            </div>
        </div>
    </Wrapper>
  )
}
