import { Survey } from "../Survey/survey";

export const Template2 = ({ day }) => {
    const template = "template2";



    return (
        <section key={template} className={template}>
            <div className={template+"__containerTxt"}>
                {day.contents.map((content) => (
                <p key={content.id}
                    className={template+"__containerTxt__text "+template+"__containerTxt__text--"+content.id}>
                    {content.text}
                </p>
                ))}
                <Survey name="sauces"/>
            </div>
            <div className={template+"__containerImg"}>
                {day.pictures.map((picture) => (
                    <figure key={picture.id}
                        className={template+"__containerImg--"+picture.id}>
                    <img
                        src={"/"+picture.src}
                        alt={picture.alt}
                        loading="lazy"
                    />
                    <figcaption>{picture.legend}</figcaption></figure>
                ))}
            </div>
            {day.quotes !== null && <q className={template+"__quotes"}>{day.quotes}</q>}
        </section>
    )
}
