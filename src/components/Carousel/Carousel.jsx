import { useState } from 'react'
import arrow from '../../assets/icons/carousel-arrow.png'

export const Carousel = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const length = slides.length
    const previousSlide = () => {
        setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1)
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1)
    }

    return (
        <div className="carousel">
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
            <button className="carousel__arrow carousel__arrow--left" onClick={previousSlide}>
                <img src={arrow} alt="Flèche gauche" />
            </button>
            <button className="carousel__arrow carousel__arrow--right" onClick={nextSlide}>
                <img src={arrow} alt="Flèche droite" />
            </button>
            <span className="carousel__counter">
                {currentSlide + 1}/{length}
            </span>
        </div>
    )
}
