import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100vh;
    
    img {
        width: 37.9375rem;
        height: 27.1875rem;
        z-index: 1;
    }
    
    `

export const CountdownContainer = styled.div`
    z-index: 1;
    width: 30.875rem;
    height: 10.75rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    h1 {
        text-transform: uppercase;
        color: ${props => props.theme["blue-500"]};
        font-weight: bold;
        font-size: 2.25rem;
        letter-spacing: 4px;
        margin-bottom: 0.5rem;
    }

    p {
        font-size: 0.875rem;
        font-weight: 400;
        color: ${props => props.theme["gray-300"]};
        margin-bottom: 1.5rem;
    }
    
    `

export const CountdownHeader = styled.div`
    color: ${props => props.theme["gray-200"]};
    font-size: 0.875rem;
    font-weight: 300;
    width: 100%;
    display: flex;
    justify-content: space-around;

    span:first-child {
        padding-left: 0.5rem
    }

    span:nth-child(2) {
        padding-left: 2rem;
    }

    span:nth-child(3) {
        padding-left: 2rem;
    }
`

export const CountdownContent = styled.div`
    width: 29.625rem;
    font-size: 4.5rem;
    font-weight: 400;
    color: ${props => props.theme["gray-800"]};
    display: flex;

    span {
        padding: 0 0.5rem;
    }
`

export const SubscribeButton = styled.button`
    width: 10rem;
    height: 2.87rem;
    background-color: ${props => props.theme["blue-500"]};
    color: ${props => props.theme.white};
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: filter 0.2s;
    font-size: 1rem;
    font-weight: 400;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        filter: brightness(0.95)
    }
`