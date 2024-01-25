export const Template4 = ({ day }) => {

    const template = "template4";
    return (
        <section key={day.id} className={template}>
            <div className="container">
                {day.pictures.map((picture, index) => (
                    <img key={"picture"+index} src={"/"+ picture.src} alt={picture.alt} className={"picture"+index} loading="lazy"/>
                ))}
                {day.contents.map((content,index) => (
                    <p key={"txt"+index} className={"txt"+index} dangerouslySetInnerHTML={ {__html: content.text} }></p>
                ))}
            </div>
        </section>
    )
}
