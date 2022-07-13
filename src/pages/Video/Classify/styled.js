import styled from "styled-components";

export const TabWarpper = styled.div`
    .tabs {
        top: 0;
        position: relative;
        position: -webkit-sticky;
        .adm-popup-close-icon {
                
        }
        .adm-tabs-header {
            width: 17.0rem;
            background-color: white;
            position: sticky;
            top:0;
        }
        .allChannels{
            position: absolute; 
            top: 0.5rem;
            left: 17.5rem;
        }
        .adm-tabs-tab-line {

        }
        .adm-tabs-tab-active{
            font-size: 1rem;
            color: #333;
            position: relative;
            font-weight: 700
        }
        .adm-tabs-tab-active:after{
            display: block;
            content: "";
            position: absolute;
            bottom: 0.6rem;
            left: 50%;
            transform: translate(-50%,30%);
            width: 100%;
            height: .25rem;
            background-image: linear-gradient(200deg,rgba(255,131,149,0),#fd4c5c);
            border-radius: 6px;
            z-index: -1;
        }
        .adm-tabs {
            --active-line-color: none;
            --active-title-color: none;
        }
    }
` 