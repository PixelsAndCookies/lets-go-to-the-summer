import { useEffect, useState, useCallback } from 'react'

export const Carousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)

    const slideLeft = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1))
    }
    const memoizedSlideRight = useCallback(() => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1))
    }, [slides])

    useEffect(() => {
        let timeOut = null

        const handleAutoPlay = () => {
            if (autoPlay) {
                memoizedSlideRight()
                timeOut = setTimeout(handleAutoPlay, 2500)
            }
        }

        timeOut = setTimeout(handleAutoPlay, 2500)

        const cleanUp = () => {
            clearTimeout(timeOut)
        }

        return () => {
            cleanUp()
        }
    }, [autoPlay, memoizedSlideRight])

    return (
        <div
            className="carousel"
            onMouseEnter={() => {
                setAutoPlay(false)
            }}
            onMouseLeave={() => {
                setAutoPlay(true)
            }}
        >
            <div className="container">
                {slides.map((picture, index) => (
                    <div className="container__slide" key={picture.id}>
                        <img
                            src={'/' + picture.src}
                            alt=""
                            className={
                                index === currentSlide
                                    ? 'container__slide__img container__slide__img--visible'
                                    : 'container__slide__img container__slide__img--invisible'
                            }
                        />
                        {index === currentSlide && (
                            <img
                                src={'/' + picture.src}
                                alt=""
                                className="container__slide__background"
                            />
                        )}
                    </div>
                ))}
                <button className="container__arrow container__arrow--left" onClick={slideLeft}>
                    &lt; {/* Flèche gauche */}
                </button>
                <button
                    className="container__arrow container__arrow--right"
                    onClick={memoizedSlideRight}
                >
                    &gt; {/* Flèche droite */}
                </button>
                <div className="container__dots">
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={
                                index === currentSlide
                                    ? 'container__dots__dot container__dots__dot--active'
                                    : 'container__dots__dot'
                            }
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
            <div className="miniatures">
                {slides.map((picture, index) => (
                    <div
                        key={picture.id}
                        className={
                            index === currentSlide
                                ? 'miniatures__slide miniatures__slide--active'
                                : 'miniatures__slide'
                        }
                        onClick={() => setCurrentSlide(index)}
                    >
                        <img
                            className={
                                index === currentSlide
                                    ? 'miniatures__slide__img miniatures__slide__img--active'
                                    : 'miniatures__slide__img'
                            }
                            src={'/' + picture.src}
                            alt=""
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
