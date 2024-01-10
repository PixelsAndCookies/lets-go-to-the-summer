import { Logo } from '../../components/Logo/Logo'
import { Navbar } from '../../components/Navbar/Navbar'

export const Header = ({ isHomePage }) => {
    return (
        <header className={isHomePage ? 'header' : 'header-nav'}>
            <Logo />
            {!isHomePage && <Navbar />}
        </header>
    )
}