export const Template7 = ({ day }) => {
    const template = 'template7'

    return (
        <section key={day.id} className={template}>
            <p className="title">{day.title}</p>
            {day.pictures.map((picture, index) => (
                <img
                    key={'picture' + index}
                    src={'/' + picture.src}
                    alt={picture.alt}
                    className={'picture' + index}
                    loading="lazy"
                />
            ))}
            {day.contents.map((content, index) => (
                <p
                    key={'txt' + index}
                    className={'txt' + index}
                    dangerouslySetInnerHTML={{ __html: content.text }}
                ></p>
            ))}
        </section>
    )
}
