import { CountdownContainer, CountdownContent, CountdownHeader, HomeContainer, SubscribeButton } from "./styles";
import rocket from '../../assets/rocket.svg'
import intervalToDuration from 'date-fns/intervalToDuration'
import format from 'date-fns/format'
import { useEffect, useState } from "react";

export function Home() {
    const [releaseDate] = useState(() => {
        const nextMonth = new Date().getMonth() + 1
        const updatedYear = nextMonth === 0 ? new Date().getFullYear() + 1 : new Date().getFullYear()
        return new Date(updatedYear, nextMonth, 1, 0, 0, 0)
    })
    const [currentDate, setCurrentDate] = useState(new Date())

    let duration = intervalToDuration({
        start: currentDate,
        end: releaseDate
    })

    useEffect(() => {
        setInterval(() => {
            setCurrentDate(new Date())
            duration = intervalToDuration({
                start: currentDate,
                end: releaseDate
            })
        }, 1000)
    }, [currentDate])

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
                    <span>{duration.days !== undefined && duration.days < 10 ? '0' + duration.days : duration.days }</span>
                    <span>:</span>
                    <span>{duration.hours !== undefined && duration.hours < 10 ? '0' + duration.hours : duration.hours }</span>
                    <span>:</span>
                    <span>{duration.minutes !== undefined && duration.minutes < 10 ? '0' + duration.minutes : duration.minutes }</span>
                    <span>:</span>
                    <span>{duration.seconds !== undefined && duration.seconds < 10 ? '0' + duration.seconds : duration.seconds }</span>
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