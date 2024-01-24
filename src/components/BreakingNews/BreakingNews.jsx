import React from 'react'
import breakingNewsPublic from '../../data/public/breakingNews.json'

export const BreakingNews = () => {

    return (
        <div className="news-container">
            <p className="news-categ">BREAKING NEWS</p>
            <div className="news-text-bg news-text">
                <p>
                    {breakingNewsPublic.map((news) => (
                        <React.Fragment key={news.id}>
                            {' '}
                            <strong className="news-text-title">{news.title}</strong>
                            {' : '}
                            {news.content}
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    )
}
