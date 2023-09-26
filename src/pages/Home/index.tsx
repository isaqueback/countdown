import { CountdownContainer, CountdownContent, CountdownHeader, HomeContainer } from "./styles";
import rocket from '../../assets/rocket.svg'
import intervalToDuration from 'date-fns/intervalToDuration'
import differenceInSeconds from 'date-fns/differenceInSeconds'

import { useEffect, useState } from "react";
import { FormModal } from "./components/Modal";

export function Home() {
    const [currentDate, setCurrentDate] = useState(new Date())
    const [isRelease, setIsRelease] = useState(false)
    const [releaseDate] = useState(() => {
        return new Date((new Date().getTime() + 30000))
    })

    let duration = intervalToDuration({
        start: currentDate,
        end: releaseDate
    })
    let elapsedTime = differenceInSeconds(releaseDate, currentDate)
    let countdownInterval: number
    useEffect(() => {
        if (!isRelease) {
            countdownInterval = setInterval(() => {
                setCurrentDate(new Date())
                duration = intervalToDuration({
                    start: currentDate,
                    end: releaseDate
                })

                elapsedTime = differenceInSeconds(releaseDate, currentDate)
                elapsedTime <= 0 ? setIsRelease(true) : ''
            }, 1000)
        }

        return () => {
            clearInterval(countdownInterval)
        }
    }, [elapsedTime])

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
                    <span>{duration.days && duration.days < 10 ? '0' + duration.days : duration.days}</span>
                    <span>:</span>
                    <span>{duration.hours && duration.hours < 10 ? '0' + duration.hours : duration.hours}</span>
                    <span>:</span>
                    <span>{duration.minutes && duration.minutes < 10 ? '0' + duration.minutes : duration.minutes}</span>
                    <span>:</span>
                    <span>{duration.seconds && duration.seconds < 10 ? '0' + duration.seconds : duration.seconds}</span>
                </CountdownContent>
                <p>Inscreva-se para saber mais sobre o lançamento</p>
                {/* <SubscribeButton isButtonActive={isRelease}>
                    Inscreva-se
                </SubscribeButton> */}
                <FormModal isRelease={isRelease}/>
            </CountdownContainer>

            <img src={rocket} alt="rocket" />
        </HomeContainer>
    )
}