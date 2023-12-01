import days from '../../data/days.json'

export const Day = () => {
    return (
        <>
            {days.map((day) => {
                return (
                    <article key={day.id} className={`dayCard dayCard--${day.id}`}>
                        <h2>{day.title}</h2>
                        {Object.keys(day.texts).map((index) => {
                            return (
                                <p key={index} className="text">
                                    {typeof day.texts[index] === 'string' ? day.texts[index] : ''}
                                </p>
                            )
                        })}
                        {/*{day.contents.map((content) => {
                            <p key={content.id}>{content.text}</p>
                        })}*/}
                        {day.pictures.map((picture) => (
                            <img
                                key={picture.id}
                                className={`dayCard__photo dayCard--${day.id}__photo dayCard--${day.id}__photo--${picture.id}`}
                                src={`/${picture.src}`}
                                alt={picture.alt}
                            />
                        ))}
                        <>{day.quotes !== null && <q className="quotes">{day.quotes}</q>}</>
                    </article>
                )
            })}
        </>
    )
}
