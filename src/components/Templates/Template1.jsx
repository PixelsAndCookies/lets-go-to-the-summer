//import React from 'react'
//import days from '../../data/days.json'

export const Template1 = () => {
    return (
        <>
            {/* {days.map((day) => {
                return (
                    <div key={day.id} className={`dayCard__${day.id}`}>
                        {day.contents.map((content) => (
                            <React.Fragment key={content.id}>
                                {typeof content.text === 'string' ? (
                                    <p
                                        className={`dayCard__${day.id}__text dayCard__${day.id}__text--${content.id}`}>
                                        {content.text}
                                    </p>
                                ) : (
                                    <div className={`dayCard__${day.id}__list`}>
                                        <p className={`dayCard__${day.id}__list__title`}>
                                            {content.text.name}
                                        </p>
                                        <ul>
                                            {content.text.list.map((team, index) => (
                                                <li key={index}>{team}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                        <div className={`dayCard__${day.id}__container-img`}>
                            {day.pictures.map((picture) => (
                                <img
                                    key={picture.id}
                                    className={`dayCard__${day.id}__container-img--${picture.id}`}
                                    src={`/${picture.src}`}
                                    alt={picture.alt}
                                />
                            ))}
                        </div>
                        {day.quotes !== null && <q className="quotes">{day.quotes}</q>}
                    </div>
                )
            })} */}
        </>
    )
}
