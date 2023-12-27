export const Template6 = ({ day }) => {
    const template = 'template6';
    const firstPicture = day.pictures.length > 0 ? day.pictures[0] : null;

    return (
        <section key={day.id} className={template}>
            <div className="first_picture">
                {firstPicture && (
                    <img
                        src={'/' + firstPicture.src}
                        alt={firstPicture.alt}
                        className="picture0"
                    />
                )}
            </div>
            <div className="container">
                {day.pictures.slice(1).map((picture, index) => (
                    <img
                        key={'picture' + index}
                        src={'/' + picture.src}
                        alt={picture.alt}
                        className={'picture' + (index+1)}
                    />
                ))}
                {day.contents.map((content, index) => (
                    <p
                        key={'txt' + index}
                        className={'txt' + index}
                        dangerouslySetInnerHTML={{ __html: content.text }}
                    ></p>
                ))}
            </div>
        </section>
    );
};
