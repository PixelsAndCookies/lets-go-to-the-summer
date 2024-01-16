import descriptionJson from '../../data/public/description.json'

export const Description = (props) => {
    const content = descriptionJson[props.content]
    if (content.id === 'informations') {
        const items = content.items
        return (
            <article key={content.id} className={content.id + ' description'}>
                <h2>{content.title}</h2>
                <div className="content">
                    {items.map((item) => (
                        <div key={item.id}>
                            {item.lien ? (
                                <a href={item.lien} target="_blank" rel="noreferrer" title={item.info}>
                                    <img src={item.icon} alt={item.id} />
                                </a>
                            ) : (
                                <img src={item.icon} alt={item.id} />
                            )}
                            <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                        </div>
                    ))}
                </div>
            </article>
        )
    } else {
        return (
            <article
                key={content.id}
                className={content.id + ' description'}
                dangerouslySetInnerHTML={{ __html: content.text }}
            ></article>
        )
    }
}
