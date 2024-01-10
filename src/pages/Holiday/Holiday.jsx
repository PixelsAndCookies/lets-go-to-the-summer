import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Error404 } from '../Error404/Error404'
import { Template1 } from '../../components/Templates/Template1'
import { Template2 } from '../../components/Templates/Template2'
import { Template3 } from '../../components/Templates/Template3'
import { Template4 } from '../../components/Templates/Template4'
import { Template5 } from '../../components/Templates/Template5'
import { Template6 } from '../../components/Templates/Template6'
import { Template7 } from '../../components/Templates/Template7'
import days from '../../data/days.json'
import { Header } from '../../components/Header/Header'
import { GeometricShapes } from '../../components/GeometricShapes/GeometricShapes'

// Fonction pour obtenir le bon template selon le jour
const getTemplateForDay = (day, isDropdownOpen) => {
    switch (day.template) {
        case 'Template1':
            return <Template1 day={day} />
        case 'Template2':
            return <Template2 day={day} />
        case 'Template3':
            return <Template3 day={day} />
        case 'Template4':
            return <Template4 day={day} />
        case 'Template5':
            return <Template5 day={day} isDropdownOpen={isDropdownOpen} />
        case 'Template6':
            return <Template6 day={day} />
        case 'Template7':
            return <Template7 day={day} />
        default:
            return null
    }
}

export const Holiday = () => {
    const { year } = useParams()
    const yearsList = days.years[year]
    const [daysList, setDaysList] = useState(null)
    const navigate = useNavigate()

    // Gère les dropdowns
    const [activeDropdowns, setActiveDropdowns] = useState([])
    const activeDropdown = (index) => {
        setActiveDropdowns((previousState) => {
            const newActiveDropdowns = [...previousState]
            newActiveDropdowns[index] = !newActiveDropdowns[index]
            return newActiveDropdowns
        })
    }

    useEffect(() => {
        const daysArray = Object.values(yearsList.days)
        setDaysList(daysArray)

        if (window.innerWidth > 860) {
            // Les dropdowns sont ouverts par défaut sur desktop
            setActiveDropdowns(Array(daysArray.length).fill(true))
        } else {
            // Les dropdowns sont fermés par défaut sur mobile
            setActiveDropdowns(Array(daysArray.length).fill(false))
        }

        if (daysArray.length === 0) {
            navigate('/error404')
        }
    }, [year, yearsList, navigate])

    if (!daysList) {
        return <Error404 />
    }

    return (
        <>
            <GeometricShapes />
            <Header />
            <main className="holiday-main">
                {daysList.map((day, index) => (
                    <article key={day.id} className={`dayCard fadein--${index}`}>
                        <div className={`dropdown ${activeDropdowns[index] ? 'active' : ''}`}>
                            <div
                                className={`dropdown__title ${
                                    day.template === 'Template6' && activeDropdowns[index]
                                        ? 'dropdown__title--absolute'
                                        : ''
                                }`}
                                onClick={() => activeDropdown(index)}
                            >
                                <h2
                                    className={`dayCard__title ${
                                        day.template === 'Template7' && activeDropdowns[index]
                                            ? 'dayCard__title--displayNone'
                                            : ''
                                    }${
                                        day.template === 'Template6' && activeDropdowns[index]
                                            ? 'dayCard__title--white'
                                            : ''
                                    } `}
                                >
                                    {day.title}
                                </h2>
                                <button className="btn dropdown__btn">
                                    {!activeDropdowns[index] ? '+' : '-'}
                                </button>
                            </div>
                            {activeDropdowns[index] && (
                                <div className="dropdown__content">
                                    {getTemplateForDay(day, activeDropdowns[index])}
                                </div>
                            )}
                        </div>
                    </article>
                ))}
            </main>
        </>
    )
}
