import { Logo } from '../../components/Logo/Logo'
import { Navbar } from '../../components/Navbar/Navbar'

export const Header = ({ isHomePage }) => {
    return (
        <header className={isHomePage ? 'header' : 'headerNav'}>
            <Logo />
            {!isHomePage && <Navbar />}
        </header>
    )
}