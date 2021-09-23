import React, { useState } from 'react'
import { Screen } from '../components/Screen'
import { useInView } from "react-intersection-observer"
import { Header } from '../components/home-page/Header'


export const HomePage = () => {

    const [isMenuToggled, setIsMenuToggled] = useState(false)
    const [ref, inView] = useInView({
        threshold: 0,
    })

    const toggleMenu = (boolean) => {
        setIsMenuToggled(boolean)
    }

    return (
        <section className="home-page-container">
            <Screen isOpen={isMenuToggled} exitScreen={toggleMenu} />
            <div inView={inView} ref={ref}>
                <Header isMenuToggled={isMenuToggled} toggleMenu={toggleMenu} />
            </div>
        </section>
    )
}
