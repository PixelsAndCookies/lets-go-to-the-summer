import days from '../../data/days.json'

export const Day = () => {    
    return (
        <section>
            {days.map((day) => {
                const articleClass = `articleDay articleDay--${day.id}`
                return (
                    <article key={day.id} className={articleClass}>
                        <h2>{day.title}</h2>
                        <p></p>
                        <img src="" alt="" />
                    </article>
                )
            })}
        </section>
    )
}
