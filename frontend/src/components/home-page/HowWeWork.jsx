// import cardImg1 from '../assets/images/design.png'
import cardImg1 from '../../assets/images/design.png'
import cardImg2 from '../../assets/images/fitallplatforms.png'
import cardImg3 from '../../assets/images/teamwork.png'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import { Link } from 'react-router-dom'

export const HowWeWork = ({ windowWidth }) => {

    const [cardsContainer, inView] = useInView({
        threshold: 0,
    })

    const [isCardHover, setIsCardHover] = useState(false)
    let card1 = useRef()
    let card2 = useRef()
    let card3 = useRef()
    const cards = [card1, card2, card3]
    let cardsInterval;
    let cardsStartTimeOut;



    let i = 0;
    const cardAnimation = useCallback(() => {
        cardsStartTimeOut = setTimeout(() => {
            cards.forEach(card => {
                card.current.classList.remove('active')
            })
            i = (i === 3) ? 0 : i
            cards[i].current.classList.add('active')
            i++

            cardsInterval = setTimeout(cardAnimation, 3000)
        }, 1500)
    })


    useEffect(() => {
        if (!isCardHover && inView && windowWidth >= 1130) {
            cardAnimation()
        } else {
            clearTimeout(cardsInterval)
            clearTimeout(cardsStartTimeOut)
        }

        if (windowWidth < 1130) {
            clearTimeout(cardsInterval)
            clearTimeout(cardsStartTimeOut)
        }

        return (() => {
            clearTimeout(cardsInterval)
            clearTimeout(cardsStartTimeOut)
        })
    }, [isCardHover, cardAnimation, inView, windowWidth, cardsInterval, cardsStartTimeOut])



    const onHover = () => {
        if (windowWidth < 1130) return
        setIsCardHover(true)
        cards.forEach(card => {
            card.current.classList.remove('active')
        })
    }
    const onStopHover = () => {
        setIsCardHover(false)
    }

    return (

        <section id="how-we-work" className="how-we-work">
            <div className="how-we-work-txt-container">
                <h1 className="how-we-work-top-txt">Create your own website</h1>
                <h3 className="how-we-work-sub-txt"> Use our awesome tools to make your dream come true</h3>
            </div>

            <div inView={inView} ref={cardsContainer} className="cards-container">
                <div ref={card1} onMouseOver={onHover} onMouseLeave={onStopHover} className={`${windowWidth < 1130 ? 'active' : ''} ${inView ? 'opacity-animation' : ''} home-page-card`}>
                    <h3 className="card-num">01</h3>
                    <h2 className="card-title">Design</h2>
                    <p className="card-description">Build your website using our designers best and most popular templates</p>
                    <div className="card-img-container"><img src={cardImg1} alt="" /></div>
                </div>
                <div ref={card2} onMouseOver={onHover} onMouseLeave={onStopHover} className={`${windowWidth < 1130 ? 'active' : ''}  ${inView ? 'opacity-animation' : ''} home-page-card`}>
                    <h3 className="card-num">02</h3>
                    <h2 className="card-title">Responsive</h2>
                    <p className="card-description">Build your website using our designers best and most popular templates</p>
                    <div><img src={cardImg2} alt="" /></div>
                </div>
                <div ref={card3} onMouseOver={onHover} onMouseLeave={onStopHover} className={` ${windowWidth < 1130 ? 'active' : ''} ${inView ? 'opacity-animation' : ''} home-page-card`}>
                    <h3 className="card-num">03</h3>
                    <h2 className="card-title">Team Work</h2>
                    <p className="card-description">Build your website using our designers best and most popular templates</p>
                    <div><img src={cardImg3} alt="" /></div>
                </div>
            </div>

            <Link to="/template"><div className="try-it-out-btn">Try it out!</div></Link>

        </section>

    )
}