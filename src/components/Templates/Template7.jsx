import { Link } from 'react-router-dom';

export const Template7 = ({ day }) => {
    const template = 'template7';
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
            <div className='moumou'>
                <Link to="/holidays/moumou">
                    <img
                        className="mouette"
                        src="/pictures/icons/seagull-64.png"
                        alt="icone de mouette"
                    ></img>
                </Link>
            </div>
        </section>
    );
};
