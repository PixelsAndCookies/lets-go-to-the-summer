import holidays from '../../data/cards-data.json'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            {holidays.map((holiday) => {
                return (
                    <Link to={`/holidays/${holiday.id}`} key={holiday.id}>
                        {holiday.title}
                    </Link>
                )
            })}
        </nav>
    )
}
