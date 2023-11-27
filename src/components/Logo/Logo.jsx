import { Link } from 'react-router-dom'
import logo from '../../assets/logo/Logo_sans_fond.svg'

export const Logo = () => {
    return (
        <Link to="/">
            <img src={logo} alt="Logo Summer" />
        </Link>
    )
}
