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
            {slides.map((picture, index) => {
                return (
                    <img
                        src={'/' + picture.src}
                        alt=""
                        key={picture.id}
                        className={
                            index === currentSlide ? 'carousel__visible' : 'carousel__invisible'
                        }
                    />
                )
            })}
            <button className="btn carousel__arrow carousel__arrow--left" onClick={slideLeft}>
                &lt; {/* Flèche gauche */}
            </button>
            <button
                className="btn carousel__arrow carousel__arrow--right"
                onClick={memoizedSlideRight}
            >
                &gt; {/* Flèche droite */}
            </button>
            <div className="carousel__dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={
                            index === currentSlide
                                ? 'carousel__dots__dot carousel__dots__dot--active'
                                : 'carousel__dots__dot'
                        }
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
}
