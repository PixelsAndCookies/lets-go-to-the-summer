export const Template3 = ({day}) => {
    const template = "template3";

    return (
        <section key={day.id} className={template}>
            <div className="containerImg">
                {day.pictures.map((picture, index) => (
                    <img key={"picture"+index} src={"/"+ picture.src} alt={picture.alt} className={"picture"+index} loading="lazy"/>
                ))}
            </div>
            <div className="containerTxt">
                {day.contents.map((content,index) => (
                    <p key={"txt"+index} className={"txt"+index} dangerouslySetInnerHTML={ {__html: content.text} }></p>
                ))}
            </div>
        </section>
    )
}
