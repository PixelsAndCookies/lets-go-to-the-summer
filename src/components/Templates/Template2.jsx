export const Template2 = ({ day }) => {
    const template = "template2";
    const sauceBarbecue = "30";
    const sauceBearnaise = "70";



    return (
        <section key={template} className={template}>
            <div className={template+"__containerTxt"}>
                {day.contents.map((content) => (
                <p key={content.id}
                    className={template+"__containerTxt__text "+template+"__containerTxt__text--"+content.id}>
                    {content.text}
                </p>
                ))}
                <form action="#">
                    <div>  
                        <input type="radio" value="0" id="barbecue" name="sauce"/> <label htmlFor="barbecue">Team barbecue</label>
                        <div className="progressBar"><div className="filler" style={{width: sauceBarbecue + '%'}}></div></div>
                    </div>
                    <div>
                        <input type="radio" value="1" id="bearnaise" name="sauce"/> <label htmlFor="bearnaise">Team béarnaise</label>
                        <div className="progressBar"><div className="filler" style={{width: sauceBearnaise + '%'}}></div></div>
                    </div>
                </form>
            </div>
            <div className={template+"__containerImg"}>
                {day.pictures.map((picture) => (
                    <figure key={picture.id}
                        className={template+"__containerImg--"+picture.id}>
                    <img
                        src={"/"+picture.src}
                        alt={picture.alt}
                    />
                    <figcaption>{picture.legend}</figcaption></figure>
                ))}
            </div>
            {day.quotes !== null && <q className={template+"__quotes"}>{day.quotes}</q>}
        </section>
    )
}
