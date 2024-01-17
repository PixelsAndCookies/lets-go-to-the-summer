import React from 'react'
import breakingNewsPublic from '../../data/public/breakingNews.json'
import breakingNewsPrivate from '../../data/private/breakingNewsPrivate.json'

export const BreakingNews = ({ isLogin }) => {
    const breakingNews = isLogin ? breakingNewsPrivate : breakingNewsPublic

    return (
        <div className="news-container">
            <p className="news-categ">BREAKING NEWS</p>
            <div className="news-text-bg news-text">
                <p>
                    {breakingNews.map((news) => (
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
