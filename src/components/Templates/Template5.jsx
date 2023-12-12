import { Carousel } from '../Carousel/Carousel'

export const Template5 = ({ day }) => {
    const firstPicture = day.pictures[0]
    const filteredPictures = day.pictures.slice(1, -1)
    const lastPicture = day.pictures[day.pictures.length - 1]

    const displayContentById = (id) => {
        const matchContent = day.contents.find((content) => content.id === id)
        return (
            matchContent && (
                <p key={matchContent.id} className={matchContent.id}>
                    {matchContent.text}
                </p>
            )
        )
    }

    return (
        <section key={day.id} className="template3">
            <div className="container">
                <img
                    key={firstPicture.id}
                    src={'/' + firstPicture.src}
                    alt={firstPicture.alt}
                    className={'first-picture'}
                />
                {displayContentById('text1')}
            </div>
            <Carousel slides={filteredPictures} />
            {displayContentById('text2')}
            <img
                key={lastPicture.id}
                src={'/' + lastPicture.src}
                alt={lastPicture.alt}
                className={'last-picture'}
            />
            {day.quotes !== null && <q>{day.quotes}</q>}
            {displayContentById('text3')}
        </section>
    )
}
