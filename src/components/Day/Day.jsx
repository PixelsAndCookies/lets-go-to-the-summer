export const Day = ({ day, children }) => {
    return (
        <article key={day.id} className={'dayCard '+day.template}>
            <h2 className={'dayCard__title'}>{day.title}</h2>                
            {children}
        </article>
    )
}
