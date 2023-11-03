import cards from '../../data/cards-data.json'

export const Cards = () => {
    return (
        <section>
            {cards.map((card) => {
                return (
                    <div className="cards-container" key={card.id}>
                        <div className="card">
                            <img src={card.cover} alt="" />
                            <p>{card.title}</p>
                        </div>
                    </div>
                )
            })}
        </section>
    )
}
