import avatargroup from '/pictures/avatars_group_cut.png'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer>
            <img src={avatargroup} alt="" className="avatars" />
            <ul className="content">
                <li>
                    <Link to="/about">A propos</Link>
                </li>
                <li>
                    <Link to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link to="/licences">Licences</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>Made by Studio Balignon-an</li>
            </ul>
        </footer>
    )
}
