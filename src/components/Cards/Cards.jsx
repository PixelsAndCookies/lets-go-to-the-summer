import cards from '../../data/cards-data.json'

export const Cards = () => {
    return (
        <section className="cards-container">
            {cards.map((holiday) => {
                const imageClass = `card__img card__img--${holiday.id}`
                return (
                    <article className="card" key={holiday.id}>
                        <img className={imageClass} src={holiday.cover} alt="" />
                        <p className='card__date'>{holiday.title}</p>
                    </article>
                )
            })}
        </section>
    )
}
