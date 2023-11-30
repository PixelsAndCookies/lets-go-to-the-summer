import days from '../../data/days.json'

export const Day = () => {
    return (
        <section>
            {days.map((day) => {
                const articleClassName = `articleDay articleDay--${day.id}`
                return (
                    <article key={day.id} className={articleClassName}>
                        <h2>{day.title}</h2>
                        <div>
                            {Object.keys(day.texts).map((textKey) => {
                                const textsContent = day.texts[textKey]
                                return (
                                    <p key={textKey}>
                                        {typeof textsContent === 'string' ? textsContent : ''}
                                    </p>
                                )
                            })}
                        </div>
                        <img src="" alt="" />
                        <>{day.quotes !== null && <p>{day.quotes}</p>}</>
                    </article>
                )
            })}
        </section>
    )
}
