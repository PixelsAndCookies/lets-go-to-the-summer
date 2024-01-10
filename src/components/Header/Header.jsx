import { Logo } from '../../components/Logo/Logo'
import { Navbar } from '../../components/Navbar/Navbar'

export const Header = ({ isHomePage }) => {
    return (
        <header className={isHomePage ? 'home-header' : 'holiday-header'}>
            <Logo />
            {!isHomePage && <Navbar />}
        </header>
    )
}