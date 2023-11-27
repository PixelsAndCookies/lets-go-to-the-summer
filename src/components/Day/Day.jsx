import days from '../../data/days.json'

export const Day = () => {
    return (
        <section>
            {days.map((day) => {
                return (
                    <article key={day.id}>
                        <h2>{day.title}</h2>
                        <p></p>
                        <img src="" alt="" />
                    </article>
                )
            })}
        </section>
    )
}
