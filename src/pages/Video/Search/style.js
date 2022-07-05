import styled from "styled-components";

export const Warpper = styled.div`
    width: 18.75rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .search_headIcon {
        /* align-items: center; */
        justify-content: center;
        width: 2.5rem;
        position: relative;
        left: 0.75rem;
    }
    .search {
        flex: 1;
        height: 1.5rem;
        width: 13rem;
        input {
            height: 1.5rem;
            width: 100%;
            border-radius: 1rem;
            /* justify-content: center; */
        }
    }
    .history {
        width: 2.5rem;
        justify-content: center;
        i {
            align-items: center;
            font-size: 1.25rem;
        }
    }
    
`