import styled from "styled-components";

export const HistoryWarpper = styled.div`
    overflow: scroll;
    width: 18.75rem;
`


export const AllWrapper = styled.div`
    .history_today {
        width: max;
        display: flex;
        flex-direction: column;
        padding-bottom:0.5rem ;
        border-bottom: 0.5px solid #666666;
        .history_today_title {
            p {
                font-size: 0.8rem;
                font-weight: 600;
                float: left;
            }
        }
        .history_today_content {
            margin-bottom: 0.2rem;
            .history_today_video {
                width: 18.75rem;
                display: flex;
                flex-direction: row;
                img {
                    width: 5rem;
                    height: 3rem;
                    border-radius: 0.25rem;
                }
                .history_today_info {
                    text-align: left;
                    margin-left: 0.2rem;
                    font-size: .7rem;
                    color: #333;
                    line-height: .95rem;
                    .history_today_time {
                        margin-top:0.2rem;
                        span {
                        font-size: 12px;
                        }
                    } 
                }
            }
        }
    }
    .history_earlier {
        margin: 0.5rem 0  1rem 0;
        width: 18.75rem;
        display: flex;
        flex-direction: column;
        .history_earlier_title {
            p {
                font-size: 0.8rem;
                font-weight: 600;
                float: left;
            }
        }
        .history_earlier_content {
            margin-bottom: 0.2rem;
            .history_earlier_video {
                display: flex;
                flex-direction: row;
                img {
                    width: 5rem;
                    height: 3rem;
                    border-radius: 0.25rem;
                }
                .history_earlier_info {
                    text-align: left;
                    width: 12rem;
                    margin-left: 0.2rem;
                    font-size: .7rem;
                    color: #333;
                    line-height: .95rem;
                    .history_earlier_time {
                        margin-top:0.2rem;
                        span {
                        font-size: 12px;
                        }
                    } 
                }
            }
        }
    }
`