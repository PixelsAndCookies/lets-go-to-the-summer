import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
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
    const { year } = useParams()
    const yearsList = days.years[year]
    const [daysList, setDaysList] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (yearsList && yearsList.days) {
            const daysArray = Object.values(yearsList.days);
            setDaysList(daysArray);

            if (daysArray.length === 0) {
                navigate('/error404');
            }
        } else {
            navigate('/error404');
        }
    }, [year, yearsList, navigate]);

    if (!daysList) {
        return <Error404 />
    }

    return (
        <>
            <div className='red-cercle rotating_1'></div>
            <svg className='blue-triangle rotating_2' width="797" height="838" viewBox="0 0 797 838" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M99.6363 832.288C47.4015 853.376 -7.72616 809.016 1.69682 753.479L119.299 60.3521C128.495 6.15103 192.591 -18.1632 235.422 16.3015L769.73 446.24C812.561 480.705 802.525 548.518 751.547 569.099L99.6363 832.288Z" fill="url(#paint0_linear_220_37)"/>
                <defs>
                    <linearGradient id="paint0_linear_220_37" x1="244.994" y1="767.729" x2="439.159" y2="200.293" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0996A5"/>
                    <stop offset="1" stopColor="#D9D9D9" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>

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
