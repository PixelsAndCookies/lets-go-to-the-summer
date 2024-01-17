import holidays from '../../data/cards-data.json'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav >
            <ul>
                <li>
                    <Link to="/home" className='navLink'>Accueil</Link>
                </li>
                {holidays.map((holiday) => {
                    return (
                        <li key={holiday.id}>
                            <Link to={`/holidays/${holiday.id}`} className='navLink'>{holiday.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
