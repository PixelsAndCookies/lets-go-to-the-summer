import { Link } from 'react-router-dom'
import cards from '../../data/cards-data.json'

export const Cards = () => {
    return (
        <section className="cards">
            {cards.map((holiday) => {
                return (
                    <article className={`card card--${holiday.id}`} key={holiday.id}>
                        <Link to={`/holidays/${holiday.id}`} title={holiday.info}>
                            <img
                                className={`card__img card--${holiday.id}__img`}
                                src={holiday.cover}
                                alt="Photo de couverture des vacances"
                            />
                            <p className="card__date">{holiday.title}</p>
                        </Link>
                    </article>
                )
            })}
        </section>
    )
}
