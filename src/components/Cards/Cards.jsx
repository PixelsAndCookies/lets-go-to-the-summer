import { Link } from 'react-router-dom'
import cards from '../../data/cards-data.json'

export const Cards = () => {
    return (
        <section className="cards-container">
            {cards.map((holiday) => {
                const cardClass = `card card--${holiday.id}`
                const imageClass = `card__img card__img--${holiday.id}`
                return (
                    <article className={cardClass} key={holiday.id}>
                        <Link to={`/holidays/${holiday.id}`}>
                            <img className={imageClass} src={holiday.cover} alt="Photo de couverture des vacances" />
                            <p className="card__date">{holiday.title}</p>
                        </Link>
                    </article>
                )
            })}
        </section>
    )
}
