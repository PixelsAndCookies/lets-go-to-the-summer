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
        <section key={day.id} className="template5">
            <div className="container1">
                <img
                    key={firstPicture.id}
                    src={'/' + firstPicture.src}
                    alt={firstPicture.alt}
                    className={'container1__picture'}
                />
                {displayContentById('text1')}
            </div>
            <Carousel slides={filteredPictures} />
            <div className="container2">{displayContentById('text2')}</div>
            <div className="container3">
                <img
                    key={lastPicture.id}
                    src={'/' + lastPicture.src}
                    alt={lastPicture.alt}
                    className={'container3__gif'}
                />
            </div>
            <div className="container4">
                {day.quotes !== null && <q className="container4__quote">{day.quotes}</q>}
                {displayContentById('text3')}
            </div>
        </section>
    )
}
