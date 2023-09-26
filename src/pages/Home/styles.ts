import styled from "styled-components";

export const HomeContainer = styled.div`
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    img {
        width: 37.9375rem;
        z-index: 1;
    }

    @media (max-width: 1280px) {
        img {
            width: 25rem;
        }
    }

    @media (max-width: 1024px) {
        flex-direction: column;
    }

    @media (max-width: 480px) {
        img {
            width: 20rem;
        }
    }

`

export const CountdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    h1 {
        text-transform: uppercase;
        color: ${props => props.theme["blue-500"]};
        font-weight: bold;
        font-size: 2.25rem;
        letter-spacing: 4px;
    }

    & > div {
        display: flex;
        gap: 30px;

        div {
            display: flex;
            flex-direction: column;

            span:first-child {
                color: ${props => props.theme["gray-200"]};
                font-size: 0.875rem;
                font-weight: 300;
                margin: 0 auto;
            }

            span:last-child {
                font-size: 4.5rem;
                font-weight: 400;
                color: ${props => props.theme["gray-800"]};
            }
        }
    }

    p {
        font-size: 0.875rem;
        font-weight: 400;
        color: ${props => props.theme["gray-300"]};
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 1.75rem;
        }

        & > div {
            div {
                span:first-child {
                    font-size: 0.75rem
                }

                span:last-child {
                    font-size: 3.5rem;
                }
            }
        }

        p {
            font-size: 0.8rem;
        }
    }
`

interface SubscribeButtonProps {
    isButtonActive: boolean
}

export const SubscribeButton = styled.button<SubscribeButtonProps>`
    width: 10rem;
    height: 2.87rem;
    background-color: ${props => props.theme["blue-500"]};
    color: ${props => props.theme.white};
    cursor:  ${props => props.isButtonActive ? 'pointer' : 'not-allowed'} !important;;
    transition: filter 0.2s;
    font-size: 1rem;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: none;
    padding: 1rem;
    filter: grayscale(${props => props.isButtonActive ? 0 : 1});

    &:hover {
        ${props => props.isButtonActive ? 'filter: brightness(0.95)' : ''}
    }

    @media (max-width: 480px) {
        font-size: 0.75rem;
        padding: 0.75rem;
        width: 8rem;
    }
`