import { useState, useEffect } from 'react'
import breakingNews from '../../data/breaking-news'

export const BreakingNews = () => {
    const [selectedId, setSelectedId] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedId((prevId) => (prevId + 1) % breakingNews.length)
        }, 7500)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            {breakingNews.map((news) => (
                <div key={news.id} className={`news-container ${news.id === selectedId ? 'visible' : 'hidden'}`}>
                    <p className="news-categ">BREAKING NEWS : {news.title}</p>
                    <p className="news-text">{news.content}</p>
                </div>
            ))}
        </div>
    )
}
