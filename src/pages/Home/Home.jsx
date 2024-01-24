// Import React
import { useRef } from 'react'
// Import JS
import { useObserver } from '../../utils/observer'
// Import Composants
import { GeometricShapes } from '../../components/GeometricShapes/GeometricShapes'
import { BreakingNews } from '../../components/BreakingNews/BreakingNews'
import { Counter } from '../../components/Counter/Counter'
import { Description } from '../../components/Description/Description'
import { Cards } from '../../components/Cards/Cards'

export const Home = () => {
    // Références aux éléments du DOM pour observer leur visibilité
    const descriptionElementRef = useRef(null)
    const counterElementRef = useRef(null)
    const cardsElementRef = useRef(null)
    const infoElementRef = useRef(null)

    // Utilisation de useObserver pour observer la visibilité des éléments
    const isDescriptionVisible = useObserver(descriptionElementRef, 0)
    const isCounterVisible = useObserver(counterElementRef, 1)
    const isCardsVisible = useObserver(cardsElementRef, 2)
    const isInfoVisible = useObserver(infoElementRef, 3)

    return (
        <>
            <GeometricShapes />
            <BreakingNews />
            <main className="home-main">
                <div className="main-container">
                    <p>
                        Souvenirs d&apos;été <br />
                        <span>Les aventures fun-tastiques en famille</span>
                    </p>
                    <div
                        ref={descriptionElementRef}
                        className={`descriptionDiv ${isDescriptionVisible ? 'visible' : ''}`}
                    >
                        <Description content="presentation" />
                    </div>
                    <div
                        ref={counterElementRef}
                        className={`counterDiv ${isCounterVisible ? 'visible' : ''}`}
                    >
                        <Counter />
                    </div>
                    <div
                        ref={cardsElementRef}
                        className={`cardsDiv ${isCardsVisible ? 'visible' : ''}`}
                    >
                        <Cards />
                    </div>
                    <div
                        ref={infoElementRef}
                        className={`infoDiv ${isInfoVisible ? 'visible' : ''}`}
                    >
                        <Description content="informations" />
                    </div>
                </div>
            </main>
        </>
    )
}
