import avatargroup from '../../../public/pictures/avatars_group.png'

export const Footer = () => {
    return (
        <footer className="footer">
            <img className="footer__avatar" src={avatargroup} alt="" />
            <div className="footer__text">
                <ul>
                    <h3>Lorem Ipsum</h3>
                    <li>dolor sit amet</li>
                    <li>consectetur adipiscing elit</li>
                    <li>sed do eiusmod</li>
                </ul>
                <ul>
                    <h3>Cicero Finibus </h3>
                    <li>tempor incididunt</li>
                    <li>labore et dolore</li>
                    <li>magna aliqua</li>
                </ul>
                <ul>
                    <h3>Bonorum Malorum</h3>
                    <li>Ut enim ad minim veniam</li>
                    <li>quis nostrud exercitation</li>
                    <li>ullamco laboris</li>
                </ul>
            </div>
        </footer>
    )
}
