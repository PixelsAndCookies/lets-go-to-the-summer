import avatargroup from '/pictures/avatars_group_cut.png';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer>
            <img src={avatargroup} alt="" />
            <ul className="content">
                <li>
                    <Link to="/about">A propos</Link>
                </li>
                <li>FAQ</li>
                <li>Licences</li>
                <li>Made by Studio Balignon-an</li>
            </ul>
        </footer>
    );
};
