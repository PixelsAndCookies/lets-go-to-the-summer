export const Template1 = ({ day }) => {
    const template = "template1";
    return (
        <section key={day.id} className={template}>
            {day.contents.map((content) => (
            <p key={content.id} className={content.id}>
                {content.text}
            </p>
            ))}
            <div className={"containerImg"}>
                {day.pictures.map((picture,index) => (
                    <img
                        key={picture.id}
                        className={"picture"+index}
                        src={"/"+picture.src}
                        alt={picture.alt}
                    />
                ))}
            </div>
            {day.quotes !== null && <q className="quotes">{day.quotes}</q>}
        </section>
    )
}
