import React from 'react';
import { useState, useEffect } from 'react';
import breakingNews from '../../data/breaking-news';

export const BreakingNews = () => {
    const [selectedId, setSelectedId] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSelectedId((prevId) => (prevId + 1) % breakingNews.length);
        }, breakingNews[selectedId]);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="news-container">
            <p className="news-categ">BREAKING NEWS</p>
            <div className="news-text-bg news-text">
                <p>
                    {breakingNews.map((news) => (
                        <React.Fragment key={news.id}>
                            {' '}
                            <strong className="news-text-title">
                                {news.title}
                            </strong>
                            {' : '}
                            {news.content}
                        </React.Fragment>
                    ))}
                </p>
            </div>
        </div>
    );
};
