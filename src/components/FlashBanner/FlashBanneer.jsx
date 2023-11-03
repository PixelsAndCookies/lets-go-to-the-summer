import breakingNews from '../../data/breaking-news.json'

export const FlashBanner = () => {
    return (
        <div>
            {breakingNews.map((text, id) => {
                return (
                    <div className="flashinfo-container" key={id}>
                        <p className="flashinfo-categ">BREAKING NEWS : {text.title}</p>
                        <p className="flashinfo-text">{text.content}</p>
                    </div>
                )
            })}
        </div>
    )
}
