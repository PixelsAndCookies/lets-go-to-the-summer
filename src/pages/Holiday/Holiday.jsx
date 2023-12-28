import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Error404 } from '../Error404/Error404'
import { Logo } from '../../components/Logo/Logo'
import { Navbar } from '../../components/Navbar/Navbar'
import { Day } from '../../components/Day/Day'
import { Template1 } from '../../components/Templates/Template1'
import { Template2 } from '../../components/Templates/Template2'
import { Template3 } from '../../components/Templates/Template3'
import { Template4 } from '../../components/Templates/Template4'
import { Template5 } from '../../components/Templates/Template5'
import { Template6 } from '../../components/Templates/Template6'
import { Template7 } from '../../components/Templates/Template7'
import days from '../../data/days.json'

export const Holiday = () => {
    // Extrait la valeur du paramètre 'year' de l'URL. Ex: "/holidays/20xx", 'year' prendra la valeur '20xx'
    const { year } = useParams()
    // Utilise la valeur extraite de l'URL 'year' pour accéder à la liste des jours spécifique à cette année dans le JSON 'days'
    const yearsList = days.years[year]
    // Si 'yearsList' existe et a une propriété 'days', alors 'Object.values(yearsList.days)' extrait les valeurs de cette liste de jours dans 'daysList'
    const [daysList] = useState(yearsList && yearsList.days ? Object.values(yearsList.days) : null)
    
    if (!daysList) {
        return <Error404 />
    }

    return (
        <>
            <header className="holiday-header">
                <Logo />
                <Navbar />
            </header>
            <main className="holiday-main">
                {daysList.map((day) => (
                    <Day key={day.id} day={day}>
                        {getTemplateForDay(day)}
                    </Day>
                ))}
            </main>
        </>
    )
}

// Fonction pour obtenir le bon template en fonction du jour
const getTemplateForDay = (day) => {
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
            return <Template5 day={day} />
        case 'Template6':
            return <Template6 day={day} />
        case 'Template7':
            return <Template7 day={day} />
        default:
            return null
    }
}
