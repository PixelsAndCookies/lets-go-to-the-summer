import { Link } from 'react-router-dom'

export const Template7 = ({ day, isLogin }) => {
    const template = 'template7'

    const moumouLink = () => {
        const moumouContent = (
            <img
                className="mouette"
                src="/pictures/icons/seagull-64.png"
                alt="icone de mouette"
            ></img>
        )
        if (isLogin) {
            return <Link to="/holidays/moumou">{moumouContent}</Link>
        } else {
            return <Link to="">{moumouContent}</Link>
        }
    }

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
            <div className="moumou">{moumouLink()}</div>
        </section>
    )
}
