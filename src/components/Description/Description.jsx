import descriptionJson from '../../data/public/description.json'

export const Description = ({ content }) => {
    if (!content) {
        return null
    }

    const contentData =  descriptionJson[content]

    if (!contentData) {
        return null;
    }

    if (contentData.id === 'informations') {
        const items = contentData.items

        return (
            <article key={contentData.id} className={contentData.id + ' description'}>
                <h2>{contentData.title}</h2>
                <div className="content">
                    {items && items.map((item) => (
                        <div key={item.id}>
                            {item.lien ? (
                                <a
                                    href={item.lien}
                                    target="_blank"
                                    rel="noreferrer"
                                    title={item.info}
                                >
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
                key={contentData.id}
                className={contentData.id + ' description'}
                dangerouslySetInnerHTML={{ __html: contentData.text }}
            ></article>
        )
    }
}
