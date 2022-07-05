import styled from 'styled-components'

export const Wrapper = styled.div`
/*  */
.home_info_banners{
    position: relative;
    .swiper-pagination{
        .swiper-pagination-bullet{
            border-radius: 0.25rem;
            height: 0.25rem;
            width: 0.25rem;
        }
        .swiper-pagination-bullet-active {
            border-radius: 0.25rem;
            height: 0.25rem;
            width: 0.5rem;
            background: #007aff;
        }
    }
}    
.swiper-slide{
    display: flex;
    justify-content: center;
    align-items: center;
    img {
    width: 17.25rem;
    height: 5.45rem;
    border-radius: 0.15rem;
}
}

`