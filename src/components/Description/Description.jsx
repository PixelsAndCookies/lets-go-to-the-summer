import descriptionJson from '../../data/description.json';

export const Description = (props) => {
    const content = descriptionJson[props.content];
    const infos = descriptionJson.informations;

    if (content === infos) {
        return (
            <article key={content.id} className="description">
                <h2>{content.title}</h2>
                <p>{content.text}</p>
            </article>
        );
    } else {
        return (
            <article key={content.id} className="description">
                <p>{content.text}</p>
            </article>
        );
    }
};
