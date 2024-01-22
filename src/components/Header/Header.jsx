// Import React
import { Link } from 'react-router-dom'
// Import Composants
import { Logo } from '../../components/Logo/Logo'
import { Navbar } from '../../components/Navbar/Navbar'
import returnIcon from '../../../public/pictures/icons/logout.png'

export const Header = ({ isHomePage }) => {
    return (
        <header className={isHomePage ? 'header' : 'header-nav'}>
            {isHomePage && (
                <Link to={'/'} className="header__returnToPrivacyChoice">
                    <img
                        src={returnIcon}
                        title="Retourner à la page de selection"
                        alt="icône returnIcon crée par fariha begum"
                    />
                </Link>
            )}
            <Logo />
            {!isHomePage && <Navbar />}
        </header>
    )
}
