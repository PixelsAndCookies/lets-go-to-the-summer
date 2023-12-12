export const Template6 = ({ day }) => {
    const template = 'template6';

    return (
        <section key={day.id} className={template}>
            <div className="container">
                {day.pictures.map((picture, index) => (
                    <img
                        key={'picture' + index}
                        src={'/' + picture.src}
                        alt={picture.alt}
                        className={'picture' + index}
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
