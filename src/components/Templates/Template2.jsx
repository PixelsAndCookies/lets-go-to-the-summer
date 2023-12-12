export const Template2 = ({ day }) => {
    return (
        <section key={day.id} className={day.id}>
            <div className={day.id+"__containerTxt"}>
                {day.contents.map((content) => (
                        <p key={content.id}
                            className={day.id+"__containerTxt__text "+day.id+"__containerTxt__text--"+content.id}>
                            {content.text}
                        </p>
                ))}
            </div>
            <div className={day.id+"__containerImg"}>
                {day.pictures.map((picture) => (
                    <figure key={picture.id}
                        className={day.id+"__containerImg--"+picture.id}>
                    <img
                        src={`/${picture.src}`}
                        alt={picture.alt}
                    />
                    <figcaption>Blabla</figcaption></figure>
                ))}
            </div>
            {day.quotes !== null && <q className={day.id+"__quotes"}>{day.quotes}</q>}
        </section>
    )
}
