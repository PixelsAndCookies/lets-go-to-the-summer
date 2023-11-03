import breakingNews from '../../data/breaking-news'

export const BreakingNews = () => {
    return (
        <div>
            {breakingNews.map((text, id) => {
                return (
                    <div className="news-container" key={id}>
                        <p className="news-categ">BREAKING NEWS : {text.title}</p>
                        <p className="news-text">{text.content}</p>
                    </div>
                )
            })}
        </div>
    )
}
