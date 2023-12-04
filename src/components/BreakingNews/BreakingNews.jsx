<<<<<<< Updated upstream
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
                <div
                    key={news.id}
                    className={`news-container ${news.id === selectedId ? 'visible' : 'hidden'}`}>
                    <p className="news-categ">BREAKING NEWS : {news.title}</p>
                    <p className="news-text">{news.content}</p>
                </div>
            ))}
        </div>
    )
}
=======
import breakingNews from '../../data/breaking-news';

export const BreakingNews = () => {
    return (
        <div>
            <p className="news-categ">BREAKING NEWS</p>
            {breakingNews.map((news) => (
                <div key={news.id} className="news-container news-text-bg">
                    <p className="news-text">
                        <strong className="news-text-title">
                            {news.title}
                        </strong>{' '}
                        : {news.content}
                    </p>
                </div>
            ))}
        </div>
    );
};

// import { useState, useEffect } from 'react';
// import breakingNews from '../../data/breaking-news';

// export const BreakingNews = () => {
//     const [selectedId, setSelectedId] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setSelectedId((prevId) => (prevId + 1) % breakingNews.length);
//         }, 9500);

//         return () => {
//             clearInterval(interval);
//         };
//     }, []);

//     return (
//         <div>
//             {breakingNews.map((news) => (
//                 <div
//                     key={news.id}
//                     className={`news-container ${
//                         news.id === selectedId ? 'visible' : 'hidden'
//                     }`}
//                 >
//                     <p className="news-categ">BREAKING NEWS</p>
//                     <div className="news-text-bg">
//                         <p className="news-text">
//                             <strong className="news-text-title">
//                                 {news.title}
//                             </strong>{' '}
//                             : {news.content}
//                         </p>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// };
>>>>>>> Stashed changes
