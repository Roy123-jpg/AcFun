import styled from 'styled-components'

export const FootWrapper = styled.div`
    width: 18.75rem ;
    height: 2.5rem;
    background: white;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 999;
    a {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        text-decoration: none;
        &.active {
            color: red;
        }
        i{
            font-size: 1.5rem;
        }
        span {
            font-size: 0.5rem;
        }
    }
`