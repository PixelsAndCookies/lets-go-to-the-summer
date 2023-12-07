import days from '../../data/days.json'
import { Template1 } from '../Templates/Template1'
import { Template2 } from '../Templates/Template2'

export const Day = () => {
    return (
        <>
            {days.map((day) => {
                return (
                    <article key={day.id} className={`dayCard`}>
                        <h2 className={'dayCard__title'}>{day.title}</h2>
                        <Template1 />
                        <Template2 />
                    </article>
                )
            })}
        </>
    )
}
