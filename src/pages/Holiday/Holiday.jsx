import { Day } from '../../components/Day/Day'
import { Logo } from '../../components/Logo/Logo'
import { Navbar } from '../../components/Navbar/Navbar'
import { Template1 } from '../../components/Templates/Template1'
import { Template2 } from '../../components/Templates/Template2'
import { Template3 } from '../../components/Templates/Template3'
import { Template4 } from '../../components/Templates/Template4'
import { Template5 } from '../../components/Templates/Template5'
import { Template6 } from '../../components/Templates/Template6'
import { Template7 } from '../../components/Templates/Template7'
import days from '../../data/days.json'

export const Holiday = () => {
    const [saturday, sunday, monday, tuesday, wednesday, thursday, friday] = days
    return (
        <>
            <header className="holiday-header">
                <Logo />
                <Navbar />
            </header>
            <main className="holiday-main">
                <Day key={saturday.id} day={saturday}>
                    <Template1 day={saturday} />
                </Day>
                <Day key={sunday.id} day={sunday}>
                    <Template2 day={sunday} />
                </Day>
                <Day key={monday.id} day={monday}>
                    <Template3 day={monday} />
                </Day>
                <Day key={tuesday.id} day={tuesday}>
                    <Template4 day={tuesday} />
                </Day>
                <Day key={wednesday.id} day={wednesday}>
                    <Template5 day={wednesday} />
                </Day>
                <Day key={thursday.id} day={thursday}>
                    <Template6 day={thursday} />
                </Day>
                <Day key={friday.id} day={friday}>
                    <Template7 day={friday} />
                </Day>                 
            </main>
        </>
    )
}
