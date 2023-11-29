import descriptionJson from '../../data/description.json';

export const Description = (props) => {
    const content = descriptionJson[props.content];
    const infos = descriptionJson.informations;

    if (content === infos) {
        return (
            <article key={content.id} className="description informations">
                <h2>{content.title}</h2>
                <div className="text">
                    <p>{content.info_2023}</p>
                    <p>{content.info_2024}</p>
                    <p>{content.info_2025}</p>
                </div>
            </article>
        );
    } else {
        return (
            <article key={content.id} className="description presentation">
                <p>{content.text}</p>
            </article>
        );
    }
};
