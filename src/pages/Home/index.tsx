import { CountdownContainer, CountdownContent, CountdownHeader, HomeContainer, SubscribeButton } from "./styles";
import rocket from '../../assets/rocket.svg'

export function Home() {
    return (
        <HomeContainer>
            <CountdownContainer>
                <h1>Ready to launch in...</h1>
                <CountdownHeader>
                    <span>Dias</span>
                    <span>Horas</span>
                    <span>Minutos</span>
                    <span>Segundos</span>
                </CountdownHeader>
                <CountdownContent>
                    <span>08</span>
                    <span>:</span>
                    <span>12</span>
                    <span>:</span>
                    <span>44</span>
                    <span>:</span>
                    <span>28</span>
                </CountdownContent>
                <p>Inscreva-se para saber mais sobre o lançamento</p>
                <SubscribeButton>
                    Inscreva-se
                </SubscribeButton>
            </CountdownContainer>

            <img src={rocket} alt="rocket" />
        </HomeContainer>
    )
}