import React, { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useInView } from "react-intersection-observer";


export const HomePageSlider = ({ windowWidth }) => {
    const [sliderContainer, inView] = useInView({
        threshold: 0,
    })


    const [currentSlide, setCurrentSlide] = useState(0);
    const [pause, setPause] = useState(false)


    const timer = React.useRef()

    const [sliderRef, slider] = useKeenSlider({
        initial: 1,
        slideChanged(s) {
            setCurrentSlide(s.details().relativeSlide);
        },
        slidesPerView: (windowWidth < 768 ? 1 : 2),
        mode: "free-snap",
        spacing: 15,
        centered: true,
        loop: true,
        duration: 2000,
        dragStart: () => {
            setPause(true)
        },
        dragEnd: () => {
            setPause(false)
        },
    });

    useEffect(() => {
        sliderRef.current.addEventListener("mouseover", () => {
            setPause(true)
        })

        sliderRef.current.addEventListener("mouseout", () => {
            setPause(false)
        })


    }, [sliderRef, windowWidth])

    useEffect(() => {
        timer.current = setInterval(() => {
            if (!pause && slider) {
                slider.next()
            }
        }, 3000)

        return () => {
            clearInterval(timer.current)
        }
    }, [pause, slider])

    return (
        <>
            <div ref={sliderContainer} className={`${inView ? 'opacity-animation' : ''} navigation-wrapper`}>
                <div ref={sliderRef} className="keen-slider">
                    <div className="keen-slider__slide number-slide1"><img width="100%" style={{ objectFit: 'contain' }} src="https://i.ibb.co/NCrnCTQ/Rettro.jpg" alt="" /></div>
                    <div className="keen-slider__slide number-slide2"><img width="100%" style={{ objectFit: 'contain' }} src="https://i.ibb.co/30PtWLB/beauty-carosel.jpg" alt="" /></div>
                    <div className="keen-slider__slide number-slide3">3</div>
                    <div className="keen-slider__slide number-slide4">4</div>
                    <div className="keen-slider__slide number-slide5">5</div>
                    <div className="keen-slider__slide number-slide6">6</div>
                </div>
                {slider && (
                    <>
                        <ArrowLeft
                            onClick={(e) => e.stopPropagation() || slider.prev()}
                            disabled={currentSlide === 0}
                        />
                        <ArrowRight
                            onClick={(e) => e.stopPropagation() || slider.next()}
                            disabled={currentSlide === slider.details().size - 1}
                        />
                    </>
                )}
            </div>
            {slider && (
                <div className="dots">
                    {[...Array(slider.details().size).keys()].map((idx) => {
                        return (
                            <button
                                key={idx}
                                onClick={() => {
                                    slider.moveToSlideRelative(idx);
                                }}
                                className={"dot" + (currentSlide === idx ? " active" : "")}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
};

function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--left" + disabeld}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
    );
}

function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--right" + disabeld}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
    );
}
